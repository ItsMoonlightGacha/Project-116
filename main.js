nose_X=0;
nose_Y=0;
function preload() {
    clown_nose=loadImage('mustache.png');
}
function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log('poseNet is initialized');
}
function draw() {
    image(video,0,0,300,300);
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(nose_X,nose_Y,20);
    image(clown_nose,nose_X,nose_Y,60,60);
}
function take_snapshot() {
    save('myFilterImage.png ');
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        nose_X=results[0].pose.nose.x-30;
        nose_Y=results[0].pose.nose.y-30;
        console.log("nose X ="+results[0].pose.nose.x);
        console.log("nose Y ="+results[0].pose.nose.y);
    }
}