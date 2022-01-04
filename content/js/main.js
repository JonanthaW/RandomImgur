document.querySelector("body button").addEventListener("click", () => {
  createURL();
})

let imagesQuantity = 100;

function createURL() {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < imagesQuantity; i++) { // begin creating URL of imgur
      let url = "";
      for (var l = 0; l <= 4; l++) {
        url += alphabet.charAt(Math.floor(Math.random() * alphabet.length)); // innerjoin 5 characters randomly
      }
      let img = new Image();
      img.src = "http://i.imgur.com/" + url + ".jpg"; // join it all with imgur
      img.onload = function() {
        if (this.naturalWidth != 161 && !this.naturalHeight != 81) { // check if images exists
          let content = document.createElement("img"); // if the image exists, create it
          content.src = img.src;
          let a = document.createElement("a"); // click on the image to open it on another tab
          a.href = img.src;
          a.target = "_blank";
          a.referrer = "noreferrer";
          a.append(content); // add it to the page
          document.querySelector(".template").append(a);
        }
      }
    }
    document.querySelector("body button").innerText = "LOAD MORE";
}
