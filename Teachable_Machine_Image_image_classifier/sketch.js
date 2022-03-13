let video;
let classifier;
// let modelURL = './model/';
let modelURL = "https://teachablemachine.withgoogle.com/models/oud6RkwWB/"
let label = "waiting...";
let confi = 0;

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

function setup() {
  createCanvas(640, 520);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // STEP 2.1: Start classifying
  classifyVideo();
}

// STEP 2.2 classify!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background(0);
  
  // Draw the video
  image(video, 0, 0);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);
  text(confi, width - 50, height - 16)
}


// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  confi = results[0].confidence
  confi = confi.toFixed(2); // 소수점 2자리 반올림
  console.log(results[0].label);
  console.log(confi);
  classifyVideo();
}