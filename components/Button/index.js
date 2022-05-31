import Link from "next/link";

export default function Button({ children, color, href, ...props }) {
  return <>
  <Link href={href}>
      <a {...props}>
        {children}
      </a>
  </Link>

      <style jsx>{`
        a {
          background: ${color === 'primary' ? 'var(--black)' : 'var(--white)'};  
          color: ${color === 'primary' ? 'var(--white)' : 'var(--black)'};
          border: 1px solid ${color === 'primary' ? 'var(--white)' : 'var(--grey)'};
          border-radius: 4px;
          padding: 12px 16px;
          font-size: 14px;
          cursor: pointer;
        }

        @media screen and (min-width: 768px) {
          a {
            padding: 16px 24px;
            font-size: 16px;
          }
        }
      `}</style>
  </>
}