import Home from "../components/Home";
import About from "../components/About";
import Portfolio from "../components/PortfolioCreative";
import Contact from "../components/Contact";
// import Resume from "../components/Resume";

const Config = {
  menu: [
    {
      name: "Home",
      link: "/",
      icon: "home-run",
    },
    {
      name: "About",
      link: "/about",
      icon: "avatar",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
      icon: "briefcase",
    },
    {
      name: "Contact",
      link: "/contact",
      icon: "mail",
    },
  ],
  pages: [
    {
      name: "Home",
      component: Home,
    },
    {
      name: "About",
      component: About,
    },
    {
      name: "Portfolio",
      component: Portfolio,
    },
    {
      name: "Contact",
      component: Contact,
    },
  ],
};

export default Config;
