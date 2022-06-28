var SpeechRecognition = window.webkitSpeechRecognition;
var reognition = new SpeechRecognition() ;

function start()
{
 document.getElementById("textbox").innerHTML="";
 reognition.start();   
}

reognition.onresult = function(event){

    console.log(event);

var Content = event.results[0][0].transcript;
    
    document.getElementById("textbox").innerHTML=Content;
    console.log(Content);
    speak();       
    
}

function speak(){
    var synth = window.speechSynthesis;

    speek_data = document.getElementById("textbox").ariaValueMax;

    var utterThis = new SpeechSynthesisUtterance(spreak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");