import { HashRouter, Routes, Route } from "react-router-dom";

import AboutPage from "./components/About.tsx";
import ProjectsPage from "./components/Projects.tsx";
import ContactPage from "./components/Contact.tsx";
import OtherPage from "./components/OtherStuff.tsx";

import Layout from "./layout/layout";
import NotFound from "./components/NotFound.tsx";

export default function App() {
  return (
    <HashRouter basename={"/"}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <section id="about">
                <AboutPage />
              </section>
              <section id="projects">
                <ProjectsPage />
              </section>
              <section id="contact">
                <ContactPage />
              </section>
            </Layout>
          }
        />

        <Route
          path="/otherstuff"
          element={
            <Layout>
              <OtherPage />
            </Layout>
          }
        />

        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
