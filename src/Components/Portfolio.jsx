/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/concept.jpg";

const imageAltText = "A man looking towards his mind mapping board";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Algorithm Playground",
    description:
      "This repository is a collection of solutions to a diverse range of LeetCode problems. Each solution is accompanied by detailed explanations and comments, aiming to provide clarity and understanding for learners at all levels.",
    url: "https://github.com/xradeel/Algorithm-Playground",
  },
  {
    title: "Web Development",
    description:
      "This repository is a collection of solutions to a diverse range of LeetCode problems. Each solution is accompanied by detailed explanations and comments, aiming to provide clarity and understanding for learners at all levels.",
    url: "https://github.com/xradeel/Algorithm-Playground",
  },
  {
    title: "Bright Steps Foundation",
    description:
      "The Bright Steps Foundation project is a web application developed using Django, a high-level Python web framework.",
    url: "https://github.com/xradeel/Bright-steps-foundations",
  },
  {
    title: "My portfolio website",
    description:
      "This repo is a GitHub template to build a JavaScript personal portfolio frontend web application using the React framework.",
    url: "https://github.com/xradeel/MLSA-task",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
