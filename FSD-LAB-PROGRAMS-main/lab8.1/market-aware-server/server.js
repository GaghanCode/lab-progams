const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Mock database
const products = {
  laptop: { name: "High-End Workstation", price: 2500, region: "Conflict Zone" },
  shirt: { name: "Cotton T-Shirt", price: 30, region: "Stable Zone" }
};

// Route
app.get('/api/analyze/:item', (req, res) => {
  const item = req.params.item;
  const product = products[item];

  const newsHeadline =
    item === "laptop"
      ? "War escalates in chip manufacturing hub, factories closing down."
      : "Local textile markets see record harvest and peace.";

  // Mock sentiment
  const sentimentScore = item === "laptop" ? -0.8 : 0.5;

  const isUrgent =
    sentimentScore < -0.3 && product.region === "Conflict Zone";

  res.json({
    ...product,
    newsHeadline,
    sentimentScore,
    isUrgent,
    recommendation: isUrgent
      ? "BUY NOW: Prices likely to spike"
      : "PRICE STABLE: Buy at leisure",
  });
});

// Start server
app.listen(5000, () => console.log("Logic Server on Port 5000"));