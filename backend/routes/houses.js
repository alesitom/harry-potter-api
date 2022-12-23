const { Router } = require ('express');

const router = new Router();

const { all, single, create } = require('./../controllers/houses');

router.get('/', all);
router.post('/', create);
router.get('/:id', single);

module.exports = router;