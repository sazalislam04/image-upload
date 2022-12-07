const defaultBtn = document.getElementById("default-btn");
const image = document.getElementById("image");
const imageContainer = document.querySelector(".image-container");
const cropImg = document.getElementById("crop-img");
const cropBtn = document.getElementById("crop-btn");
const cropContainer = document.querySelector(".crop-container");
const uploadSection = document.getElementById("upload-section");
const cropSection = document.getElementById("crop-section");
const modalImg = document.getElementById("modal-img");
const modalBtn = document.getElementById("modalBtn");
const handleUploadImage = () => {
  defaultBtn.click();
};

defaultBtn.addEventListener("change", () => {
  const file = document.querySelector("input[type=file]").files[0];
  uploadSection.style.display = "none";
  cropBtn.style.display = "block";
  cropSection.style.display = "block";

  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      cropImg.src = result;
      const croper = new Cropper(cropImg, {
        aspectRatio: 0,
        viewMode: 0,
      });
      cropBtn.addEventListener("click", () => {
        let croppedImage = croper.getCroppedCanvas().toDataURL();
        if (croppedImage) {
          modalImg.src = croppedImage;
          cropSection.style.display = "none";
          uploadSection.style.display = "block";
        }
      });
    };
    reader.readAsDataURL(file);
  }
});
function circleShape() {
  modalImg.classList.toggle("circle");
  image.src = modalImg.src;
  image.classList.toggle("circle");
  imageContainer.style.display = "block";
}

function heartShape() {
  modalImg.classList.toggle("heart");
  image.src = modalImg.src;
  image.classList.toggle("heart");
  imageContainer.style.display = "block";
}
function polygonShape() {
  modalImg.classList.toggle("polygon");
  image.src = modalImg.src;
  image.classList.toggle("polygon");
  imageContainer.style.display = "block";
}
function landscapeShape() {
  modalImg.classList.toggle("landscape");
  image.src = modalImg.src;
  image.classList.toggle("landscape");
  imageContainer.style.display = "block";
}
function original() {
  image.src = modalImg.src;
  imageContainer.style.display = "block";
}
