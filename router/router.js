import { Router } from "express";
import {getplaning, createplaning,updateplaning,deleteplaning,getplaning2date,createconger,deleteplaningIdmed} from "../controller/controller.js";
const router = Router();

router.get('/getplaning/:sem1/:sem2',getplaning);

router.get('/getplaning2date/:date1/:date2',getplaning2date);
router.post('/createplaning',createplaning);
router.put('/updateplaning/:id',updateplaning);
router.delete('/deleteplaning',deleteplaning);

router.delete('/deleteplaningIdmed/:id',deleteplaningIdmed);

router.post('/createconger',createconger);
export default router;