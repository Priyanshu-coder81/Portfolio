import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainHeader from "./components/MainHeader";
import MyWork from "./components/MyWork";
import Services from "./components/Services";

function App() {
  return (
    <div className="overflow-hidden font-Outfit leading-8 dark:bg-darkTheme dark:text-white">
      <Header />
      <MainHeader />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
