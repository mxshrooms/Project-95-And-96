function login() {
    user = document.getElementById("userinput").value;
    localStorage.setItem("Name: ",user);
    window.location = "mainpage.html";
}