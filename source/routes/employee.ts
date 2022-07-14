import express from 'express';
import controller from '../controllers/employee';

const router = express.Router();

router.post('/create/user', controller.createemployee);
router.get('/get/users', controller.getAllemployees);
router.post('/del/user',controller.deleteemployee)
router.PUT('/update/user',controller.updateeemployee)
export = router;
