
function preload(){

}
function setup(){
    canvas = createCanvas(600,400)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(600,400)
    stuf=ml5.posenet(video, modelLoaded())
    stuf.on("pose",gotposes())
}
function modelLoaded(){

}
function gotposes(results){
    if (results.length > 0){
        console.log(results)
    }
}
