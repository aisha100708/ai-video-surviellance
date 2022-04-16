video = "";
status1 = "";
objects = "";
function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();
    video = createVideo("video.mp4");
    video.hide();
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
}function getResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        objects = results;
    }}
function draw(){
    image(video, 0, 0, 600, 400);
    if (status1 == true) {
        object_detector.detect(video, getResults);
        for(i=0;i<objects.length;i++) {
            document.getElementById("status").innerHTML = "Status: Object Detected";
            document.getElementById("no_of_objects_detected").innerHTML = "No. of Objects Detected: " + objects.length;
            fill("red");
            stroke("blue");
            percent = Math.floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            
        }
    }
}
