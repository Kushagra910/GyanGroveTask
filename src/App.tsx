import './App.css'
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import EndCards from './components/EndCards';


function App() {

  return (
    <>
      <div className='w-11/12   mx-auto h-screen '>
        <Navbar/>
        <Banner/>
        <div className='mt-80'>
           <EndCards/>
        </div>
      </div>
    </>
  )
}

export default App;
