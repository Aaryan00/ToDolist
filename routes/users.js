const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/users_controller');

router.get('/profile',passport.checkAuthentication,usersController.profile);
router.post('/create',usersController.create);

router.use('/posts',require('./posts'));

router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect: '/'},
), usersController.createSession);

router.get('/sign-out',usersController.destroySession);

module.exports = router;