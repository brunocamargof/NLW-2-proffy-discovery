const Database = require ('./db')
const db = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //inserir dados
    proffyValue = {

        name:"Bruno Fernandes",
        avatar: 'https://avatars1.githubusercontent.com/u/52932317?s=460&u=66ce048f92cb7d61e2b711077863d6a3df179660&v=4',
        whatsapp:'11947817084',
        bio:"Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        
    }

    classValue = {
        subject:"Química",
        cost:"20",
        
    }

    classScheduleValues =[ 
    {
        weekday: 1,
        time_from:720,
        time_to:1220,
        
    },
    {
        weekday: 0,
        time_from:520,
        time_to:1220,
        
    }]
    



    // await createProffy(db, {proffyValue, classValue, classScheduleValues})
    
    //consultar dados
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    //select horário

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 8
        AND  class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"

    `)

    console.log(selectClassesSchedules)


})