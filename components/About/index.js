import Image from 'next/image';
import Button from "../Button";

export default function About() {
  return <section id="about">
    <article className="about">
      <h1 className="about__title">Hello! I'm Leandro, a full stack developer.</h1>
      <div className="img">
        <Image src='/images/profile.jpeg' alt="perfil"  width={300} height={404} style={{ borderRadius: '6px' }}/>
      </div>
      <p className="about__desc">I have experience working freelance on Frontend projects with React, Redux and Material UI for an insurance broker and wordpress for a construction company. <br />Always ready to listen, learn, teach and above all, improve myself every day as a developer.</p>
      <div className="about__wrapper_buttons">
        <Button
          href="https://www.linkedin.com/in/lemorles/"
          color="primary"
          target="_blank"
        >
          Visit Linkedin
        </Button>

        <Button
          href="https://github.com/lemorles"
          color='secondary'
          target="_blank"
        >
          Visit Github
        </Button>
      </div>
    </article>

    <style jsx>{`
  section {
    margin: 64px 0 96px;
  }

  .about__title {
    font-size: 28px;
    text-align: left;
  }

  .img {
    width: 0;
    height: 0;
  }

  .about__desc {
    margin: 0 0 32px;
    max-width: 550px;
  }

  .about__wrapper_buttons {
    display: flex;
    align-items: center;
    gap: 16px;
  }


  @media screen and (min-width: 768px) {
    .about{
      display: grid;
      grid-template-areas: 
        "title    img" 
        "desc     img"
        "buttons  img";
      align-items: center;
      justify-content: space-between;
      max-width: 100%;
    }

    .about__title {
      grid-area: title;
      font-size: 2.5rem;
      margin-bottom: 0;
      max-width: 400px;
    }

    .img {
      grid-area: img;
      width: 300px;
      height: 100%;
      border-radius: 6px;
      filter: grayscale(80%);
    }

    .about__desc {
      grid-area: desc;
      max-width: 400px;
      font-size: 1.2rem;
    }

    .about__wrapper_buttons {
      grid-area: buttons;
    }
  }
`}</style>
  </section>
}