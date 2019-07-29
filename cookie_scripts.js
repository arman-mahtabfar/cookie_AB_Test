//Cookies User with inputs for the name, value and expiration of cookie
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();

  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; // creates cookie
}

//Checks to see whether cookie with certain name exists.
//Returns true if it finds the cookie
//Returns false if cookie doesnt exist in user's browser storage.
function findCookie(cname) {
  if (document.cookie.indexOf(cname + "=") == -1) { // if .indexOf returns -1, cookie doesnt exist.
    return false;
  } else {
    return true;
  }
}



//This function determines if a user has been cookied.
// cname1 = First CookieName to look for
// cname2 = Second CookieName to look for
function cookieTheUser(cname1, cname2) {
  if (findCookie(cname1) == true) {
    return;
  }
  if (findCookie(cname2) == true) {
    return;
  } else {
    if (Math.random() >= 0.5) {
      setCookie(cname1,"0", 24);
    } else {
      setCookie(cname2,"0",24);
    }
  }
}

//insert names of variants for cookies here
cookieTheUser("Control","Variant");

//if the cookie for the corresponding variant exists, display the variant. Otherwise hide the other variants display
if (findCookie('Control') == true) {
  document.getElementById("variant-div").innerHTML = "";

  dataLayer.push({'CRO-Test-Variable': 'True',
  'VariantVersion': 'control'});
}

if (findCookie('Variant') == true) {
  document.getElementById("control-div").innerHTML = "";

  dataLayer.push({'CRO-Test-Variable': 'True',
  'VariantVersion': 'variant'});
}

