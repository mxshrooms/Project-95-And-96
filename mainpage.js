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

storeUsername = localStorage.getItem("Name: ");
document.getElementById("usernamelabel").innerHTML = "Welcome, "+storeUsername;

function addroom() {
  roomName = document.getElementById("roominput").value;
  firebase.database().ref("/").child(roomName).update({
    purpose: "adding a room name"
  });
  window.location = "chattyroom.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      roomButton = "<div class='room' id="+Room_names+" onclick='redirect(this.id)'>"+Room_names+"</div>";
      document.getElementById("output").innerHTML +=roomButton;
      //End code
      });});}
getData();

function redirect(name) {
  console.log(name);
  window.location = "chattyroom.html";
}
function logout(){
  window.location = "index.html";
  localStorage.removeItem("Name: ");
}