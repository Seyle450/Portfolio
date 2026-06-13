/**
 * Portfolio Analytics Tracker – DSGVO-konform
 * Trackt nur nach expliziter Einwilligung (TTDSG §25, DSGVO Art. 6 Abs. 1 lit. a).
 * Beinhaltet: Consent-Banner, Seitenaufrufe, Verweildauer, Session-Flow.
 */

(function () {
  var WORKER_URL = 'https://portfolio-analytics.seyle450.workers.dev';
  var CONSENT_KEY = 'analytics_consent'; // localStorage – darf ohne Einwilligung gesetzt werden (Funktionszweck)

  // ── Consent prüfen ───────────────────────────────────────────────────────
  function getConsent()    { try { return localStorage.getItem(CONSENT_KEY); } catch(e) { return null; } }
  function setConsent(val) { try { localStorage.setItem(CONSENT_KEY, val); }  catch(e) {} }
  function hasConsent()    { return getConsent() === 'granted'; }
  function isDenied()      { return getConsent() === 'denied'; }

  // ── Canvas-Fingerprint ───────────────────────────────────────────────────
  function canvasFingerprint() {
    try {
      var c = document.createElement('canvas');
      var ctx = c.getContext('2d');
      ctx.textBaseline = 'top';
      ctx.font = '14px Arial';
      ctx.fillText('Tracker', 2, 2);
      return c.toDataURL().slice(-20);
    } catch(e) { return 'nc'; }
  }

  // ── Stabiler Visitor-Hash ────────────────────────────────────────────────
  function getVisitorId() {
    var parts = [
      canvasFingerprint(),
      screen.width + 'x' + screen.height,
      navigator.language || '',
      (Intl.DateTimeFormat().resolvedOptions().timeZone) || '',
      navigator.hardwareConcurrency || '',
    ].join('|');
    var h = 2166136261;
    for (var i = 0; i < parts.length; i++) {
      h ^= parts.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return (h >>> 0).toString(16).padStart(8, '0');
  }

  // ── Session-ID ───────────────────────────────────────────────────────────
  function getSessionId() {
    var k = '_as', sid = sessionStorage.getItem(k);
    if (!sid) { sid = Math.random().toString(36).slice(2) + Date.now().toString(36); sessionStorage.setItem(k, sid); }
    return sid;
  }

  function getSessionPageIndex() {
    var k = '_api', n = parseInt(sessionStorage.getItem(k) || '0', 10) + 1;
    sessionStorage.setItem(k, String(n));
    return n;
  }

  function getPreviousPage() { return sessionStorage.getItem('_pp') || ''; }
  function setCurrentPage(p) { sessionStorage.setItem('_pp', p); }

  // ── Verweildauer ─────────────────────────────────────────────────────────
  function getLastPageStart() { return parseInt(sessionStorage.getItem('_ps') || '0', 10); }
  function setPageStart(ts)   { sessionStorage.setItem('_ps', String(ts)); }

  // ── Event senden ─────────────────────────────────────────────────────────
  function sendEvent(payload) {
    fetch(WORKER_URL + '/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(function () {});
  }

  // Verweildauer der vorherigen Seite nachsenden
  function sendDuration(page, durationMs) {
    if (!page || durationMs < 1000) return;
    fetch(WORKER_URL + '/duration', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: page, durationMs: durationMs, sessionId: getSessionId(), visitorId: getVisitorId(), timestamp: Date.now() }),
      keepalive: true,
    }).catch(function () {});
  }

  function track() {
    if (!hasConsent()) return;
    var now = Date.now();
    var currentPage = location.pathname + location.search;
    var previousPage = getPreviousPage();
    var lastStart = getLastPageStart();

    // Verweildauer vorherige Seite senden
    if (previousPage && lastStart > 0) {
      sendDuration(previousPage, now - lastStart);
    }

    setPageStart(now);
    setCurrentPage(currentPage);

    sendEvent({
      page:         currentPage,
      previousPage: previousPage,
      pageIndex:    getSessionPageIndex(),
      referrer:     document.referrer || '',
      userAgent:    navigator.userAgent,
      screenWidth:  screen.width,
      language:     navigator.language || '',
      timestamp:    now,
      sessionId:    getSessionId(),
      visitorId:    getVisitorId(),
    });
  }

  // Verweildauer beim Verlassen der Seite
  function onLeave() {
    if (!hasConsent()) return;
    var page = sessionStorage.getItem('_pp');
    var start = getLastPageStart();
    if (page && start > 0) sendDuration(page, Date.now() - start);
  }

  // ── Consent-Banner ───────────────────────────────────────────────────────
  function injectBanner() {
    if (document.getElementById('_acb')) return;

    var style = document.createElement('style');
    style.textContent = [
      '#_acb{position:fixed;bottom:0;left:0;right:0;z-index:99999;',
      'background:#fff;border-top:1px solid #e2e8f0;',
      'padding:1rem 1.5rem;display:flex;align-items:center;',
      'flex-wrap:wrap;gap:1rem;box-shadow:0 -4px 24px rgba(0,0,0,.1);',
      'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;',
      'font-size:.85rem;color:#1e293b;line-height:1.5;}',
      '#_acb p{margin:0;flex:1;min-width:220px;}',
      '#_acb strong{display:block;margin-bottom:.2rem;font-size:.9rem;}',
      '#_acb a{color:#6366f1;text-decoration:underline;cursor:pointer;}',
      '#_acb .acb-btns{display:flex;gap:.6rem;flex-shrink:0;}',
      '#_acb button{padding:.55rem 1.2rem;border-radius:6px;font-size:.82rem;font-weight:600;cursor:pointer;border:none;font-family:inherit;}',
      '#_acb .acb-deny{background:#f1f5f9;color:#475569;}',
      '#_acb .acb-deny:hover{background:#e2e8f0;}',
      '#_acb .acb-accept{background:#6366f1;color:#fff;}',
      '#_acb .acb-accept:hover{background:#4f52d9;}',
    ].join('');
    document.head.appendChild(style);

    var banner = document.createElement('div');
    banner.id = '_acb';
    banner.innerHTML = [
      '<p>',
      '<strong>Analyse-Cookies</strong>',
      'Ich nutze eigene, anonymisierte Analyse-Tools um zu verstehen, wie Besucher diese Website nutzen.',
      ' Keine Drittanbieter, keine Werbung. ',
      '<a onclick="document.getElementById(\'_acdp\').style.display=\'block\'" href="/Portfolio/datenschutz.html" target="_blank">Datenschutzerklärung</a>',
      '</p>',
      '<div class="acb-btns">',
      '  <button class="acb-deny"  id="_acbdeny">Ablehnen</button>',
      '  <button class="acb-accept" id="_acbaccept">Akzeptieren</button>',
      '</div>',
    ].join('');
    document.body.appendChild(banner);

    document.getElementById('_acbaccept').onclick = function () {
      setConsent('granted');
      banner.remove();
      style.remove();
      track();
    };
    document.getElementById('_acbdeny').onclick = function () {
      setConsent('denied');
      banner.remove();
      style.remove();
    };
  }

  // ── Init ─────────────────────────────────────────────────────────────────
  function init() {
    if (isDenied()) return;

    if (hasConsent()) {
      track();
    } else {
      // Banner anzeigen (erst wenn DOM bereit)
      if (document.body) {
        injectBanner();
      } else {
        document.addEventListener('DOMContentLoaded', injectBanner);
      }
    }

    // Verweildauer beim Verlassen
    window.addEventListener('beforeunload', onLeave);
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') onLeave();
    });
  }

  // SPA-Support
  function patchHistory(method) {
    var orig = history[method];
    history[method] = function () { orig.apply(this, arguments); track(); };
  }
  window.addEventListener('popstate', track);
  patchHistory('pushState');
  patchHistory('replaceState');

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
