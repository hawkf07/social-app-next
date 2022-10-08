/*
  Warnings:

  - Added the required column `votes` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `votesType` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "authorName" TEXT NOT NULL,
    "userId" TEXT,
    "votes" INTEGER NOT NULL,
    "votesType" TEXT NOT NULL,
    CONSTRAINT "Post_id_fkey" FOREIGN KEY ("id") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("authorName", "description", "id", "title", "userId") SELECT "authorName", "description", "id", "title", "userId" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
