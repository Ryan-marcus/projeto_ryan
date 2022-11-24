
function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false}); 
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/AX2bvU-fN/model.json',modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Som detectado de  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Cachorro detectado - '+dog+ ' Gato detectado - '+cat;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Background noise") {
      img.src = 'bark.gif';
      dog = dog+1;
    } else if (results[0].label == "gato") {
      img.src = 'meow.gif';
      cat = cat + 1;
    } else{
      img.src = 'balia.gif';
    }
  }
}
