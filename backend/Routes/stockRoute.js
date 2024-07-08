
const express = require('express');
const router = express.Router();
const stockController = require("../Controller/StockController")


router.post("/purchase-stock", stockController.purchaseStock);
router.patch("/sell-stock" , stockController.sellStock)
router.get("/get-user/:userId", stockController.getStockForUser);
router.delete("/reset-stock/:userId", stockController.resetAccount);

module.exports = router;




