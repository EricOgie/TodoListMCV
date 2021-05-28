
const express = require('express');
const router = express.Router();

const pagesController = require("../controllers/pagesControllers.js");
const actionController = require("../controllers/actionController.js");

router.get("/", pagesController.showHome);
router.get("/work", pagesController.showWork);
router.get("/spiritual", pagesController.showSpitual);

// ---------------------- save Task Routes ------------------ //
router.post("/", actionController.saveHomeChore);
router.post("/work", actionController.saveWorkTask);
router.post("/spiritual", actionController.saveSpiritualTask);

// ---------------------- Delete Task Routes ----------------- //

router.post("/delete", actionController.deleteHomeTask);
router.post("/work/delete", actionController.deleteWorkTask);
router.post("/spiritual/delete", actionController.deleteSpiritualTask);


module.exports = router;
  