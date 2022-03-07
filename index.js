function toggleMenu(id) {
    const menuList = document.getElementById("menu-container");
    
    if (id === "open") {
      menuOpen.style.display = "none";
      menuClose.style.display = "block";
      menuList.style.display = "flex";
    }
    else {
      menuOpen.style.display = "block";
      menuClose.style.display = "none";
      menuList.style.display = "none";
    }
  };
  
  
  const menuOpen = document.getElementById("menu-open");
  menuOpen.addEventListener("click", () => {toggleMenu("open")});
  
  const menuClose = document.getElementById("menu-close");
  menuClose.addEventListener("click", () => {toggleMenu("close")});
  
  