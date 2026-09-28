// Open and close the navigation menu on small screens.
const menuButton = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector(".site-nav");

menuButton.addEventListener("click", function () {
  const menuIsOpen = siteNavigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", menuIsOpen);
  menuButton.setAttribute("aria-label", menuIsOpen ? "Close menu" : "Open menu");
  menuButton.textContent = menuIsOpen ? "×" : "☰";
});

// Let readers add or remove a heart from each story.
const likeButtons = document.querySelectorAll(".like-button");

likeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const isLiked = button.getAttribute("aria-pressed") === "true";
    button.setAttribute("aria-pressed", !isLiked);
    button.querySelector("span:first-child").textContent = isLiked ? "♡" : "♥";
    button.querySelector(".like-label").textContent = isLiked ? "Give this a heart" : "You gave this a heart";
  });
});

// Show a friendly message when a reader enters an email address.
const newsletterForm = document.querySelector(".newsletter-form");
const formMessage = document.querySelector(".form-message");

newsletterForm.addEventListener("submit", function (event) {
  event.preventDefault();
  formMessage.textContent = "You’re on the list. See you in your inbox!";
  newsletterForm.reset();
});

// Keep the copyright year up to date automatically.
document.querySelector("#year").textContent = new Date().getFullYear();

// Add selected photos and videos to the top of the post list.
const addPostForm = document.querySelector("#add-post-form");
const postMediaInput = document.querySelector("#post-media");
const postCaptionInput = document.querySelector("#post-caption");
const postList = document.querySelector(".story-grid");
const postMessage = document.querySelector("#post-message");

addPostForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const selectedFiles = postMediaInput.files;
  const caption = postCaptionInput.value.trim();

  for (const file of selectedFiles) {
    const isImage = file.type.startsWith("image/");
    const isVideo = file.type.startsWith("video/");

    if (!isImage && !isVideo) {
      continue;
    }

    const post = document.createElement("article");
    post.className = "story user-post";

    const media = document.createElement(isVideo ? "video" : "img");
    media.className = "user-post-media";
    media.src = URL.createObjectURL(file);

    if (isVideo) {
      media.controls = true;
    } else {
      media.alt = caption || "Dance photo added to the blog";
    }

    const title = document.createElement("h3");
    title.textContent = caption || file.name;

    post.append(media, title);
    postList.prepend(post);
  }

  postMessage.textContent = selectedFiles.length + " post(s) added for this session.";
  addPostForm.reset();
});