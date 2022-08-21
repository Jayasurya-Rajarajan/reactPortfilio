import logo from "./logo.svg";
import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import Header from "./Components/Header/Header";
import Content from "./Components/ContentSide/Content";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <Content />
      </div>
      <div className="side-bar">
        <SideBar />
      </div>
      {/* <div className="footer">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
