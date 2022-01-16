const {Router} = require('express');
const userController = require('../controllers/userControler')


const router = Router();

router.get('/users', userController.getAll);
router.get('/users/:id',userController.onGet);
router.post('/users',userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id',userController.deleteUser)


module.exports = router;