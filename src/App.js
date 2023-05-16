import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Service from "./components/Service/Service";
import Qualification from "./components/Qualification/Qualification";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/Scroll/ScrollUp";
import Work from "./components/work/Work";


const  App=() =>{
  return (
    <div className="app">
      <Header/>

        <main className="main">
            <Home/>
            <About/>
            <Skills/>
            <Service/>
            <Qualification/>
            <Work/>
            <Contact/>
            </main>
            <Footer/>
            <ScrollUp/>
    </div>
  );
}

export default App;
