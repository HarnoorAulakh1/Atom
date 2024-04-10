import "./App.css";
import Content from "./components/content/Content";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import Flex from './components/flex/Flex';
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="styling"></div>
      <Landing />
      <hr />
      <Content />
      <Flex />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
