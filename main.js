const markAll = document.querySelector("#mark-all");

const posts = document.querySelectorAll(".post");

markAll.addEventListener("click", () => {
  const notReadElements = document.querySelectorAll(".not-read");

  notReadElements.forEach((element) => {
    element.classList.remove("not-read");
  });

  const notificationNumber = document.querySelector("#number");

  notificationNumber.remove();
});

posts.forEach((post) => {
  post.addEventListener("click", () => {
    const status = post.querySelector(".status");

    if (status.classList.contains("not-read")) {
      status.classList.remove("not-read");
    }

    const notificationNumber = document.querySelector("#number");

    notificationNumber.textContent = notificationNumber.textContent - 1;

    if (notificationNumber.textContent == 0) {
      notificationNumber.remove();
    }
  });
});
