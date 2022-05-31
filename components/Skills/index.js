import Image from "next/image";
import { skills } from "../../constants/skills";

export default function Skills() {
  return <section id="skills">
    <h2>Skills</h2>
    <p className="desc">These are some tools and languages that I currently handle.</p>

    <ul>
      {skills.map(skill => (
        <li key={skill.name} className="skill__item">
          <figure className="skill__icon__wrapper">
            <Image src={skill.icon} alt={skill.name} width={45} height={45} />
          </figure>
          <p className="skill__desc">{skill.name}</p>
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

      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 32px;
        margin-top: 32px;
      }

      .skill__item {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .skill__icon__wrapper {
        background-color: var(--grey-light);
        border-radius: 50%;
        width: 90px;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 12px;
      }

      .skill__desc {
        font-size: 12px;
        text-transform: uppercase;
      }

      @media screen and (min-width: 768px) {
        h2{
          font-size: 2rem;
        }

        .desc {
          font-size: 18px;
        }

        section p .skill__desc {
          font-size: 16px;
        }
      }
    `}</style>
  </section>
}