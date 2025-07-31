const validateRegistration = (req, res, next) => {
  const { name, email, password, phone, address, date_of_birth } = req.body;

  // Required fields
  if (!name || !email || !password) {
    return res.status(400).json({ 
      message: 'Name, email, and password are required.' 
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      message: 'Please provide a valid email address.' 
    });
  }

  // Password validation (minimum 6 characters)
  if (password.length < 6) {
    return res.status(400).json({ 
      message: 'Password must be at least 6 characters long.' 
    });
  }

  // Phone validation (optional)
  if (phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      return res.status(400).json({ 
        message: 'Please provide a valid phone number.' 
      });
    }
  }

  // Date validation (optional)
  if (date_of_birth) {
    const date = new Date(date_of_birth);
    if (isNaN(date.getTime())) {
      return res.status(400).json({ 
        message: 'Please provide a valid date of birth.' 
      });
    }
  }

  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ 
      message: 'Email and password are required.' 
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      message: 'Please provide a valid email address.' 
    });
  }

  next();
};

module.exports = {
  validateRegistration,
  validateLogin
}; 