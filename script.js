var imageURL = document.getElementById("imageURL");
var form = document.getElementById("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    if(imageURL.value == ""){
        alert("Please enter an image URL");
    }
    else{
        console.log(imageURL.value);

        var url = imageURL.value;
        var topText = document.getElementById("top-text").value;
        var bottomText = document.getElementById("bottom-text").value;
        var memeContainer = document.querySelector(".display_container");

        // Create the container for the meme
        const newDiv = document.createElement("div");
        newDiv.className = "container-memes";

        const span = document.createElement("span");
        span.classList.add("overlay");

        // Create the image element
        const newImg = document.createElement("img");
        const cross = document.createElement("p");
        const topTextElement = document.createElement("p");
        const bottomTextElement = document.createElement("p");
        topTextElement.className = "top-text";
        bottomTextElement.className = "bottom-text";
        cross.className = "cross";

        newImg.src = url;
        cross.textContent = "X";
        topTextElement.textContent = topText;
        bottomTextElement.textContent = bottomText;

        newDiv.appendChild(span)
        newDiv.appendChild(cross);
        newDiv.appendChild(newImg);
        newDiv.appendChild(topTextElement);
        newDiv.appendChild(bottomTextElement);
        memeContainer.appendChild(newDiv);

        // Delete operation
        newDiv.addEventListener("click", function (e) {
            memeContainer.removeChild(newDiv);
        });
    }
});