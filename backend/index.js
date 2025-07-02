// index.js
import dotenv from 'dotenv';
import { testConnection, sequelize } from './db.js';
import { User } from './models/User.js'; // Ensure model is imported so Sequelize sees it
import app from './app.js';

dotenv.config();

// DB init
(async () => {
  await testConnection();
  await sequelize.sync(); // Sync models to DB
})();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
