// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD_6mg2M4sBcXXzwaLSN2GG6fhxYMRqEyA",
    authDomain: "chatty-e5895.firebaseapp.com",
    databaseURL: "https://chatty-e5895-default-rtdb.firebaseio.com",
    projectId: "chatty-e5895",
    storageBucket: "chatty-e5895.appspot.com",
    messagingSenderId: "499422997436",
    appId: "1:499422997436:web:213fa8aae453674e5999b9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function logout2(){
    window.location = "index.html";
    localStorage.removeItem("Username: ");
  }

  user_name = localStorage.getItem("Username: ");
  room_name = document.getElementById("");
  localStorage.setItem("Room Name: ",room_name);

  function send() {
    document.getElementById("messageinput").value = "";
    text = document.getElementById("messageinput").value;
    firebase.database().ref(room_name).push({
          name: username, 
          message: text,
          likes: 0
    });
}