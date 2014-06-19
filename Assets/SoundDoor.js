#pragma strict

function OnTriggerEnter(other: Collider){

   if (!audio.isPlaying){
   
    audio.Play();
   
  }
}