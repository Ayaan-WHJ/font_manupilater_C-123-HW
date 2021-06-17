noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(1000,560);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#0000FF');
    document.getElementById("text_side").innerHTML = "The height and width of the text  will be = " +difference + "px";
    fill('rgb(255, 0, 0)')
    stroke('rgb(255, 0, 0)');
    text("Ayaan",noseX,noseY);
}

function modelLoaded()
{
    console.log("Pose net is initialized");
}

function gotPoses(results)
{
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X = " + noseX + "nose Y = " + noseY );
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        textSize(difference);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}