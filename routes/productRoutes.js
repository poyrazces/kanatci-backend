const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET: Tüm ürünleri getir
router.get('/', async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
});

// POST: Yeni ürün ekle
router.post('/', async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const product = new Product({ name, price, category });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: 'Ürün eklenemedi', details: err.message });
  }
});

// PUT: Ürünü güncelle
router.put('/:id', async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, category },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Güncelleme hatası', details: err.message });
  }
});

// DELETE: Ürün sil
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: 'Silme hatası', details: err.message });
  }
});

module.exports = router;
