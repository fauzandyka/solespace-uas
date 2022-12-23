import './App.css'
import NavigationBar from './components/NavigationBar'
import Intro from './components/Intro'
import Shoes from './components/Shoes'
import "./style/landingPage.css"
import Login from './components/Login'

function App() {
  return (
    <div>
      <div className='myBG'>
        <Login />
        <NavigationBar />
        <Intro />
      </div>  

      <div className='shoes'>
        <Shoes />
      </div>
    </div>
  );
}

export default App;
