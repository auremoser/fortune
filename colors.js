var r = Math.floor((Math.random() * 256));
var g = Math.floor((Math.random() * 256));
var b = Math.floor((Math.random() * 256));
// var r = 0;
// var g = 0;
// var b = 0;
var rgb = Math.floor((Math.random() * 6)+1);
var counter= 0;

function colorwave() {
    window.setInterval(function () {
      color();
  }, 52);
}

function color() {
  var color = "rgb(" + r + "," + g + "," + b + ")";
  if (rgb==1) {
  if (counter==0) {
  if (b<255) {b++;}
  else if (g<255) {g++; counter++;}
    
  else if (r<255) {r++; g=0; b=0;}
  else {r=0; b=0; g=0;}
  }
  else if (counter==1){
      if (b>0) {b--;}
      else if (g<255) {g++; counter=0;}
      else if (r<255) {r++; g=0; b=0; counter=0;}
      else {r=0; b=0; g=0; counter=0;}
  }
  $(document).ready(function() {
  $(this.body).css({'background-color': color});
    });
  }
  else if (rgb==2) {
      if (counter==0) {
          if (g<255) {g++;}
          else if (b<255) {b++; counter++;}
          
          else if (r<255) {r++; g=0; b=0;}
          else {r=0; b=0; g=0;}
      }
      else if (counter==1){
          if (g>0) {g--;}
          else if (b<255) {b++; counter=0;}
          else if (r<255) {r++; g=0; b=0; counter=0;}
          else {r=0; b=0; g=0; counter=0;}
      }
      $(document).ready(function() {
        $(this.body).css({'background-color': color});
      });
  }
  
  else if (rgb==3) {
      if (counter==0) {
          if (r<255) {r++;}
          else if (b<255) {b++; counter++;}
          
          else if (g<255) {g++; r=0; b=0;}
          else {r=0; b=0; g=0;}
      }
      else if (counter==1){
          if (r>0) {r--;}
          else if (b<255) {b++; counter=0;}
          else if (g<255) {g++; r=0; b=0; counter=0;}
          else {r=0; b=0; g=0; counter=0;}
      }
      $(document).ready(function() {
        $(this.body).css({'background-color': color});
      });
  }
  else if (rgb==4) {
      if (counter==0) {
          if (r<255) {r++;}
          else if (g<255) {g++; counter++;}
          
          else if (b<255) {b++; r=0; g=0;}
          else {r=0; b=0; g=0;}
      }
      else if (counter==1){
          if (r>0) {r--;}
          else if (g<255) {g++; counter=0;}
          else if (b<255) {b++; r=0; g=0; counter=0;}
          else {r=0; b=0; g=0; counter=0;}
      }
      $(document).ready(function() {
        $(this.body).css({'background-color': color});
      });
  }
  else if (rgb==5) {
      if (counter==0) {
          if (g<255) {g++;}
          else if (r<255) {r++; counter++;}
          
          else if (b<255) {b++; g=0; r=0;}
          else {r=0; b=0; g=0;}
      }
      else if (counter==1){
          if (g>0) {g--;}
          else if (r<255) {r++; counter=0;}
          else if (b<255) {b++; g=0; r=0; counter=0;}
          else {r=0; b=0; g=0; counter=0;}
      }
      $(document).ready(function() {
        $(this.body).css({'background-color': color});
      });
  }
  else if (rgb==6) {
      if (counter==0) {
          if (b<255) {b++;}
          else if (r<255) {r++; counter++;}
          
          else if (g<255) {g++; r=0; b=0;}
          else {r=0; b=0; g=0;}
      }
      else if (counter==1){
          if (b>0) {b--;}
          else if (r<255) {r++; counter=0;}
          else if (g<255) {g++; r=0; b=0; counter=0;}
          else {r=0; b=0; g=0; counter=0;}
      }
      $(document).ready(function() {
        $(this.body).css({'background-color': color});
      });
  }
    
}