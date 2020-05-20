function setup(){
    createCanvas(320, 240);
    background(51);
    createCapture(VIDEO);
}
function draw(){

}

setInterval(catchVRVideoStream, 60);

async function catchVRVideoStream(){
    const options = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    }
    const response = await fetch("/getVR")
    let responseContent = await response.json();
    let data = responseContent.data;
    let image = document.getElementById("vrVideo")
    image.src = "data:image/png;base64,"+data;


}