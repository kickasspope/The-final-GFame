var zoom : int = 20;
var normal : int = 60;
var smooth : float = 5;
private var zoomedIn = false;
 
var powerTime : float = 10.0;
 
function Update () {
 
if(powerTime > 0)
{
    powerTime -= Time.deltaTime;
}
 
if(powerTime <= 0)
{
if(Input.GetKeyDown("1")){
 
zoomedIn = !zoomedIn;
 
}
}
 
if(zoomedIn == true){
 
camera.fieldOfView = Mathf.Lerp(camera.fieldOfView,zoom,Time.deltaTime*smooth);
}
else{
camera.fieldOfView = Mathf.Lerp(camera.fieldOfView,normal,Time.deltaTime*smooth);
}
}