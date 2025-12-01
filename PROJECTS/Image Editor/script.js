let b = 1,
  c = 1,
  g = 0,
  s = 0,
  i = 0,
  sa = 0,
  r = 0,
  bl = 0;

const img = document.getElementById("image");
console.log(img.src);

if (img.src === "http://127.0.0.1:5500/PROJECTS/Image%20Editor/index.html") {
  document.getElementById("image").style.display = "none";
}

function applyFilter() {
  document.getElementById("image").style.filter = `brightness(${b})
    contrast(${c}) grayscale(${g}%) sepia(${s}) blur(${bl}) saturate(${sa}%) hue-rotate(${r}) invert(${i}%)
    `;
}

function uploadImage() {
  const file = document.getElementById("upload").files[0];
  const fileURL = URL.createObjectURL(file);

  document.getElementById("image").src = fileURL;
  document.getElementById("image").style.display = "block";
  document.getElementById("uploadLabel").style.display = "none";
}

function changeBrightness() {
  const value = document.getElementById("brightness").value;
  b = (value * 2) / 100;
  applyFilter();
  // document.getElementById("image").style.filter=`brightness(${value*2/100})`;
}

function changeContrast() {
  const value = document.getElementById("contrast").value;
  // document.getElementById("image").style.filter=`contrast(${value*2/100})`;
  c = (value * 2) / 100;
  applyFilter();
}

function changeGrayscale() {
  const value = document.getElementById("grayscale").value;
  // document.getElementById("image").style.filter=`grayscale(${value*2/100})`;
  g = (value * 2) / 100;
  applyFilter();
}

function changeSepia() {
  const value = document.getElementById("sepia").value;
  // document.getElementById("image").style.filter=`sepia(${value*2/100})`;
  s = (value * 2) / 100;
  applyFilter();
}

function changeSaturate() {
  const value = document.getElementById("saturate").value;
  // document.getElementById("image").style.filter=`saturate(${value*2/100})`;
  sa = (value * 2) / 100;
  applyFilter();
}

function changeBlur() {
  const value = document.getElementById("blur").value;
  // document.getElementById("image").style.filter=`blur(${value*2/100})`;
  b = (value * 2) / 100;
  applyFilter();
}

function changeInvert() {
  const value = document.getElementById("invert").value;
  // document.getElementById("image").style.filter=`invert(${value*2/100})`;
  i = (value * 2) / 100;
  applyFilter();
}

function changeRotate() {
  const value = document.getElementById("hue-rotate").value;
  // document.getElementById("image").style.filter=`hue-rotate(${value*2/100})`;
  r = (value * 2) / 100;
  applyFilter();
}

function reset() {
  (b = 1), (c = 0), (g = 0), (s = 1), (i = 0), (bl = 0), (sa = 0), (r = 0);
  applyFilter();
  document.getElementById("brightness").value = "50";
  document.getElementById("contrast").value = "50";
  document.getElementById("grayscale").value = "0";
  document.getElementById("saturate").value = "0";
  document.getElementById("blur").value = "0";
  document.getElementById("invert").value = "0";
  document.getElementById("hue-rotate").value = "0";
}

function download() {
  const image = document.getElementById("image");
  if ((img.src === "http://127.0.0.1:5500/PROJECTS/Image%20Editor/index.html")) {
    alert("Please upload the image");
    return;
  }

  if (!img.complete) {
    alert("Image Upload in progress. Please wait...");
    return;
  }

  const canvas = document.createElement("canvas");
  const cxt = canvas.getContext("2d");

  // Fetch the natural width and height of the image
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  const filter = getComputedStyle(img).filter;
  cxt.filter = filter === "none" ? "none" : filter;
  cxt.drawImage(img, 0, 0, canvas.width, canvas.height);

  const dataURL = canvas.toDataURL("image/png");
  const anchorTag = document.createElement("a");
  anchorTag.href = dataURL;
  anchorTag.download = "editedImage.png";
  document.body.appendChild(anchorTag);
  anchorTag.click();
  document.body.removeChild(anchorTag);
}
