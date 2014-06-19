#pragma strict

var chMotor:CharacterMotor;

function Start()
{
	chMotor = GameObject.FindGameObjectWithTag("Player").GetComponent(CharacterMotor);
}


function FixedUpdate()
{
	
	
}

