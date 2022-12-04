const defaultBtn = document.getElementById("default-btn");
const imagePreview = document.getElementById("image");
const imageContainer = document.querySelector(".image-container");
const handleUploadImage = () => {
  defaultBtn.click();
};

defaultBtn.addEventListener("change", () => {
  const file = document.querySelector("input[type=file]").files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      imagePreview.src = result;
    };
    reader.readAsDataURL(file);
    imageContainer.style.display = "block";
  }
});
