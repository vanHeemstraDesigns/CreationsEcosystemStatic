/*
 * app.js
 */ 
function scrollContent(){
  var homeScreenClone = document.querySelector("#homescreen2")
  //get the top of the element, then scroll its content this far
  var homeTop = homeScreenClone.offsetTop;
  homeScreenClone.scrollTop = homeTop;
}
function slideControlCenter(up){
  var homeScreen = document.querySelector("#homescreen1")
  var clonedHomeScreen = document.querySelector("#homescreen2")
  var controlCenter = document.querySelector("#controlcenter")
  if (up) {
    //sliding the ControlCenter up
    homeScreen.style.height = "20%"
    controlCenter.style.top = "20%"
  }
  else {
    //sliding the ControlCenter down
    homeScreen.style.height = "100%"
    controlCenter.style.top = "100%"
  }
}