const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Örnek veri
const sampleData = [
  "Hizmet 1: Web Tasarım",
  "Hizmet 2: Mobil Uygulama",
  "Hakkımızda",
  "İletişim",
  "Proje Yönetimi",
  "Blog",
  "PortTech"
];

// Arama endpoint
app.get("/api/search", (req, res) => {
  const { query } = req.query;
  if (!query) return res.json({ results: [] });

  const results = sampleData.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  res.json({ results });
});

// Server başlat
app.listen(PORT, () => {
  console.log(`Server çalışıyor: http://localhost:${PORT}`);
});

