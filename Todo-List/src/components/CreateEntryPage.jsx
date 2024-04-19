import { useState } from "react";


const CreateEntryPage = ({emptyInputs,selectedID,editEntry,isEditButton,onClick,title,date,description,handleDate,handleTitle,handleDescription,pressAddEntry})=>{

    return(
        <div>
            <button onClick={emptyInputs} className="btn btn-danger">X</button>
            <br /><br />
            <input required value={title} onChange={handleTitle} className="form-control" type="text" placeholder="Title" />
            <br />
            <input required value={date} onChange={handleDate} className="form-control" type="date" />
            <br />
            <textarea value={description} onChange={handleDescription} className="form-control" cols="30" rows="10" placeholder="description"></textarea>
            <br />
            <div className="d-grid gap-1">
            <button onClick={isEditButton ? ()=> editEntry(selectedID) : pressAddEntry} className="btn btn-primary">{isEditButton ? "Edit Entry" : "Add Entry"}</button>
            </div>
        </div>
    );
}

export default CreateEntryPage;