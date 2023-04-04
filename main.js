var leftWristX, leftWristY, rightWristX, rightWristY
function preload() {
    song1 = loadSound("music.mp3")
    song2 = loadSound("music2.mp3")
}
function setup() {
    canvas = createCanvas(600, 600)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotResult)
}
function draw() {
    image(video, 0, 0, 600, 600)
}
function modelLoaded() {
    console.log("model loaded")
}
function gotResult(error, results) {
    if (error) {
        console.log(error)
    }
    else {
        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y
        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y
        console.log(leftWristX, leftWristY, rightWristX, rightWristY)
    }
}