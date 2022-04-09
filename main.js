video = "";
status1 = "";
function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();
    video = createVideo("video.mp4");
    video.hide();
}
function draw(){
    image(video, 0, 0, 600, 400);
}
function start(){
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function stop(){
    video.pause();
}
function modelLoaded(){
    console.log("model is loaded!");
    status1 = true;
    video.loop();
    video.volume(0);
    video.speed(1);
}