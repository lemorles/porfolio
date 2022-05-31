export default function MenuButton({ onClick }) {
  return <><svg onClick={onClick} width="16" height="16" viewBox="0 0 16 16"><path d="M.571 3.571H15.43A.571.571 0 0016 3V1.571A.571.571 0 0015.429 1H.57A.571.571 0 000 1.571V3c0 .316.256.571.571.571zm0 5.715H15.43A.571.571 0 0016 8.714V7.286a.571.571 0 00-.571-.572H.57A.571.571 0 000 7.286v1.428c0 .316.256.572.571.572zm0 5.714H15.43a.571.571 0 00.571-.571V13a.571.571 0 00-.571-.571H.57A.571.571 0 000 13v1.429c0 .315.256.571.571.571z"></path></svg>

    <style jsx>{`
      svg { 
        cursor: pointer;
      }

      @media screen and (min-width: 768px) {
        svg {
          display: none;
        }
      }
  `}</style>
  </>
}