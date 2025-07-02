// index.js
import dotenv from 'dotenv';
import { testConnection, sequelize } from './db.js';
import { User } from './models/User.js';
import app from './app.js';

dotenv.config();

(async () => {
  await testConnection();
  await sequelize.sync({ alter: true });  // This updates your table structure
})();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
