const router = require("express").Router();
const data = require("../data/phones.json")


// GET "/phones" => phone list 
router.get("/", (req, res, next) => {
  res.status(200).json(data);
});


// GET "/phones/:id" => each phone details
router.get("/:id", (req, res, next) => {

    const {id} = req.params
    res.status(200).json(data[id]);
  });



module.exports = router;
