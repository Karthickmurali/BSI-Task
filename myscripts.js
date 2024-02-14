function validateinputs(){
    var username=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var cpass=document. getElementById("cpass").value;


    if(username==null||username==""){
        alert("please fill this username field");
        return false;
       
    }else if(username.length<6){
        alert("username must contain more than 6 characters");
        return false;
        
    }
    else if(password==null||password==""){
        alert("fill the password field");
        return false;
    }
    else if(password.length<8){
        alert("password must contain atleast 8 characters");
        return false;
        
    }else if(email==""){
        alert("please fill this field");
        return false;
    }else if(cpass != password ){
        alert("password is unmatched");
        return false;
    }
    else{
        alert("login success press ok ")
    
       return true;
    }
    
    }