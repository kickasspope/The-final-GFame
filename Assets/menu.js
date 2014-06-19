#pragma strict
private var buttonWidth = 120;
private var buttonHeight = 40;
private var rect1 = Rect(600, 200, buttonWidth, buttonHeight); //(x, y, width, heigth)
private var rect2 = Rect(600, 250, buttonWidth, buttonHeight);
 

      static var showCursor = true;
 
 
function OnGUI ()
{

        var showCursor = true;
 
        if (GUI.Button (rect1, "Start Game"))
        {
                Application.LoadLevel(1);
        }
        if (GUI.Button (rect2, "Exit Game"))
        {
                Application.Quit();
                Debug.Log ("Game has exitted");
        }
}