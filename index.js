// pour obtenir la liste des images, coller <div id = "imageSources"></div> <script src="index.js" defer></script> dans liste-des-plantes

document.addEventListener("DOMContentLoaded", function () {
    // Créer un nouvel élément pour afficher les sources des images
    let sourcesContainer = document.createElement("div");
    sourcesContainer.id = "imageSources"; // Vous pouvez attribuer un ID pour cibler cet élément plus facilement
    document.body.appendChild(sourcesContainer);
  
    // Votre script ici
    let imgListeD = document.querySelectorAll(".img-liste-d");
  
    imgListeD.forEach((img) => {
      let sourceText = document.createElement("p");
      sourceText.textContent = img.src;
      sourcesContainer.appendChild(sourceText);
    });
  });
  
