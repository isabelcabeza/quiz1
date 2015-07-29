var express = require('express');
var router = express.Router();
var quiz_Controller = require ('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'QUIZ' });
});
router.get('/quizes/question',quiz_Controller.question);
router.get('/quizes/answer',quiz_Controller.answer);

module.exports = router;
