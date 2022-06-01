import { projects } from "../../constants/projects";

export default function Projects() {
  return <section id="projects">
    <h2>Projects</h2>
    <p className="desc">These are some of the projects I am currently working on.</p>

    <ul className="projects__list">
    {projects.map(project => (
      <li key={project.name} className="project__item">
        <img src={project.img} alt={project.name} className="project__img" />
        <div className="project__info">
          <h3>{project.name}</h3>
          <p>{project.desc}</p>
          <div className="project__links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
              Github
            </a>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn">
              Deploy
            </a>
          </div>
        </div>
      </li>
    ))}
    </ul>

    <style jsx>{`
      section {
        margin-bottom: 96px;
      }

      h2{
        margin-bottom: 8px;
      }

      .projects__list {
        margin: 32px 0;
        display: grid;
        gap: 16px
      }

      .project__item {
        height: 410px;
        border: 1px solid var(--grey);
        border-radius: 6px;
      }

      .project__img {
        width: 100%;
        height: 200px;
        border-radius: 6px 6px 0 0;
        object-fit: cover;
        object-position: top;
      }

      h3{
        font-size: 1rem;
        font-weight: 600;
        margin: 8px 0;
      }

      .project__info {
        padding: 16px;
      }

      .project__info p {
        font-size: 14px;
      }

      .project__links {
        display: flex;
        margin-top: 16px;
        gap: 16px;
      }

      .project__links a {
        color: var(--black);
      }

      .btn {
        padding: 8px 16px;
        border: 1px solid var(--grey);
        border-radius: 4px;
      }

      @media screen and (min-width: 600px) {
        h2 {
          font-size: 2rem;
        }

        .desc {
          font-size: 18px;
        }

        .projects__list {
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
      }

      @media screen and (min-width: 900px) {
        .projects__list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
      }
    `}</style>
  </section>
}