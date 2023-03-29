import Search from "./components/Search";
import Nav from "./components/Nav";
import Photos from "./components/Photos";
import "./App.css";

function App() {
  const navLinks = [
    {
      id: 1,
      route: "cats",
      title: "Cats"
    },
    {
      id: 2,
      route: "dogs",
      title: "Dogs"
    },
    {
      id: 3,
      route: "birds",
      title: "Birds"
    }
  ];
  return (
    <div className="container">
      <Search />
      <Nav navLinks={navLinks} />
      <Photos />
    </div>
  );
}

export default App;
