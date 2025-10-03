import { NavLink } from "react-router-dom"
import { guideBar } from "../../constants"

function Guides() {
  const handleUppermoonFour = () => {
    const audio = new Audio('/audio/uppermoon4.mp3');
    audio.play();
  }
  return (
   
      <nav className="guide-bar">
        <ul className="guide-bar">
          {
            guideBar.map((item) => (
              <li key={item.id}>
                <NavLink
                onClick={handleUppermoonFour}
                to={item.link}>{item.name}</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>

  )
}

export default Guides