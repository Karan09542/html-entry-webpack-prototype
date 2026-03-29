import "../style/gallery.css";

// 🔥 Import images
import bbb from "../public/images/bbb.png";
import bhole from "../public/images/bhole.png";
import mahadev from "../public/images/mahadev.png";
import mahakal from "../public/images/mahakal.png";
import natraj from "../public/images/natraj.png";
import om from "../public/images/om.png";
import sambhu from "../public/images/sambhu.png";
import shankar from "../public/images/shankar.png";
import shiv from "../public/images/shiv.png";

// 🔥 Data
const images = [
  { src: bbb, name: "bbb" },
  { src: bhole, name: "bhole" },
  { src: mahadev, name: "mahadev" },
  { src: mahakal, name: "mahakal" },
  { src: natraj, name: "natraj" },
  { src: om, name: "om" },
  { src: sambhu, name: "sambhu" },
  { src: shankar, name: "shankar" },
  { src: shiv, name: "shiv" }
];

// 🔥 Reusable function
function createGallery(rootId = "app") {
  const root = document.getElementById(rootId);
  if (!root) {
    console.error("Root element not found");
    return;
  }

  // 🔥 Scoped container
  const container = document.createElement("div");
  container.className = "gallery-app";

  // Gallery grid
  const gallery = document.createElement("div");
  gallery.className = "gallery";

  // Lightbox
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";

  const lightboxImg = document.createElement("img");
  lightbox.appendChild(lightboxImg);

  // Generate cards
  images.forEach(({ src, name }) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = src;
    img.alt = name;

    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.textContent = name;

    card.appendChild(img);
    card.appendChild(overlay);

    // Open lightbox
    card.addEventListener("click", () => {
      lightbox.classList.add("active");
      lightboxImg.src = src;
    });

    gallery.appendChild(card);
  });

  // Close lightbox
  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  // Append everything
  container.appendChild(gallery);
  container.appendChild(lightbox);
  root.appendChild(container);
}

// 🔥 Init
createGallery();