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
        title: "Monster Elevator",
        description: "Another silly little game for the Playdate. Make sandwiches for semi-randomized monsters!",
        url: "https://play.date/games/monster-elevator/",
        imagename: monsterelevator,
        category: "playdate",
      },
      {
        id: "3",
        title: "RPSB",
        description: "My 3rd silly little game for the Playdate. Mix and mash together rocks, papers, and scissors to create explosions.",
        url: "https://play.date/games/rock-paper-scissors-boom/",
        imagename: rpsb,
        category: "playdate",
      },
      {
        id: "4",
        title: "Full-Stack Personal site",
        description: "Full-stack version of this site, made with React, NGINX, Nodejs, Postgres and Docker.",
        url: "https://github.com/JoelleTindall/Personal-Site-React.ts-Node.js",
        imagename: sitegif,
        category: "other",
      },
      {
        id: "5",
        title: "PHP Storefront",
        description: "A very bare bones storefront application built with PHP, JavaScript, and MySQL",
        url: "https://github.com/JoelleTindall/Simple-PHP-MySQL-JS-Web-App",
        imagename: catapp,
        category: "other",
      },
      {
        id: "6",
        title: "Chat App",
        description: "A simple chat application built with React, .NET Core, and Postgres",
        url: "https://github.com/JoelleTindall/.NET-Core-React-Postgres-ChatApp",
        imagename: chatapp,
        category: "other",
      },
    ];
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
            {!loading ? (
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
                    <h3>Loading!</h3>
                    <p>Hold your horses, please.</p>
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
