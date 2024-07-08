// const User = require('../Schema/User');
const User = require("../Schema/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const errorMessage = (res, error) => {
  return res.status(400).json({ status: "fail", message: error.message });
};

exports.registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(200).json({
        status: "fail",
        message: "Not all fields have been entered",
      });
    }
    // if (password.length < 6 || password.length > 25) {
    //   return res.status(200).json({
    //     status: "fail",
    //     message: "Password must be between 6-25 characters",
    //     type: "password",
    //   });
    // }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(200).json({
        status: "fail",
        message: "An account with this username already exists.",
        type: "username",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, password: hashedPassword });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    return errorMessage(res, error);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(200).json({
        status: "fail",
        message: "Not all fields have been entered.",
      });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(200).json({
        status: "fail",
        message: "Invalid credentials. Please try again.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(200).json({
        status: "fail",
        message: "Invalid credentials. Please try again.",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return res.status(200).json({
      token,
      user: {
        username,
        id: user._id,
        balance: user.balance,
      },
    });
  } catch (error) {
    return errorMessage(res, error);
  }
};

exports.validate = async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) {
      return res.json(false);
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      return res.json(false);
    }

    const user = await User.findById(verified.id);
    if (!user) {
      return res.json(false);
    }

    return res.json(true);
  } catch (error) {
    return res.json(false);
  }
};


// exports.register = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     // Check if user already exists
//     let existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Create new user
//     const newUser = new User({ username, email, password });
//     await newUser.save();

//     return res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     console.error("Error registering user:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Check password
//     if (password !== user.password) {
//       return res.status(401).json({ message: "Incorrect password" });
//     }

//     // Implement JWT token generation and return it

//     return res.status(200).json({ message: "Login successful" });
//   } catch (error) {
//     console.error("Error logging in user:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

// exports.addFunds = async (req, res) => {
//   try {
//     const { userId, amount } = req.body;

//     // Find user by ID
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Update user balance
//     user.balance += amount;
//     await user.save();

//     return res.status(200).json({ message: "Funds added successfully" });
//   } catch (error) {
//     console.error("Error adding funds:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

// exports.getWatchlist = async (req, res) => {
//   try {
//     // Implement logic to fetch watchlist items for the user

//     return res.status(200).json({ watchlist: [] }); // Return watchlist data
//   } catch (error) {
//     console.error("Error fetching watchlist:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };
