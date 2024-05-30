import { Appbar } from "../components/Appbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"



export const Home =()=>{
    return    <div className="min-h-screen bg-gray-100">
    <Appbar/>
    <Hero />
    <Footer />
  </div>
}