var express = require("express");
var router = express.Router();

const itemsCtrl = require("../controllers/items.controller");

router.get("/items", itemsCtrl.getItems);
router.post("/items", itemsCtrl.createItem);
router.put("/items/:id", itemsCtrl.updateItem);

module.exports = router;
