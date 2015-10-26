function rhombus(size) {
rotate(30);
forward(size);
rotate(60);
forward(size);
rotate(120);
forward(size);
rotate(60);
forward(size);
}

speed(9000000000000000000000000000000000000000000000000000000000000000000000)


function shape(offset) {
  for(var x = 0; x<12; x++) {
    rhombus(70);
    rotate(60);
  }
}

function repeatshape(offset) {
 
  for(var x = 0; x<9; x++) {
    moveTo(x*170 + 100,offset); 
    shape(30);
  }
}

repeatshape(100);

for(var y = 0; y<6; y++) {
  repeatshape(y * 100 + 200);
}

