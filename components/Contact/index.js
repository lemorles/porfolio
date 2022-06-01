import Button from "../Button";

export default function Contact() {
  return <section id="contact">
    <h2>Contact</h2>
    <p className="desc">Do you have any questions or want to work together?</p>

    <div className="contact__wrapper_buttons">
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



    <style jsx>{`
      section {
        margin-bottom: 96px;
      }

      h2{
        margin-bottom: 8px;
      }

      .contact__wrapper_buttons {
        padding: 30px 0 0;
        display: flex;
        gap: 16px;
      }

      @media screen and (min-width: 768px) {
        h2{
          font-size: 2rem;
        }

        .desc {
          font-size: 18px;
        }

      }
    `}</style>
  </section>
}