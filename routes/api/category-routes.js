const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const categoryRoutes = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryRoutes);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get("/:id", async (req, res) => {
  try {
  const categoryRoutes = await Category.findByPk(req.params.id,{
    inclued: [{model: Product}],
  });

  if (!categoryRoutes) {
    res.status(404).json({message: 'No Category found with that id!'});
    return;
  }
  res.status(200).json(categoryRoutes);
} catch (err) {
  res.status(500).json(err);
}
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create({
      
    })
  }
  // create a new category
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
