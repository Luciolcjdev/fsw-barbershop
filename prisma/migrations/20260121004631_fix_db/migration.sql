/*
  Warnings:

  - You are about to drop the `UserBooking` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserBooking" DROP CONSTRAINT "UserBooking_userId_fkey";

-- DropTable
DROP TABLE "UserBooking";
