
import { Suspense } from 'react'
import './App.css'
import CardContainer from './Components/CardContainer/CardContainer'
import Container from './Components/Container'
import CountBox from './Components/CountBox/CountBox'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/NavBar'

const fetchData= async()=>{
const result = await fetch("/data.json")
return result.json();
}
function App() {
const fetchPromise = fetchData();
// console.log(fetchPromise)

  return (
    <>
     <Navbar></Navbar>
     <CountBox></CountBox>
     <Suspense>
      <CardContainer  fetchPromise={fetchPromise} ></CardContainer>
     </Suspense>
     <Footer></Footer>
  
    </>
  )
}

export default App
