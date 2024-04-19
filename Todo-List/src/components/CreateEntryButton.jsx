const CreateEntryButton = ({onClick})=>{

    return(
        <div className="d-grid gap-1">
            <br />
            <button onClick={onClick} className="btn btn-primary">Create Entry</button>
            </div>
    );
}

export default CreateEntryButton;