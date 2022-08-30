var countdown = new Date("Apr 8, 2023 12:00:00").getTime();
//Vi bruger setInterval da vi vil have at nedtællingen opdaterer
var x = setInterval(function() {

    //Vores "nu" - getTime give tiden i millisekunder efter 00:00 1 Jan 1970
    var n = new Date().getTime();
    var d = countdown - n;
      
    //matematik for at regne til dage, timer osv.
    var days = Math.floor(d / (1000 * 60 * 60 * 24));
    var hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((d % (1000 * 60)) / 1000);
      
    //Displayer tiden 
    document.getElementById("date").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    //1000 her er hvor ofte funktionen bliver kaldt, altså en gang i sekundet da det er 1000 milisekunder
  }, 1000);




