video = "";
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
    video.loop();
}
function stop(){
    video.pause();
}