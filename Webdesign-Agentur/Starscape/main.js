window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
  
  // Sidebar toggle
  const menuBtn = document.getElementById('menuBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('open');
    });
  }
  
  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
    });
  }
  
  // Collapse button for sidebar (desktop)
  const collapseBtn = document.getElementById('collapseBtn');
  if (collapseBtn) {
    collapseBtn.addEventListener('click', () => {
      document.body.classList.toggle('sidebar-collapsed');
      localStorage.setItem('sidebar-collapsed', document.body.classList.contains('sidebar-collapsed'));
    });
  }
  
  // Load sidebar state
  if (localStorage.getItem('sidebar-collapsed') === 'true') {
    document.body.classList.add('sidebar-collapsed');
  }
  
  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Auto-set active link based on current page filename
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.s-link[href]').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentFile) link.classList.add('active');
  });
});

function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg + ' booked!';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ======================================================================
   SPACE BOOKING  —  date + time-slot picker with live availability
   ====================================================================== */

const SPACES = {
  'lernraum-a1':    { name: 'Lernraum A1',     loc: 'HSB Bremen · Gebäude A · 1. OG',    seats: 6,  fullToday: false, icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>' },
  'lernraum-316':   { name: 'Lernraum 316',    loc: 'HSB Bremen · Gebäude B · EG',       seats: 8,  fullToday: false, icon: '<rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 7V5a2 2 0 0 0-4 0v2"></path>' },
  'ab-galerie':     { name: 'AB Galerie',      loc: 'HSB Bremen · Media Center · EG',    seats: 4,  fullToday: false, icon: '<rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="M21 15l-5-5L5 21"></path>' },
  'innovation-lab': { name: 'Innovation Lab',  loc: 'HSB Bremen · C-Bau · 2. OG',        seats: 12, fullToday: true,  icon: '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>' },
  'conference':     { name: 'Conference Room', loc: 'HSB Bremen · Hauptgebäude · 3. OG', seats: 20, fullToday: false, icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>' },
  'rooftop':        { name: 'Rooftop Terrace', loc: 'HSB Bremen · Dachterasse · 5. OG',  seats: 30, fullToday: true,  icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>' },
};

const BK_OPEN_HOUR = 8;   // first bookable hour
const BK_CLOSE_HOUR = 19; // last bookable start hour
const BK_KEY = 'starscape-bookings';

let bkSpace = null, bkDate = null, bkSlot = null;

/* ---- tiny helpers ---- */
function _tt(key) { return (typeof t === 'function') ? t(key) : key; }
function _lang() { return (typeof getLang === 'function') ? getLang() : 'en'; }
function _locale() { return _lang() === 'de' ? 'de-DE' : 'en-GB'; }
function _fmt(str, obj) { return String(str).replace(/\{(\w+)\}/g, (m, k) => obj[k] != null ? obj[k] : m); }
function _pad(n) { return String(n).padStart(2, '0'); }
function _dateStr(d) { return d.getFullYear() + '-' + _pad(d.getMonth() + 1) + '-' + _pad(d.getDate()); }
function _today() { return _dateStr(new Date()); }
function _prettyDate(ds) {
  const p = ds.split('-').map(Number);
  return new Date(p[0], p[1] - 1, p[2]).toLocaleDateString(_locale(), { weekday: 'short', day: 'numeric', month: 'short' });
}
function _hash(str) { let h = 0; for (let i = 0; i < str.length; i++) { h = (h * 31 + str.charCodeAt(i)) >>> 0; } return h; }
function _bkKey(space, date, hour) { return space + '|' + date + '|' + hour; }

function _loadBookings() {
  try { return JSON.parse(localStorage.getItem(BK_KEY)) || {}; } catch (e) { return {}; }
}
function _setBooking(key, on) {
  const b = _loadBookings();
  if (on) b[key] = true; else delete b[key];
  localStorage.setItem(BK_KEY, JSON.stringify(b));
}

/* Deterministic "already taken by others" pattern so each room/day looks real. */
function _preBooked(space, date, hour) {
  const cfg = SPACES[space];
  if (cfg && cfg.fullToday && date === _today()) return true;
  return (_hash(space + date + hour) % 100) < 33;
}

/* Status of one slot: 'past' | 'mine' | 'booked' | 'free' */
function _slotStatus(space, date, hour) {
  const isToday = date === _today();
  if (isToday && hour <= new Date().getHours()) return 'past';
  if (_loadBookings()[_bkKey(space, date, hour)]) return 'mine';
  if (_preBooked(space, date, hour)) return 'booked';
  return 'free';
}

function _firstFreeDate(space) {
  const base = new Date(); base.setHours(0, 0, 0, 0);
  for (let i = 0; i < 14; i++) {
    const d = new Date(base); d.setDate(base.getDate() + i);
    const ds = _dateStr(d);
    for (let h = BK_OPEN_HOUR; h <= BK_CLOSE_HOUR; h++) {
      if (_slotStatus(space, ds, h) === 'free') return ds;
    }
  }
  return _today();
}

/* ---- rendering ---- */
function _renderDates() {
  const wrap = document.getElementById('bkDates');
  if (!wrap) return;
  wrap.innerHTML = '';
  const base = new Date(); base.setHours(0, 0, 0, 0);
  for (let i = 0; i < 14; i++) {
    const d = new Date(base); d.setDate(base.getDate() + i);
    const ds = _dateStr(d);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'date-pill' + (ds === bkDate ? ' active' : '');
    const dow = i === 0 ? _tt('bk_today') : d.toLocaleDateString(_locale(), { weekday: 'short' });
    btn.innerHTML = '<span class="dp-dow">' + dow + '</span>' +
                    '<span class="dp-day">' + d.getDate() + '</span>' +
                    '<span class="dp-mon">' + d.toLocaleDateString(_locale(), { month: 'short' }) + '</span>';
    btn.addEventListener('click', () => { bkDate = ds; bkSlot = null; _renderDates(); _renderSlots(); _updateSummary(); });
    wrap.appendChild(btn);
  }
}

function _renderSlots() {
  const grid = document.getElementById('bkSlots');
  if (!grid || !bkDate) return;
  grid.innerHTML = '';
  let free = 0;
  for (let h = BK_OPEN_HOUR; h <= BK_CLOSE_HOUR; h++) {
    const label = _pad(h) + ':00';
    const status = _slotStatus(bkSpace, bkDate, h);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'slot' + (status !== 'free' ? ' ' + status : '') + (bkSlot === h ? ' selected' : '');
    let tag;
    if (status === 'free')   { tag = _tt('bk_free');  free++; }
    else if (status === 'mine')  { tag = _tt('bk_yours'); }
    else if (status === 'booked') { tag = _tt('bk_taken'); }
    else { tag = _tt('bk_past'); }
    btn.innerHTML = '<span>' + label + '</span><small>' + tag + '</small>';
    if (status === 'free') {
      btn.addEventListener('click', () => { bkSlot = (bkSlot === h ? null : h); _renderSlots(); _updateSummary(); });
    } else if (status === 'mine') {
      // a slot the user booked — click to cancel it
      btn.addEventListener('click', () => {
        _setBooking(_bkKey(bkSpace, bkDate, h), false);
        if (bkSlot === h) bkSlot = null;
        _renderSlots(); _updateSummary();
        _bkToast(_fmt(_tt('bk_cancelled'), { time: label }));
      });
    } else {
      btn.disabled = true;
    }
    grid.appendChild(btn);
  }
  if (free === 0) {
    const note = document.createElement('div');
    note.className = 'slot-empty';
    note.textContent = _tt('bk_full');
    grid.appendChild(note);
  }
}

function _updateSummary() {
  const sum = document.getElementById('bkSummary');
  const btn = document.getElementById('bkConfirm');
  if (!sum || !btn) return;
  if (bkDate && bkSlot != null) {
    const label = _pad(bkSlot) + ':00';
    sum.removeAttribute('data-i18n');
    sum.innerHTML = _fmt(_tt('bk_summary'), { time: '<b>' + label + '</b>', date: '<b>' + _prettyDate(bkDate) + '</b>' });
    btn.disabled = false;
  } else {
    sum.setAttribute('data-i18n', 'bk_summary_empty');
    sum.textContent = _tt('bk_summary_empty');
    btn.disabled = true;
  }
}

/* ---- open / close / confirm ---- */
function openBooking(id) {
  const cfg = SPACES[id];
  if (!cfg) return;
  bkSpace = id; bkSlot = null;
  document.getElementById('bkName').textContent = cfg.name;
  document.getElementById('bkLoc').textContent = cfg.loc;
  document.getElementById('bkIcon').innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">' + cfg.icon + '</svg>';

  bkDate = _firstFreeDate(id);
  _renderDates(); _renderSlots(); _updateSummary();

  const modal = document.getElementById('bookingModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBooking() {
  const modal = document.getElementById('bookingModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function confirmBooking() {
  if (!bkDate || bkSlot == null) return;
  const label = _pad(bkSlot) + ':00';
  _setBooking(_bkKey(bkSpace, bkDate, bkSlot), true);
  const name = document.getElementById('bkName').textContent;
  _bkToast(_fmt(_tt('bk_success'), { space: name, date: _prettyDate(bkDate), time: label }));
  bkSlot = null;
  _renderSlots(); _updateSummary();
}

function _bkToast(text) {
  const el = document.getElementById('toast');
  if (!el) return;
  document.getElementById('toastMsg').textContent = text;
  el.classList.add('show');
  clearTimeout(_bkToast._t);
  _bkToast._t = setTimeout(() => el.classList.remove('show'), 3200);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-bk-close]').forEach(el => el.addEventListener('click', closeBooking));
  const conf = document.getElementById('bkConfirm');
  if (conf) conf.addEventListener('click', confirmBooking);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeBooking(); });
  // re-render open modal when language is toggled
  document.addEventListener('langchange', () => {
    const m = document.getElementById('bookingModal');
    if (m && m.classList.contains('open')) { _renderDates(); _renderSlots(); _updateSummary(); }
  });
});

/* ======================================================================
   Ambient node-network in the hero banner — a living echo of the
   STARSCAPE molecular mark: nodes (campuses/people) linked into one network.
   ====================================================================== */
function initNetField() {
  const canvas = document.getElementById('netfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const LINK = 124;
  let cw = 0, ch = 0, dpr = 1, nodes = [], raf = 0;

  function size() {
    const r = canvas.getBoundingClientRect();
    cw = r.width; ch = r.height;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round(cw * dpr));
    canvas.height = Math.max(1, Math.round(ch * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function seed() {
    const count = Math.max(14, Math.min(34, Math.round(cw / 34)));
    nodes = [];
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * cw, y: Math.random() * ch,
        vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.5 + 1.1
      });
    }
  }
  function draw() {
    ctx.clearRect(0, 0, cw, ch);
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK) {
          ctx.strokeStyle = 'rgba(255,255,255,' + (0.18 * (1 - d / LINK)).toFixed(3) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    for (let k = 0; k < nodes.length; k++) {
      const n = nodes[k];
      ctx.fillStyle = 'rgba(255,255,255,0.72)';
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
    }
  }
  function tick() {
    for (let k = 0; k < nodes.length; k++) {
      const n = nodes[k];
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > cw) n.vx *= -1;
      if (n.y < 0 || n.y > ch) n.vy *= -1;
    }
    draw();
    raf = requestAnimationFrame(tick);
  }
  function start() {
    cancelAnimationFrame(raf);
    size(); seed(); draw();
    if (!reduce) raf = requestAnimationFrame(tick);
  }
  start();
  let rt;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(start, 200); });
}
document.addEventListener('DOMContentLoaded', initNetField);

