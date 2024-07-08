// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../Controller/UserController');

router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);

// router.post('/add-funds', UserController.addFunds);
// router.get('/watchlist', UserController.getWatchlist);
// Add other user endpoints...

module.exports = router;
