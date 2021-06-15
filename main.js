function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(90,125)

    canvas = createCanvas(560,560);
    canvas.position(690,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#0ff1ce');
}

function modelLoaded()
{
    console.log("Pose net is initialized");
}

function gotPoses(results)
{
    if (results.length > 0) {
        console.log(results);
    }
}