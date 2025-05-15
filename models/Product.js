const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ['Yemekler', 'İçecekler', 'Yan Ürünler & Tatlılar'],
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Product', ProductSchema);
