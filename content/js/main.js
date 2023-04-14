document.querySelector("body button").addEventListener("click", () => {
  document.querySelector("body").removeChild(document.querySelector("body button"))
  createURL(100);
})

var extensionNum = 0;

function createURL(imagesQuantity) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < imagesQuantity; i++) {
      let url = "";
      for (var l = 0; l < 5; l++) {
        url += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      }
      TryImage(url);
    }
}

function TryImage(url) {
      let oldURL = url;
      let extensions = [".png", ".jpg", ".jpeg", ".gif", ".jpeg", ".svg", ".webp", ".ico", ".TIFF", ".APNG"];

      let img = new Image();
      img.src = `http://i.imgur.com/${url}${extensions[extensionNum]}`;

      img.onload = function() {
        if (this.naturalWidth != 161 && !this.naturalHeight != 81) {
          let content = document.createElement("img");
          content.src = img.src;
          let a = document.createElement("a");
          a.href = `http://i.imgur.com/${url}.png`;
          a.target = "_blank";
          a.referrer = "noreferrer";
          a.append(content);
          document.querySelector(".template").append(a);
        }
        else {
          extensionNum += 1;
          if(extensionNum == extensions.length) {
            extensionNum = 0;
            createURL(50);
          }
          else {
            TryImage(oldURL);
          }
        }
      }
}
