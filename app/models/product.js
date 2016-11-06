const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    colors: Array,
    price: Number,
    image: String,
    description: String,
    selectedColor: {
        type: String,
        default: null
    },
    quantity: {
        type: Number,
        default: 1
    }
});
 module.exports = mongoose.model('Product', productSchema);