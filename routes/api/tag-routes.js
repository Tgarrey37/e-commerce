const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint



router.get("/", async (req, res) => {
  try {
    const tagRoutes = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagRoutes);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get("/:id", async (req, res) => {
  try {
    const tagRoutes = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!tagRoutes) {
      res.status(404).json({ message: "No Tag found with that id!" });
      return;
    }
    res.status(200).json(tagRoutes);
  } catch (err) {
    res.status(500).json(err);
  }
 
});

router.post("/", async (req, res) => {
  try {
    const tagData = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put("/:id", async (req, res) => {
  try {
  const tagData = await Tag.update(req.body,{
    where: {
      id: req.params.id
    },
  });
  if (!tagData) {
    res.status(404).json({ message: 'No category found with that id!' });
    return;
  }

  res.status(200).json(tagData);
} catch (err) {
  res.status(500).json(err);
}
 
});

router.delete("/:id", async (req, res) => {
  try {
    const tagRoutes = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tagRoutes) {
      res.status(404).json({ message: "No tag found with that Id!" });
      return;
    }

    res.status(200).json(tagRoutes);
  } catch (err) {
    res.status(500).json(err);
 
  }
});

module.exports = router;
