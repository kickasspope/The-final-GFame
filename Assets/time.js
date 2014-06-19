#pragma strict

var timer : float = 40.0;

function Update ()
{
   timer -= Time.deltaTime;
   
   if(timer <= 0)
   {
     timer = 0;
     
     
     
        transform.position.x = 2;
		transform.position.y = 2;
		transform.position.z = 2;
		transform.rotation.x = 0;
		transform.rotation.y = 0;
		transform.rotation.z = 0;
   }
}

function OnGUI()
{
   GUI.Box(new Rect( 10 , 10 , 50 , 20 ), "" + timer.ToString("0"));
}
