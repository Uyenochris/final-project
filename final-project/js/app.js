import { homePage } from "./home.js";
import { aboutPage } from "./about.js";
import { galleryPage } from "./gallery.js";
import { foodPage } from "./food.js";
import { djPage } from "./dj.js";
import { speechPage } from "./speech.js";
import { openFoodPage } from "./openfood.js";
import { internationalPage } from "./international.js";
import { blogPage } from "./blog.js";
import { jun06Page } from "./jun06.js";
import { jul30Page } from "./jul30.js";
import { aug30Page } from "./aug30.js";
import { nov23Page } from "./nov23.js";
import { dec23Page } from "./dec23.js";
import { contactPage } from "./contact.js";
















const app = document.getElementById("app");

function loadPage(page) {
    window.scrollTo(0, 0);

  switch (page) {
    case "home":
      app.innerHTML = homePage();
      setNavWhite();
      setLogoWhite();
      break;

    case "about":
      app.innerHTML = aboutPage();
      setNavDark();
      setLogoBlack();
      break;

    case "gallery":
      app.innerHTML = galleryPage();
      setNavDark();
      setLogoBlack();
      break;

    case "food":
      app.innerHTML = foodPage();
      setNavDark();
      setLogoBlack();
      break;

      case "dj": 
      app.innerHTML = djPage();
      setNavDark();
      setLogoBlack();
      break;

      case "speech":
        app.innerHTML = speechPage();
        setNavDark();
        setLogoBlack();
        break;

        case "openfood":
            app.innerHTML = openFoodPage();
            setNavDark();
            setLogoBlack();
            break;
    
            case "international":
                app.innerHTML = internationalPage();
                setNavDark();
                setLogoBlack();
                break;


                case "blog":
                    app.innerHTML = blogPage();
                    setNavDark();
                    setLogoBlack();
                    break;
                  
                      
                    
                      case "jun06":
                        app.innerHTML = jun06Page();
                        setNavDark();
                        setLogoBlack();
                        break;
                      
                        case "jul30":
                            app.innerHTML = jul30Page();
                            setNavDark();
                            setLogoBlack();
                            break;
                          
                            case "aug30":
                                app.innerHTML = aug30Page();
                                setNavDark();
                                setLogoBlack();
                                break;


                                case "nov23":
                                    app.innerHTML = nov23Page();
                                    setNavDark();
                                    setLogoBlack();
                                    break;
                                


                                    case "dec23":
                                        app.innerHTML = dec23Page();
                                        setNavDark();
                                        setLogoBlack();
                                        break;

                                        case "contact":
                                            app.innerHTML = contactPage();
                                            setNavDark();
                                            setLogoBlack();
                                            break;
















    default:
      app.innerHTML = "<h1>Page not found</h1>";
  }
}

function setNavWhite() {
  document.querySelector(".nav").classList.remove("dark");
}

function setNavDark() {
  document.querySelector(".nav").classList.add("dark");
}


function setLogoWhite() {
    document.getElementById("logoImg").src = "images/logo-white.png";
  }
  
  function setLogoBlack() {
    document.getElementById("logoImg").src = "images/logo-black.png";
  }














document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = e.target.dataset.page;
    if (page) loadPage(page);
  });
});

window.loadPage = loadPage;

loadPage("home");



