#pragma strict

var zoom : int = 20;
var normal : int = 60;
var smooth : float = 5;
private var zoomedIn = false;


function Update () {
     if(Input.GetKeyDown("2")){
     
       zoomedIn = !zoomedIn;
       
     }
     
     
     if(zoomedIn == true){
     
        camera.fieldOfView = Mathf.Lerp(camera.fieldOfView,zoom,Time.deltaTime*smooth);
        }
        else{
        camera.fieldOfView = Mathf.Lerp(camera.fieldOfView,normal,Time.deltaTime*smooth);
        }
      }

