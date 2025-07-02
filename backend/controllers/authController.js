import bcrypt from 'bcrypt';
import { User } from '../models/User.js';
import { generateToken } from '../utils/jwtUtil.js';

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const userExists = await User.findOne({ where: { email } });
    if (userExists) return res.status(400).json({ error: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ username, email, password: hashedPassword });

    res.status(201).json({ message: 'User registered', userId: user.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = generateToken({ id: user.id, email: user.email });

    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, { attributes: ['id', 'username', 'email'] });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
