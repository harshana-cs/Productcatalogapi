const mongoose = require('mongoose');
const { Schema: schema } = mongoose;

const productSchema = new schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    imageUrl: {
        type: String,
        required: false,
        trim: true
    }
}, { timestamps: true });
module.exports = mongoose.model('products', productSchema);