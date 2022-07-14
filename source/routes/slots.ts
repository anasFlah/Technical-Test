import express from 'express';
import controller from '../controllers/timeslots';

const router = express.Router();

router.post('/create/slot', controller.createslot);
router.get('/get/slots', controller.getAlltimeslots);
router.post('/del/slot',controller.deleteslot)
router.PUT('/update/slot',controller.updateslot)
router.PUT('/assign/slot',controller.assignslot)
export = router;
