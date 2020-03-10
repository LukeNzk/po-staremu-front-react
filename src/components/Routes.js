import React from 'react';
import Calendar from './Calendar';
import About from './About';

function HomePage() {
  return (<Calendar/>);
}

function AboutPage() {
  return (<About/>);
}

function ProjectsPage() {
  return (<p>Projects</p>);
}

function MediaPage() {
  return (<p>Media</p>);
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
