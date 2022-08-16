const { Router } = require('express');
const router = Router();
const { getPosts } = require('../controllers/posts')

router.get('/posts', () => getPosts);
router.post('/post', )

module.exports = router;