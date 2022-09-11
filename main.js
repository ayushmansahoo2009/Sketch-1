function setup()
{
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas); 
    synth = window.speechSynthesis;
}
function clearCanvas()
{
    background("white");
}
function preload()
{
    classifier = ml5.imageClassifier('DoodleNet');
}