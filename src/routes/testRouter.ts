import { Router } from "express";
import * as testController from "../controllers/testComtroller.js"


const testRouter = Router();

testRouter.get('/tests/disciplines', testController.getByDisciplines);
testRouter.get('/tests/teachers', testController.getByTeachers);

export default testRouter;