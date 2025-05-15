const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000; // ✅ PORT fix

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB bağlantısı (veritabanı adı eklenmiş olmalı)
mongoose.connect('mongodb+srv://kanatciservet:5inOduSkneIWlWv7@admin.ejt2p9x.mongodb.net/kanatcimenudb?retryWrites=true&w=majority&appName=admin')
  .then(() => console.log('✅ MongoDB Atlas bağlantısı başarılı'))
  .catch((err) => console.error('❌ MongoDB bağlantı hatası:', err));

// Routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Test endpoint
app.get('/', (req, res) => {
  res.send('Kanatçı Servet API çalışıyor!');
});

app.listen(PORT, () => {
  console.log(`🚀 Sunucu ${PORT} portunda çalışıyor`);
});
