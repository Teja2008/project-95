var firebaseConfig = {
    apiKey: "AIzaSyCeBvM5Z0_xbzNw56HfKrJQpLG4c0OdIto",
    authDomain: "class-94-59941.firebaseapp.com",
    databaseURL: "https://class-94-59941-default-rtdb.firebaseio.com",
    projectId: "class-94-59941",
    storageBucket: "class-94-59941.appspot.com",
    messagingSenderId: "246065634545",
    appId: "1:246065634545:web:16f1bc7704969677ce1d50",
    measurementId: "G-QMKED4KL1L"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")
room_name= localStorage.getItem("room_name")

function send(){
    msg=document.getElementById("msg").value
    firebase.database().ref(room_name).push({
name: user_name,
message:msg,
like:0
    
    });
    document.getElementById("msg").value="";
    


    
}