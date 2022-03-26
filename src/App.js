import Header from "./component/header/Header";
import AppTemplate from "./UI/AppTemplate";
import "./style/reset.css";
import ToDoListBox from "./component/todolist/ToDoListBox";

function App() {
  return (
    <AppTemplate>
      <Header />
      <ToDoListBox />
    </AppTemplate>
  );
}

export default App;
