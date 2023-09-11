-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "rate" REAL,
    "price" REAL NOT NULL,
    "description" TEXT,
    "sale" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");
