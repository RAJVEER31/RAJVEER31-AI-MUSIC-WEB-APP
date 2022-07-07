lw_s = 0;
rw_s = 0;

Natural_song="";
Rick_Roll_song="";

rightWrist_x = 0;
rightWrist_y = 0;

leftWrist_x = 0;
leftWrist_y = 0;

song_name = "";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function preload() {
    Natural_song = loadSound("Natural.mp3");
    Rick_Roll_song = loadSound("Rick_Roll.mp3");
}

function draw(){
    image(video,0,0,600,530);
    fill("#00ff00");
    stroke("#ff0000");

    song_name = Rick_Roll_song.isPlaying();
    console.log(song_name);

    if(lw_s > 0.2){
        circle(leftWrist_x,leftWrist_y,20);
        Natural_song.stop();
        if(song_name == false){
            Rick_Roll_song.play();
        }
        else{
            console.log("Song Name: Rick Roll song");
            document.getElementById("name").innerHTML = "Song Name:  Rick Roll song";
        }
    }
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotposes(results) {
    if(results.length > 0){
        console.log(results);

        lw_s = results[0].pose.keypoints[9].score;
        console.log(lw_s);
        
        lw_s = results[0].pose.keypoints[9].score;
        rw_s = results[0].pose.keypoints[10].score;
         
        lw_s = results[0].pose.keypoints[9].score;
        console.log(lw_s);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+" rightWrist_y = "+rightWrist_y);
    }
}