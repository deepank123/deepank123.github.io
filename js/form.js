// Initialize Firebase (ADD YOUR OWN DATA)
console.log('form js');

var config = {
    apiKey: "AIzaSyBAq4Y4eahn8PZdhg5O8QapUU-FsZGIL3s",
    authDomain: "website-b8aa2.firebaseapp.com",
    databaseURL: "https://website-b8aa2.firebaseio.com",
    projectId: "website-b8aa2",
    storageBucket: "",
    messagingSenderId: "778318393814"
  };
  firebase.initializeApp(config);

// var config = {
//           apiKey: "AIzaSyDyIsjHFU-cDD43KKy_0XlxSJ4HsOijzN0",
//           authDomain: "eazypgwebsite.firebaseapp.com",
//           databaseURL: "https://eazypgwebsite.firebaseio.com",
//           projectId: "eazypgwebsite",
//           storageBucket: "eazypgwebsite.appspot.com",
//           messagingSenderId: "389861154972"
//         };
//         firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){

  e.preventDefault();


  var formElem = document.getElementById('contactForm');
  var inputs = formElem.getElementsByTagName('input');

  // Get values
  var name = inputs[0].value;
  var phone = inputs[1].value;
  var message = formElem.getElementsByTagName('textarea')[0].value;

  // Save message
  saveMessage(name, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Save message to firebase
function saveMessage(name, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    phone:phone,
    message:message
  });
}