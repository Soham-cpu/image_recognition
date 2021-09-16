
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}
console.log('ml5version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/j6HeGGVuN/model.json', modelloaded);

function modelloaded() {
    console.log("model_loaded");
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, imgResults);
}
function imgResults(error, result) {
    if (error) {
        console.error(error);

    } else {
        console.log(result);
        document.getElementById("result_object").innerHTML = result[0].label;
        document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}