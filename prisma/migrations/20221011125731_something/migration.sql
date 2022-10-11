/*
  Warnings:

  - Added the required column `imageBanner` to the `Subreddit` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "votes" INTEGER NOT NULL DEFAULT 0,
    "votesType" TEXT DEFAULT 'default',
    "subredditId" TEXT,
    "datePosted" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Post_subredditId_fkey" FOREIGN KEY ("subredditId") REFERENCES "Subreddit" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("datePosted", "description", "id", "subredditId", "title", "userId", "votes", "votesType") SELECT "datePosted", "description", "id", "subredditId", "title", "userId", "votes", "votesType" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE TABLE "new_Subreddit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "imageBanner" BLOB NOT NULL
);
INSERT INTO "new_Subreddit" ("createdAt", "id", "name", "updatedAt") SELECT "createdAt", "id", "name", "updatedAt" FROM "Subreddit";
DROP TABLE "Subreddit";
ALTER TABLE "new_Subreddit" RENAME TO "Subreddit";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
