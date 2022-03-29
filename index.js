const mongoose = require('mongoose') ;
const Person = require('./model.js')

//Create and Save a Record of a Model
const person = new Person ({
    name : Holdi_Nene ,
    age : 37 ,
    favoriteFoods : ['Yassa Poulet' , 'Thieb yapp' , 'Soup Kandja', 'CBon'] ,   
})

person.save()
.then (()=> console.log('person saved'))
.cath ((err)=> console.error(err) )

//Create Many Records with model.create()
const arrayofpoeple = [
    {
        name : Mister_Babalola,
        age : 30 ,
        favoriteFoods :['Thieb Dieun' , 'mafé', 'Foufou'],
    },
    {
        name : Clai_Cle,
        age : 35 ,
        favoriteFoods :['Athieke' , 'Mbakhal', 'CBon'],
        
    },
    {
        name : Fatou_Syll,
        age : 35 ,
        favoriteFoods :['Mafé' , 'CBon', 'Thieb Dieun'],
        
    },
]

//using model.create()
Person.create(arrayofpoeple)
.then (()=> console.log('persons added'))
.cath ((err)=> console.error(err) )

//Use model.find() to Search a persons in our Database
Person.find()
.then ((doc)=> console.log('all persons' , doc))
.cath ((err)=> console.error(err) );