const path = require("path");

const sqlite = require("sqlite3");

const dbFilePath = path.join(__dirname, "dev.db");

const createItemsQuery = `
CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT DEFAULT '' NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed BOOL DEFAULT FALSE
);
`;

const insertItemsQuery = `
INSERT INTO items (content, completed) VALUES ('Buy milk', false), ('Walk the dog',false);
`;

const db = new sqlite.Database(
  dbFilePath,
  sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE
);

db.serialize(() => {
  db.run(createItemsQuery);
  console.log("[✔️] Added items table successfully");
  db.run(insertItemsQuery);
  console.log("[✔️] Inserted data to items successfully");
});

db.close();
