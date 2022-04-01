// Variabel Konfigurasi
const express = require('express');
const router = express.Router();

// Load semua controller
const Controller = require('../controllers/autoload.js'); 

// Membuat variabel single controller
const Pages = Controller.Pages;

// System Routing
router.get('/', Pages.Home);
router.get('/about', Pages.About);

router.use('/', Pages.Error); // Halaman 404

module.exports = router;