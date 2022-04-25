import { Request, Response } from "express";
import * as testService from "../services/testService.js"

export async function getByDisciplines(req: Request, res: Response) {
    const tests = await testService.getByDiscipline()
    res.send(tests);
}

export async function getByTeachers(req: Request, res: Response) {
    const tests = await testService.getByTeacher()
    res.send(tests);
}