function result(){
    console.log("Success");
    var user= "";
    user = document.getElementById("username").value;
    var pass= "";
    pass = document.getElementById("password").value;
    var userlength = user.length;
    var passlength = pass.length;

    if(userlength ==0 || passlength ==0){

        document.getElementById("result").style.color="red";  
    document.getElementById("result").textContent="Fill the missing Fields";
    document.getElementById("username").style.borderColor="red";
    document.getElementById("password").style.borderColor="red";
    }
    else

    if(userlength <= 4){
        document.getElementById("result").style.color="red";  
       document.getElementById("result").textContent="Incorrect User Name or Password";
       document.getElementById("username").style.borderColor="red";
       document.getElementById("password").style.borderColor="red";
   
    }
    else if(passlength <=6 || passlength>=12){
        document.getElementById("result").style.color="red";  
        document.getElementById("result").textContent="Incorrect User Name or Password";
        document.getElementById("username").style.borderColor="red";
        document.getElementById("password").style.borderColor="red";
 
    }
    else {  
      document.getElementById("result").style.color="#7FFF00";  
     document.getElementById("result").textContent="Login Success:\n UserName: Krishna \n Password: 12345678";
    
     document.getElementById("username").style.borderColor="#7FFF00";
     document.getElementById("password").style.borderColor="#7FFF00";
    }
    

    }
