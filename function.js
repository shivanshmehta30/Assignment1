const emailId = document.getElementById('emailId');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const password = document.getElementById('password');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const readBtn = document.getElementById('readBtn');
const removeBtn = document.getElementById('removeBtn');
const database = firebase.firestore();
const usersCollection = database.collection('users');

addBtn.addEventListener('click', e => {
  e.preventDefault();
  const ID = usersCollection.doc().set({
    first_name: firstName.value,
    last_name: lastName.value,
    age: Number(age.value),
    email_id: emailId.value,
    password : password.value
  })
  .then(()=>{
    console.log(ID)
    alert("signup successful go to login page")
    console.log('Data has been saved successfully !')})
  .catch(error => {
    console.error(error)
  });
});