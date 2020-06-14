const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignup = document.getElementById("btnSignup");
const database = firebase.firestore();
const usersCollection = database.collection('users');
const logsCollection = database.collection('logs');
btnLogin.addEventListener('click', e => {
    e.preventDefault();
    const query = usersCollection.where('email_id', '==', txtEmail.value).where('password', '==', txtPassword.value);
    query.get().then(snapshot => {
      snapshot.forEach(user => {
        console.log(user.id, ' => ', user.data());
        const date = new Date();
        const timestamp = date.getTime();
        const UID = user.id;
        const u = UID.concat('_',timestamp);
        console.log(u);
        const ID = logsCollection.doc().set({
            unique_id: u,
            email_id: txtEmail.value,
            login_time: date,
            logout_time: ""
          })
          .then(()=>{
            sessionStorage.setItem("id",u);


            console.log('log data has been saved successfully !')
            location.href = "logs.html";
        
        })
          .catch(error => {
            console.error(error)
          });
        
        

      });
    })
    .catch(error => {
      console.error(error);
    });
  });