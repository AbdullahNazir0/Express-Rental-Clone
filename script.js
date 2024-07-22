window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 0) {
          // Adjust the scroll threshold as needed
          navbar.style.top = "0";
        } else {
          navbar.style.top = "-100px";
        }
      });