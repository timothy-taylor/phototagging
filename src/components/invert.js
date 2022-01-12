//
//
// a collection of functions 
// to return the inversion of an rgb color

function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

function Invert(rgb) {
  rgb = Array.prototype.slice
    .call(arguments)
    .join(",")
    .replace(/rgb\(|\)|rgba\(|\)|\s/gi, "")
    .split(",");
  for (let i = 0; i < rgb.length; i++) rgb[i] = (i === 3 ? 1 : 255) - rgb[i];
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
};

export default Invert;
