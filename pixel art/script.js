const pixels = document.getElementsByClassName('pixel');
const colors = document.getElementsByClassName('color');
let currentColor = 'yellow';

for (let i = 0 ; i < pixels.length ; i++) {
  const singlePixel = pixels[i];
  singlePixel.addEventListener(
    'click',
    function() {
      this.style.backgroundColor = currentColor;
    }
  );
}


for (let i = 0 ; i < colors.length ; i++) {
  const singleColor = colors[i];
  singleColor.addEventListener(
    'click',
    function() {
      currentColor = this.style.backgroundColor;
    }
  );
}