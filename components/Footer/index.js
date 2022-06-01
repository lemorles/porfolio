export default function Footer() {
  return <footer>
    <div className="footer__wrapper">
      <p>
        Copyright © 2022 Leandro Morales. All rights reserved.
      </p>
      <small>
        Built with Next.js and deploy to Vercel
      </small>
    </div>
    <style jsx>{`
      footer {
        background-color: var(--black-light);
      }

      .footer__wrapper {
        max-width: 1000px;
        margin: 0 auto;
        padding: 50px 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      p {
        color: var(--white);
        font-size: 14px;
        margin-bottom: 4px;
      }

      small {
        color: var(--white);
      }
    `}</style>
  </footer>
}