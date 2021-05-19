import { useState } from "react";
import style from "./App.module.css";
import { Container, TextField } from "@material-ui/core/";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TodoList from "./TodoList";
import "./App.css";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const listItem = (event) => {
    setInputList(event.target.value);
  };
  const AddItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Container maxWidth="lg" className={style.heroArea}>
        <div className={style.todoArea}>
          <h2 className={style.todoHeading}>ToDo List</h2>
          <div className={style.todoText}>
            <form noValidate autoComplete="off" >
              <TextField 
                id="standard-basic"
                label="Enter your Work"
                type="text"
                onChange={listItem}
                value={inputList}
              />
              <AddCircleIcon
                className={style.addIcon}
                variant="contained"
                color="primary"
                onClick={AddItem}
              />
            </form>
          </div>
          <ol>
            {Items.map((itemval, ind) => {
              return (
                <>
                  <TodoList
                    key={ind}
                    id={ind}
                    text={itemval}
                    onSelect={deleteItem}
                  />
                </>
              );
            })}
          </ol>
        </div>
      </Container>
    </>
  );
};
export default App;
