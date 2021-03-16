// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Products.belongsTo (Category,{
  foreingkey: 'category_id'
})

//Categories have many Products
Category.hasMany (Product,{
  foreingkey: 'category_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongToMany (Tag,{
  through: ProductTag,
  foreingkey: 'product_id'
})

// Tags belongToMany Products (through ProductTag)
Product.belongToMany (Product,{
  through: ProductTag,
  foreingkey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
