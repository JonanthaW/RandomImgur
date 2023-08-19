const extensions = [".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".ico", ".tiff", ".apng"];

document.querySelector("body button").addEventListener("click", handleButtonClick);

let extensionNum = 0;

function handleButtonClick() {
  const button = document.querySelector("body button");
  button.removeEventListener("click", handleButtonClick);
  button.parentNode.removeChild(button);
  createURL(100);
}

function createURL(imagesQuantity) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < imagesQuantity; i++) {
    const url = generateRandomString(alphabet, 5);
    TryImage(url);
  }
}

function generateRandomString(characters, length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function TryImage(url) {
  const img = new Image();
  img.src = `http://i.imgur.com/${url}${extensions[extensionNum]}`;

  img.onload = function () {
    if (this.naturalWidth !== 161 || this.naturalHeight !== 81) {
      const content = document.createElement("img");
      content.src = img.src;

      const a = document.createElement("a");
      a.href = `http://i.imgur.com/${url}.png`;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.appendChild(content);

      document.querySelector(".template").appendChild(a);
    } else {
      extensionNum = (extensionNum + 1) % extensions.length;
      if (extensionNum === 0) {
        createURL(50);
      } else {
        TryImage(url);
      }
    }
  };
}
