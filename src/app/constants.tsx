const imgDir = "./images/";

export const IMAGES = {
  breakout: imgDir + "breakout.webp",
  designstab: imgDir + "designsbytabitha.webp",
  digitalrain: imgDir + "digitalrain.webp",
  flowerpaint: imgDir + "flowerpaint.webp",
  profile: imgDir + "profile.webp",
  socketchat: imgDir + "socketchat.webp",
  space: imgDir + "space.webp",
};

/*

  I wanted to be able to set constants for font as well,
  however the font loader can only accept a literal string.

  Similarly, if we are using an image directly in CSS, we cannot
  easily set a const here and use it in that CSS file. It should
  be possible though, since the font loader does just that.

*/
