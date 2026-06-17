-- D1-Schema für Portfolio-Analytics
-- Einspielen:  wrangler d1 execute portfolio-analytics --remote --file=schema.sql

CREATE TABLE IF NOT EXISTS events (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  ts            INTEGER NOT NULL,        -- Unix-ms
  page          TEXT,
  previous_page TEXT,
  page_index    INTEGER,
  referrer      TEXT,
  screen_width  INTEGER,
  language      TEXT,
  session_id    TEXT,
  visitor_id    TEXT,
  device        TEXT,
  country       TEXT,
  is_returning  INTEGER,                 -- 0/1
  utm_source    TEXT,
  utm_medium    TEXT,
  utm_campaign  TEXT
);
CREATE INDEX IF NOT EXISTS idx_events_ts      ON events(ts);
CREATE INDEX IF NOT EXISTS idx_events_visitor ON events(visitor_id);

CREATE TABLE IF NOT EXISTS clicks (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  ts          INTEGER NOT NULL,
  type        TEXT,                      -- 'click' | 'scroll'
  label       TEXT,
  category    TEXT,
  depth       INTEGER,                   -- nur für Scroll (25/50/75/100)
  href        TEXT,
  page        TEXT,
  session_id  TEXT,
  visitor_id  TEXT
);
CREATE INDEX IF NOT EXISTS idx_clicks_ts ON clicks(ts);
