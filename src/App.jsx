import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "./sanity/client";
import { PROJECTS_QUERY, ABOUT_QUERY } from "./sanity/sanityQueries";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import './styles/main.scss';

export default function App() {
  const [projects, setProjects] = useState([]);
  const [about, setAbout] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingAbout, setLoadingAbout] = useState(true);

  useEffect(() => {
    client.fetch(PROJECTS_QUERY)
      .then(data => {
        setProjects(data)
        setLoadingProjects(false)
      })
      .catch(console.error)

    client.fetch(ABOUT_QUERY)
      .then(data => {
        setAbout(data)
        setLoadingAbout(false)
      })
      .catch(console.error)

  }, []);

  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home projects={projects} about={about} loadingProjects={loadingProjects} loadingAbout={loadingAbout} />} />
        <Route path="/projects" element={<Projects projects={projects} loadingProjects={loadingProjects} />} />
        <Route path="/about" element={<About about={about} loadingAbout={loadingAbout} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}