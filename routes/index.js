var express = require("express");
var router = express.Router();
var scrapeController = require("../controllers/scrape");
const to = require("await-to-js").default;
/* GET home page. */
router.get("/scrape", async function (req, res, next) {
  const [err, result] = await to(
    scrapeController.execute(req.query.repositoryName)
  );
  if (!result) res.status("400").json({ message: err.message });
  res.status(200).json(result);
});

module.exports = router;
