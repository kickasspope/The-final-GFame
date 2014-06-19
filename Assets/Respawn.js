function Update () 
{
	if(transform.position.y <-20)
	{
		transform.position.x = 2;
		transform.position.y = 2;
		transform.position.z = 2;
		transform.rotation.x = 0;
		transform.rotation.y = 0;
		transform.rotation.z = 0;
	}
}