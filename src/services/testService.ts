import * as testRepository from "../repositories/testRepository.js"

export async function getByDiscipline(){
    return await testRepository.findDisciplines();
}

export async function getByTeacher(){
    return await testRepository.findByTeaches()
}