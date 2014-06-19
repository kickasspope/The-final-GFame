var flashlight : Light;

function Start () {

flashlight = GetComponent("Light");

}

     function Update () {

     if (Input.GetMouseButtonDown(0)) {
     if (flashlight.enabled) {
     flashlight.enabled = false;
   }
     else {
     flashlight.enabled = true;




     }
  }
}