import { prisma } from "../../database.js";

export async function findDisciplines(){
    return prisma.terms.findMany({
        select : {
            number : true,
            discipline : {
                select : {
                    name : true,
                    teacherDiscipline : {
                        select : {
                            tests : {
                                select : {
                                    name : true,
                                    category : {
                                        select : {
                                            name : true
                                        }
                                    }
                                }
                            },
                            teacher : {
                                select : {
                                    name : true
                                }
                            }
                        }
                    }
                }
            }
        }
    })
}

export async function findByTeaches(){
    return prisma.teachers.findMany({
        select : {
            name : true,
            teacherDiscipline : {
                select : {
                    tests : {
                        select : {
                            name : true,
                            category : {
                                select : {
                                    name : true
                                }
                            }
                        }
                    }
                    ,discipline : {
                        select : {
                            name : true,
                            term : {
                                select : {
                                    number : true
                                }
                            }
                        }
                    }
                }
            }
        }
    })
}