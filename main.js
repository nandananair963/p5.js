function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

    filtercolor="";

}

function draw(){
  image(video,0,0,640,480);
  tint(filtercolor);
}

function take_snapshot(){
 save('photo.png');
}

function apply(){
    filtercolor=document.getElementById("color").value;
}
