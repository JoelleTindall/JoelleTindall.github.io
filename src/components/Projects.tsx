import "./components.css";
import catapp from '../assets/images/catapp.gif';
import chatapp from '../assets/images/chatapp.gif';
import sitegif from '../assets/images/site.gif';
import touchegg from '../assets/images/touchegg.png';
import rpsb from '../assets/images/rpsb.png';
import monsterelevator from '../assets/images/monsterelevator.png';

import { useEffect, useState } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  imagename: string;
  category: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const manualProjects: Project[] = [
      {
        id: "1",
        title: "Touch Egg",
        description: "A silly little game for the Playdate. Won 3 nominations! Name is self explanatory",
        url: "https://play.date/games/touch-egg/",
        imagename: touchegg,
        category: "playdate",
      },
      {
        id: "2",
        title: "Task Tracker",
        description: "A task tracking app with authentication and drag-and-drop.",
        url: "https://example.com/tasks",
        imagename: rpsb,
        category: "productivity",
      },
      {
        id: "3",
        title: "Weather App",
        description: "Weather forecast app using a public API.",
        url: "https://example.com/weather",
        imagename: monsterelevator,
        category: "utility",
      },
      {
        id: "4",
        title: "Blog Platform",
        description: "A CMS-style blog site with markdown support.",
        url: "https://example.com/blog",
        imagename: sitegif,
        category: "content",
      },
      {
        id: "5",
        title: "Image Gallery",
        description: "Image browsing gallery with upload and filter features.",
        url: "https://example.com/gallery",
        imagename: catapp,
        category: "media",
      },
      {
        id: "6",
        title: "Chat App",
        description: "Real-time chat application using WebSockets.",
        url: "https://example.com/chat",
        imagename: chatapp,
        category: "communication",
      },
    ];
    setError(false);
    setProjects(manualProjects);
    setLoading(false);
  }, []);



  return (
    <div id="projects" className="section">
      <div className="header projects">
        <h1>Projects</h1>
        <p>Things I've made</p>
      </div>
      <div className="contentblock projects">
        <div className="corner-border">
          <div className="project-list">
            {loading && <p>loadin...</p>}
            {!error ? (
              projects.map((project) => (
                <div className={`project ${project.category}`} key={project.id}>
                  <a href={project.url}>
                    <div className="project-info">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                    <div className="project-image">
                      <img
                        src={project.imagename}
                      ></img>
                    </div>
                  </a>
                </div>
              ))
            ) : (
              <div className="project">
                <a href="/">
                  <div className="project-info">
                    <h3>Nothing</h3>
                    <p>Something went wrong, cause there's nothing here!</p>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
