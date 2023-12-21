
import reactLogo from './assets/react.svg'

import './App.css'
import Logo from './hooks/Animation/Logo/Logo';
import Loading from './hooks/Animation/Loading/Loading';

const img = "https://i.pinimg.com/originals/1c/04/26/1c042685bf912df0c3f878678a651316.gif"
function App() {


  return (
    <>
      <div>
        <a >

        </a>
        <a >
          <a className="logo react" >
            <Logo />
            <span ><Loading /></span>
          </a>
          {/* <img src={img} className="logo react" alt="React logo" /> */}
        </a>
      </div>


    </>
  )
}

export default App
