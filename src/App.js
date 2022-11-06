import Header from "./components/Header";
import Notes from "./components/Notes";
import style from "./components/style.module.css";

function App() {
  return (
    <div className={style.main}>
      <Header />
      <Notes />
    </div>
  );
}

export default App;
