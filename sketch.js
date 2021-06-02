const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

var hour;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

   

}

function draw(){

    // add condition to check if any background image is there to add

    if(backgroundImg){
        background(backgroundImg);

    }else{
        background("white");
    }

 



    Engine.update(engine);

    // write code to display time in correct format here
    if(hour<=12){
        textSize(20);
        text("Time : "+ hour,300,300);
        text("am",385,300);

    } else{
        text("Time : "+ hour,300,300);
        text("pm",385,300);
    }
    



    

    


}

async function getBackgroundImg(){

    // write code to fetch time from API

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");


    //change the data in JSON format

    var responseJSON = await response.json();
    

    // write code slice the datetime

    var dateTime = responseJSON.datetime
    hour = dateTime.slice(11,13);
    console.log(hour);


    // add conditions to change the background images from sunrise to sunset

    if (hour>24 && hour<=2){
        backgroundImg = loadImage("sunrise1.png");
    } else if (hour>2 && hour<=4 ){
        backgroundImg = loadImage("sunrise2.png");
    }else if (hour>4 && hour<=6 ){
        backgroundImg = loadImage("sunrise3.png");
    }else if (hour>6 && hour<=8 ){
        backgroundImg = loadImage("sunrise4.png");
    }else if (hour>8 && hour<=10 ){
        backgroundImg = loadImage("sunrise5.png");
    }else if (hour>10 && hour<=12 ){
        backgroundImg = loadImage("sunrise6.png");
    }else if (hour>12 && hour<=14 ){
        backgroundImg = loadImage("sunrise7.png");
    }else if (hour>14 && hour<=16 ){
        backgroundImg = loadImage("sunrise8.png");
    }else if (hour>16 && hour<=18 ){
        backgroundImg = loadImage("sunrise9.png");
    }else if (hour>18 && hour<=20 ){
        backgroundImg = loadImage("sunrise10.png");
    }else if (hour>20 && hour<=22 ){
        backgroundImg = loadImage("sunrise11.png");
    }else{
        backgroundImg = loadImage("sunrise12.png");
    }

    Text("Time : "+hour,300,300);













}
