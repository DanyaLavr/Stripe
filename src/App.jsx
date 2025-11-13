import { useSelector } from "react-redux";
import Drivers from "./views/drivers/Drivers";
import Header from "./views/header/Header";
import Hero from "./views/hero/Hero";
import Modal from "./components/burger-menu/modal/Modal";

function App() {
  const { isShowen } = useSelector((state) => state.modal);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Drivers />
      </main>
      {isShowen && <Modal />}
    </div>
  );
}

export default App;
