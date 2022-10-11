-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Subreddit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "imageBanner" BLOB
);
INSERT INTO "new_Subreddit" ("createdAt", "id", "imageBanner", "name", "updatedAt") SELECT "createdAt", "id", "imageBanner", "name", "updatedAt" FROM "Subreddit";
DROP TABLE "Subreddit";
ALTER TABLE "new_Subreddit" RENAME TO "Subreddit";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
