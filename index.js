const mongoose = require('mongoose') ;
const Person = require('./models/Person.model') ;

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
.cath ((err)=> console.error(err) )

//Using model.findOne() to Search someone in our Database
Person.findOne({phone : 771654622})
.then((doc)=> console.log('its' , doc.name))
.catch((err)=> console.error(err))

//Use model.find() to Search Your Database
Person.findById({_id : ""})
.then((doc)=> console.log(doc))
.catch((err)=> console.error(err))

// Delete One Document Using model.findByIdAndRemove
Person.findByIdAndRemove({_id: "" })
.then(doc=>console.log("remove",doc))
.catch(err=>console.log(err))

//MongoDB and Mongoose - Delete Many Documents with model.remove()
Person.remove({name : 'Clai_Cle'}, function(err) {
    if(err){
        return err ;
    }else{
        console.log('Removed succes');
    }
 });

 //Chain Search Query Helpers to Narrow Search Results
 Person.find({favoriteFoods:{$in:["buritos"]}})
 .limit(2)
 .select("-age")
 .sort({name:"asc"})
 .exec()
 .then(docs=>console.log(docs,"docs"))
 .catch(err=>console.log(err))