import React from "react";
import Calendar from "./Calendar"

function HomePage() {
  return (<Calendar/>);
}

function AboutPage() {
  return (<p>About</p>);
}

function ProjectsPage() {
  return (<p>empty</p>);
}

function MediaPage() {
  return (<p>empty</p>);
}

const routes = {
  home: {
    title: "Home",
    url: "/home",
    page: (<HomePage/>)
  },
  about: {
    title: "O nas",
    url: "/about",
    page: <AboutPage/>
  },
  projects: {
    title: "Projekty",
    url: "/projects",
    page: <ProjectsPage/>
  },
  media: {
    title: "Media",
    url: "/media",
    page: <MediaPage/>
  },
  landingPage: {
    title: "",
    url: "/",
    page: (<HomePage/>)
  }
};

export default routes;
