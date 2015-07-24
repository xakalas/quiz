var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});
router.get('/author', function(req, res) {
	res.render('author');
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

module.exports = router;
