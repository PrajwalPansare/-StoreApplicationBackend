const all_product = require("../Model/all_category.json");
const Ladoo = require("../Model/Ladoo.json");
const Namkeen = require("../Model/Namkeen.json");
const Chips = require("../Model/Chips.json");


exports.getAllItems = (req, res) => {
    res.status(200).json({
        Ladoo: Ladoo,
        Namkeen: Namkeen,
        Chips: Chips,
    });
};

exports.get_search_category = (req,res) => {
    const category_name = req.params.category;
    const search_category = all_product.filter(search => search.category == category_name);
    if (search_category.length > 0) {
        res.status(200).json({category: search_category});
    }
    else {
        res.status(404).json({message: "Category not found"});
    }
}

exports.getallcategory = (req,res) => {
    res.status(200).json({allcategory: all_product});
}