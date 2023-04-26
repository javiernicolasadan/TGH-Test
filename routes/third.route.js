const express = require('express');
const router = express.Router();

/* GET second page */
router.get("/", (req, res, next) => {
  res.render("third");
});

module.exports = router;