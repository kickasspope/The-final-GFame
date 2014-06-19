#pragma strict
private var buttonWidth = 120;
private var buttonHeight = 40;
private var rect1 = Rect(600, 200, buttonWidth, buttonHeight); //(x, y, width, heigth)
private var rect2 = Rect(600, 250, buttonWidth, buttonHeight);
 
function Start () {
 
}
 
function Update () {
 
}
 

      

function OnTriggerEnter (other:Collider)
{
	if (other.gameObject.tag=="Player")
	{
          Application.LoadLevel(0);
    }
          
}

