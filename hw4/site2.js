function trapezoid(size) {
rotate(30);
forward(size);
rotate(60);
forward(size);
rotate(60);
forward(size);
rotate(120);
forward(size);
}

speed(900000000000000000000000000000000000000000000000000000000000)

function shape(offset) {
  for(var x = 0; x<12; x++) {
    trapezoid(80);
    rotate(60);
  }
}

function repeatshape(offset) {
 
  for(var x = 0; x<7; x++) {
    moveTo(x*200 + 100,offset); 
    shape(250);
  }
}

repeatshape(150);

for(var y = 0; y<4; y++) {
  repeatshape(y * 200 + 350);
}
