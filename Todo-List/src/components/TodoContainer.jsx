import EntryContainer from "./EntryContainer";
import CreateEntryButton from "./CreateEntryButton";
import CreateEntryPage from "./CreateEntryPage";
import { useEffect, useState } from "react";

const TodoContainer = () => {
  const [render, setRender] = useState(true);
  const toggleComponent = () => {
    setRender(!render);
    setIsEditButton(false);
  };

  const emptyInputs = ()=>{

    toggleComponent();
    setSelectedID(null);
    setTitle('')
    setDate('')
    setDescription('')
  }
  

  //value state logic
  const [title, setTitle] = useState("");
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const [date, setDate] = useState("");
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const [description, setDescription] = useState("");
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  // create todo array state

  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem("data");
    return localData ? JSON.parse(localData) : [];
  });

  //update todos obj
  const pressAddEntry = () => {
    if (title === "" || description === "") {
      return alert("Please Enter Values");
    }
    setTodos([
      ...todos,
      { title: title, date: date, description: description, id: Date.now() },
    ]);
    toggleComponent();
    setTitle("");
    setDate("");
    setDescription("");
  };

  // local storage
  const setLocalStorage = () => {
    localStorage.setItem("data", JSON.stringify(todos));
  };

  const pageLoad = () => {
    setTodos(JSON.parse(localStorage.getItem("data")));
  };
  useEffect(() => setLocalStorage(), [todos]);
  useEffect(() => pageLoad(), []);

  // delete

  const deleteButton = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };
  // add entry button state

  const [isEditButton, setIsEditButton] = useState(false);
  const trueEditButton = () => {
    setIsEditButton(true);
  };
  const falseEditButton = () => {
    setIsEditButton(false);
  };

  // selected id

  const [selectedID, setSelectedID] = useState(null);
  
  // edit
  const editButton = (id) => {
    toggleComponent();
    trueEditButton();
    setSelectedID(id);
  };

  
  useEffect(() =>{
    if (selectedID !== null) {
      const currEntry = todos.find(el => el.id === selectedID);
      setTitle(currEntry.title);
      setDate(currEntry.date);
      setDescription(currEntry.description);
    }
  }, [selectedID]);

  const editEntry = (id) => {
    const entry = {
      title: title,
      date: date,
      description: description,
      id: id,
    };

    const editEntryIndex = todos.findIndex((el) => el.id === id);

    const newTodos = [...todos];
    newTodos[editEntryIndex] = entry;

    setTodos(newTodos);
    emptyInputs();
    setSelectedID(null);
  };
  
  // event key down
  
  return (
    <div className="shadow" id="todo-container">
      {render ? (
        <EntryContainer
          editButton={editButton}
          todos={todos}
          deleteButton={deleteButton}
        />
      ) : (
        <CreateEntryPage
        emptyInputs={emptyInputs}
          selectedID={selectedID}
          editEntry={editEntry}
          isEditButton={isEditButton}
          pressAddEntry={pressAddEntry}
          title={title}
          description={description}
          date={date}
          handleTitle={handleTitle}
          handleDate={handleDate}
          handleDescription={handleDescription}
          onClick={toggleComponent}
        />
      )}
      {render ? <CreateEntryButton onClick={toggleComponent} /> : <></>}
    </div>
  );
};

export default TodoContainer;
