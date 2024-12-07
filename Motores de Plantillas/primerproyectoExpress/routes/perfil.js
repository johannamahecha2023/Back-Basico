const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "Holaa, mi nombre es Leidy Mahecha, soy ingeniera de software egresada de UDFJC, tengo 28 años y me gusta todo tipo de musica en especial el rock, me gusta practicar el patinaje como hobbie, me gustan los animales"
    );
});

module.exports = router