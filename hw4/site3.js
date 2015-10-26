function hexa(size) {
rotate(30);
forward(size);
rotate(60);
forward(size);
rotate(60);
forward(size);
rotate(60);
forward(size);
rotate(60);
forward(size);
rotate(60);
forward(size);

}

speed(90000000000000000000000000000000000000000000000000000000000000000000000000000000)


function shape(offset) {
  for(var x = 0; x<12; x++) {
    hexa(100);
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

for(var y = 0; y<3; y++) {
  repeatshape(y * 200 + 350);
}
