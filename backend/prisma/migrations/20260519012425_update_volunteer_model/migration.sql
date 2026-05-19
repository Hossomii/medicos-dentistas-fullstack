/*
  Warnings:

  - You are about to drop the column `city` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `specialty` on the `Volunteer` table. All the data in the column will be lost.
  - Added the required column `message` to the `Volunteer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Volunteer" DROP COLUMN "city",
DROP COLUMN "specialty",
ADD COLUMN     "message" TEXT NOT NULL;
