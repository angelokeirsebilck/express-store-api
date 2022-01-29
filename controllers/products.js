const getAllProductsStatic = async (req, res) => {
  throw new Error('Testing async errors express');
  res.status(200).json({ msg: 'All products testing' });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: 'All products' });
};

module.exports = { getAllProducts, getAllProductsStatic };
