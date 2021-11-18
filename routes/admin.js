var connection = require('../conn/conn');
const express = require('express');
const e = require('express');




//API for inserting data to the database

exports.insertData =async function(request, response) { 

   
    //requesting user inputs
    
    var name = request.body.name;
    var surname = request.body.surname;
    var contact = request.body.contact;
    var age = request.body.age;
	var date = request.body.date;
    var meals = request.body.meals;
    var movie = request.body.movie;
    var tv = request.body.tv;
    var radio = request.body.radio;
    var count = 0 ;
    

    
    //loging user inputs 
    console.log(name);
	console.log(surname);
	console.log(contact);
	console.log(age); 
    console.log(date);
    console.log(meals);
    console.log(movie);
    console.log(tv);
    console.log(radio);

 
  //code for user favfood
  if(request.body.Pizza == true){

      var Pizza = 1;
      count++
  }
  else
  {
      Pizza = 0;
  }

  if(request.body.Pasta == true){

    var Pasta  = 1;
    count++
  }
  else
  {
    Pasta = 0;
  }

  if(request.body.PapAndWors == true){

    var PapAndWors = 1;
    count++
   }
    else
   {
    PapAndWors = 0;
   
   }

   if(request.body.Chicken == true){

    var Chicken = 1;
    count++
   }
    else
   {
    Chicken = 0;
   }
  
   if(request.body.Beef == true){

    var Beef = 1;
    count++
   }
    else
   {
    Beef = 0;
   }

   if(request.body.other == true){

    var other = 1;
    count++
   }
    else
   {
    other = 0;
   }

 

 //check if contact number exist

 if(contact.length  == 10  && contact[1] > 5 && contact[1] < 9 &&  contact[2]  >= 0  &&  contact[3]  >= 0  &&  contact[4]  >= 0 &&  contact[5]  >= 0  &&  contact[6]  >= 0  &&  contact[7]  >= 0  &&  contact[8]  >= 0  &&  contact[9]  >= 0  ){

    
 
 connection.query('SELECT * FROM users WHERE contactNo =?',[contact],function (error, results, fields){

  if(results.length > 0)
  { 
      response.send('You contact number has already been used to complete this survey')
  } 
  else
  {
  if(contact && radio && age &&  surname && name && date && meals && movie && tv && count > 0 ){


 
         
      
  
   //inserts data to database
    var user={

        "contactNo":contact,
        "lName":name,
        "fName":surname,          
        "Date":date,
        "age":age, 
        "meals":meals,
        "movie":movie,
        "radio":radio,
        "tv":tv,
    }
 

    var food ={

        "contactNo":contact,
        "pizza":Pizza,
        "pasta":Pasta,
        "papAndWors":PapAndWors,
        "chicken":Chicken,
        "other":other,


    }

    

    connection.query('INSERT INTO users SET ?',[user], function (error, results, fields) {
        if (error) {
         
          response.send('System currently facing a problem... Please contact the admin');
          
        }
        else
        {

            connection.query('INSERT INTO favouriteFood SET ?',[food], function (error, results, fields) {
                if (error) {

                    response.send('System ')  
                }
                else{

                      response.send('Thank you for completing this survey')
                }
            })//end of inserting favourite food
        }
        

      

    })
   
 
}
else{

    response.send ('please ensure that you have entered all the values')
}//end of if to check if user entered values

}//end of checking number 

 })

}
else{

  response.send('Please enter the correct sa number in this format 076 459 8774')
}
 

}



//APi for total number of surveys

exports.totalSurveys =async function(request, response) { 

    connection.query('SELECT COUNT(contactNo) as con FROM users ',function (error, results, fields){

        if(results.length > 0)
        { 
            response.send(results)
        } 
        else
        {
            response.send('error with query')
        }
    })

}


//APi average age

exports.avgAge =async function(request, response) { 

    connection.query('SELECT ROUND(AVG(age),1) as age FROM users ',function (error, results, fields){

        if(results.length > 0)
        { 
            response.send(results)
        } 
        else
        {
            response.send('error with query')
        }
    })

}


//Api for  the oldest person

exports.oldPerson =async function(request, response) { 

    connection.query('SELECT Max(age) FROM users ',function (error, results, fields){

        if(results.length > 0)
        { 
            response.send(results)
        } 
        else
        {
            response.send('error with query')
        }
    })

}



//Api for  the youngest person

exports.youngest =async function(request, response) { 

    connection.query('SELECT Min(age) FROM users ',function (error, results, fields){

        if(results.length > 0)
        { 
            response.send(results)
        } 
        else
        {
            response.send('error with query')
        }
    })

}



//Api percentage of people who like pizza

exports.percPizza=async function(request, response) { 

    connection.query('SELECT Min(age) as mini FROM users ',function (error, results, fields){

        if(results.length > 0)
        { 
            response.send(results)
        } 
        else
        {
            response.send('error with query')
        }
    })

}




//Api percentage of people who like pasta

exports.percPasta=async function(request, response) { 

    connection.query('SELECT Min(age) FROM users ',function (error, results, fields){

        if(results.length > 0)
        { 
            response.send(results)
        } 
        else
        {
            response.send('error with query')
        }
    })

}



//Api percentage of people who like PapAndWors

exports.percPapAndWors=async function(request, response) { 

    connection.query('SELECT Min(age) FROM users ',function (error, results, fields){

        if(results.length > 0)
        { 
            response.send(results)
        } 
        else
        {
            response.send('error with query')
        }
    })

}

//Api number of people who like to eat out

exports.totEatOut=async function(request, response) { 

    connection.query('SELECT Min(age) FROM users ',function (error, results, fields){

        if(results.length > 0)
        { 
            response.send(results)
        } 
        else
        {
            response.send('error with query')
        }
    })

}


//Api number of people who like to watch movie

exports.totMovie=async function(request, response) { 

    connection.query('SELECT Min(age) FROM users ',function (error, results, fields){

        if(results.length > 0)
        { 
            response.send(results)
        } 
        else
        {
            response.send('error with query')
        }
    })

}



//Api number of people who like to watch tv

exports.totTv=async function(request, response) { 

    connection.query('SELECT Min(age) FROM users ',function (error, results, fields){

        if(results.length > 0)
        { 
            response.send(results)
        } 
        else
        {
            response.send('error with query')
        }
    })

}



//Api number of people who like to listen to music

exports.totRadio=async function(request, response) { 

    connection.query('SELECT Min(age) FROM users ',function (error, results, fields){

        if(results.length > 0)
        { 
            response.send(results)
        } 
        else
        {
            response.send('error with query')
        }
    })

}