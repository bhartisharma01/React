import './App.css'
import Card from './components/Card'

function App() {
  const musicObj ={
    name:"Toxic",
    desc:"BoywithUke"
  }

  return (
    <>
    <Card musicObj={musicObj}/>
    </>
  )
}

export default App
