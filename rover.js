var myRover = {
  position: [0,0], 
  direction: 'N',
  ruta:'',
  mars:'',
};

var mars = new Array(10);
  for (i=0;i<10;i++){
    mars[i]= new Array(10);
  }

function goForward(myRover) {
  myRover.direction=prompt('Introducir direccion deseada (N,E,S,W):');
  myRover.ruta=prompt('Introducir ruta deseada (f,b,r,l):');
  for (var i=0; i<myRover.ruta.length; i++){
   switch(myRover.ruta[i]) {
    case 'f':
      if(myRover.direction=='N')
      myRover.position[1]++;
      if(myRover.direction=='E')
      myRover.position[0]++;
      if(myRover.direction=='S')
      myRover.position[1]--;
      if(myRover.direction=='W')
      myRover.position[0]--;
      break;
    case 'b':
      if(myRover.direction=='N')
      myRover.position[1]--;
      if(myRover.direction=='E')
      myRover.position[0]--;
      if(myRover.direction=='S')
      myRover.position[1]++;
      if(myRover.direction=='W')
      myRover.position[0]++;
      break;
    case 'r':
      if(myRover.direction=='N')
      myRover.position[0]++;
      if(myRover.direction=='E')
      myRover.position[1]--;
      if(myRover.direction=='S')
      myRover.position[0]--;
      if(myRover.direction=='W')
      myRover.position[1]++;
      break;
    case 'l':
      if(myRover.direction=='N')
      myRover.position[0]--;
      if(myRover.direction=='E')
      myRover.position[1]++;
      if(myRover.direction=='S')
      myRover.position[0]++;
      if(myRover.direction=='W')
      myRover.position[1]--;
      break;
    }
}
    console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]")
}

goForward(myRover);