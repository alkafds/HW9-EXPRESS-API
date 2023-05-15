<<<<<<< HEAD
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

const generateToken = (user) => {
  const token = jwt.sign(
    { user_id: user.id, email: user.email },
    process.env.SECRET_KEY,
    {
      expiresIn: "12h",
    }
  );

  return token;
}

=======
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

const generateToken = (user) => {
  const token = jwt.sign(
    { user_id: user.id, email: user.email },
    process.env.SECRET_KEY,
    {
      expiresIn: "12h",
    }
  );

  return token;
}

>>>>>>> d2847f8741eb2e895291ea898b3a9a27f90cc2ab
module.exports = { generateToken }