 import React, { useState } from 'react';
 import Parse from 'parse/dist/parse.min.js'
 
 export const PersonComponent = () => {
   const [person, setPerson] = useState(null)

   async function addPerson() {
     try {
       const Person = new Parse.Object('Person');
       Person.set('name', 'John');
       Person.set('email', 'john@back4app.com');
       await Person.save();
       alert('Person saved!');
     } catch (error) {
       console.log('Error saving new person: ', error);
     }
   }
   async function CreateUser(){
    try{
      const username = "allysson";
      const password = "allysson";
      const createdUser = await Parse.User.signUp(username, password);
      alert("Sucess, usuário criado", username);
    }catch(error){
      console.log(error);
    }
   }
   async function fetchPerson() {
     const query = new Parse.Query('Person');
     query.equalTo('name', 'John');
     const Person = await query.first();
     console.log('person name: ', Person.get('name'));
     console.log('person email: ', Person.get('email'));
     console.log('person id: ', Person.id);
     setPerson(Person);
   }
   
   return (
     <div>
       <button onClick={CreateUser}>Create  User</button>
       <button onClick={addPerson}>Add Person</button>
       <button onClick={fetchPerson}>Fetch Person</button>
       {person !== null && (
         <div>
           <p>{`Name: ${person.get('name')}`}</p>
           <p>{`Email: ${person.get('email')}`}</p>
         </div>
       )}
     </div>
   );
 };