function validateForm() {
   
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var sms = document.getElementById("sms").value;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var mobReg = /^[0-9]{10}$/;
    let valstatus = true;
  
//    debugger;
    if (name.trim() == "") {
      var element1 = document.getElementById("myDIV11");
      element1.classList.add("mystyle");
      var error = document.querySelector(".name");
         error.classList.add("sub-locat");
         valstatus = false;
    }
    else if (name.trim() == "") {
      // alert("HIII")
      var element1 = document.getElementById("myDIV11");
      element1.classList.add("mystyle");
      var error = document.querySelector(".name");
         error.classList.add("sub-locat");
      valstatus = false;
  }
    else {
      var element = document.getElementById("myDIV11");
      element.classList.remove("mystyle");
      var error = document.querySelector(".name");
          error.classList.remove("sub-locat");
    }
    if (email.trim() == "") {
        var element2= document.getElementById("myDIV12");
        element2.classList.add("mystyle");
        var error = document.querySelector(".email");
        error.classList.add("sub-locat");
        valstatus = false;
      }
 
     else if (!emailReg.test(email.trim())) {
      // alert("HIII")
      var element1 = document.getElementById("myDIV12");
      element1.classList.add("mystyle");
      var error = document.querySelector(".email");
         error.classList.add("sub-locat");
         valstatus = false;
  }
      
      else {
        var element = document.getElementById("myDIV12");
        element.classList.remove("mystyle");
        var error = document.querySelector(".email");
          error.classList.remove("sub-locat");
      }
  
     if (mobile.trim() == "") {
       var element2= document.getElementById("myDIV13");
       element2.classList.add("mystyle");
       var error = document.querySelector(".mobile");
       error.classList.add("sub-locat");
       valstatus = false;
     }

     else if (!mobReg.test(mobile.trim())) {
      var element2= document.getElementById("myDIV13");
      element2.classList.add("mystyle");
      var error = document.querySelector(".mobile");
      error.classList.add("sub-locat");
      valstatus = false;
    }
     
     else {
       var element = document.getElementById("myDIV13");
       element.classList.remove("mystyle");
       var error = document.querySelector(".mobile");
         error.classList.remove("sub-locat");
     }


     if (sms.trim() == "") {
        var element2= document.getElementById("myDIV14");
        element2.classList.add("mystyle");
        var error = document.querySelector(".sms");
        error.classList.add("sub-locat");
        valstatus = false;
      }
 
      else if (sms.trim().length < 6) {
       var element2= document.getElementById("myDIV14");
       element2.classList.add("mystyle");
       var error = document.querySelector(".sms");
       error.classList.add("sub-locat");
       valstatus = false;
     }
      
      else {
        var element = document.getElementById("myDIV14");
        element.classList.remove("mystyle");
        var error = document.querySelector(".sms");
          error.classList.remove("sub-locat");
      }

  
  return valstatus;
  
  }