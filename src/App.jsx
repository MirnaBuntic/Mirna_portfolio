import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "./sanity/client";
import { PROJECTS_QUERY, ABOUT_QUERY, FIGMA_QUERY } from "./sanity/sanityQueries";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";
import './styles/main.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Figma from "./components/Figma";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [about, setAbout] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingAbout, setLoadingAbout] = useState(true);
  const [figmaProjects, setFigmaProjects] = useState([]);
  const [loadingFigma, setLoadingFigma] = useState(true);


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

    client.fetch(FIGMA_QUERY)
      .then(data => {
        const mapped = data.map(item => ({
          ...item,
          imageUrl: item.image?.asset?.url || null
        }));
        setFigmaProjects(mapped);
        setLoadingFigma(false);
      })
      .catch(console.error);

  }, []);

  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home projects={projects} about={about} loadingProjects={loadingProjects} loadingAbout={loadingAbout} />} />
        <Route path="/projects" element={<Projects projects={projects} loadingProjects={loadingProjects} />} />
        <Route path="/figma-projects" element={<Figma figmaItems={figmaProjects} loadingFigma={loadingFigma}/>} />
        <Route path="/about" element={<About about={about} loadingAbout={loadingAbout} />} />
      </Routes>
    </Layout>
  )
}