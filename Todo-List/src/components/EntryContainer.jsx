const EntryContainer = ({ editButton,todos, deleteButton }) => {
  const entries = todos.map((el) => (
    <div className="entry-div" key={`entry-${el.id}`}>
      <p>
        <b>Title: </b>
        {el.title}
      </p>
      <p>
        <b>Date: </b>
        {el.date}
      </p>
      <p>
        <b>Description: </b>
        {el.description}
      </p>
      <div className="d-grid gap-1">
        <button onClick={() => deleteButton(el.id)} className="btn btn-danger">
          <i className="fa-solid fa-delete-left"></i>
        </button>
        <button onClick={()=>editButton(el.id)} className="btn btn-success">
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
      </div>
    </div>
  ));

  return <div id="entry-container">{entries}</div>;
};

export default EntryContainer;
