function setup() {
    canvas = createCanvas(600,480);
    canvas.position(350,150);
    video = createCapture(VIDEO);
    video.hide();
}



function draw() {
    image(video, 100, 40, 450,400);



    rect(90, 28, 460,20);
    rect(90, 420, 460, 20);
    rect(90,50,20,380);
    rect(530,50,20,380);


    fill(255, 0, 0);
    stroke(255, 0, 0);

    circle(100, 45, 80);
    stroke(0,128,0);
    circle(100, 120, 10);
    circle(100, 150, 10);

    stroke(255, 255, 10);

    circle(100, 200, 50);
    stroke(255, 165, 0);

    circle(100, 250, 20);
    stroke(255, 255, 10);

    circle(100, 300, 50);

    stroke(0,128,0);

    circle(100,340,10);
    circle(100,370,10);
    
    stroke(255, 0, 0);
   

    circle(540, 430, 80);
    circle(540, 45, 80);
    stroke(0, 100, 0);
    circle(540, 120,10);
    circle(540, 150,10);

   

    stroke(255, 255, 0);

    circle(540, 200, 50);
    stroke(255,165,0);
    circle(540,250,20);

    stroke(255,255,0);
    circle(540, 300, 50);

    stroke(0,100,0);
    circle(540,340,10);
    circle(540,370, 10);

     stroke(255,0,0);
    circle(90, 430, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);

    

    fill(0, 128, 0);
    stroke(0, 128, 0);
    
    
   
}




function take_snapshot() {
    save('My_frame_Image.png');
}