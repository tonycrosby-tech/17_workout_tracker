const router = require("express").Router(),
  path = require("path");
router.get("/", function (a, b) {
  b.sendFile(path.join(__dirname, "../public/index.html"));
  }),
  router.get("/exercise", function (a, b) {
    b.sendFile(path.join(__dirname, "../public/exercise.html"));
  }),
  router.get("/stats", function (a, b) {
    b.sendFile(path.join(__dirname, "../public/stats.html"));
  }),
  (module.exports = router);
