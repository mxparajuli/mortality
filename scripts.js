function startMortality() {
  var dob = new Date(year, month-1, day);
  var today = new Date();

  var bdayCurr = new Date(today.getFullYear(), month-1, day);
  if (bdayCurr.getTime() > today.getTime()){
    bdayNext=new Date(today.getFullYear(),month-1,day);
    bdayCurr=new Date(today.getFullYear()-1,month-1,day);
  }else{
    bdayNext=new Date(today.getFullYear()+1,month-1,day);
  }

  //Updating mortality counter
  var age = bdayCurr.getFullYear()-dob.getFullYear();
  var ad = ((today.getTime()-bdayCurr.getTime())/(bdayNext.getTime()-bdayCurr.getTime())).toString().substring(0,11).split(".")[1];
  document.getElementById('mortality').innerHTML = "<b>"+age+"</b><sup>."+ad+"</sup>";

  //Updating percentage counter
  if (showPercentage == true){
    var p = ((age+((today.getTime()-bdayCurr.getTime())/(bdayNext.getTime()-bdayCurr.getTime())))/expectedAge).toString().split(".")[1];
    var percentage =  "You're <mark><b>"+p.substring(0,2)+"</b><sup>."+p.substring(2,11)+"</sup>%</mark> of the way through";
    document.getElementById('percentage').innerHTML = percentage;
  }

  //Wait .1 sec to update
  t = setTimeout(function() {var today = new Date();
    startMortality()
  }, 100);
}
startMortality();
//onload, populate auxiliary elements
document.getElementById('myLabel').innerHTML = "Your age is...";
document.getElementById('footer').innerHTML = "Recreated with love by Matt Fan";
/* So that if js takes too long to load, only thing on screen is existential placeholder*/

var imageURLs = [
  'img/astronaut.gif',
	'img/brb.gif',
	'img/doggy.gif',
	'img/dreamydragon.gif',
	'img/emojiwalk.gif',
	'img/sharkbate.gif',
	'img/working.gif'
 ];
function getImageTag() {
  var img = '<img src=\"';
  var randomIndex = Math.floor(Math.random() * imageURLs.length);
  img += imageURLs[randomIndex];
  img += '\" alt=\"Some alt text\"/>';
  return img;
}
