import React from 'react';

const SimpleTask = ({name, status, id, edit, del, changeStatus, editMode, changeName, changed, editName, editId, cancel}) => {

    let statusOfTask =  '';

    statusOfTask = (status && !editMode) ? (statusOfTask = <>
        <div className="col-12 col-sm-12 col-md-3 col-lg-2">
            <div className="row">
                <div className="col-12">
                    <button className="btn btn-success col" onClick={changeStatus}>
                        <span className="buttonText col">READY</span><br/>
                        <i className="material-icons">done</i>
                    </button>
                </div>
            </div>
        </div> </>) : (!status && !editMode) ? statusOfTask = <>
            <div className="col-12 col-sm-12 col-md-3 col-lg-2">
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-warning col" onClick={changeStatus}>
                        <span className="buttonText">IN PROGRESS</span><br/>
                        <i className="material-icons">clear</i>
                        </button>
                    </div>
                </div>
            </div> </> : null;

    let nameField = '';
    let editField = '';

    (editMode && id === editId) ? (nameField = <><div className="col">
            <input type="text" value={editName} onChange={changed} className="col-12 text-left"/>
        </div></>) : (nameField = <>{name}</>);

    (editMode && id === editId) ? (editField = <>
    <div className="col-12 col-sm col-md-2 col-lg-2">
        <button className="btn btn-success col" onClick={changeName}>
        <span className="buttonText">UPDATE</span>
        <br/>
            <i className="material-icons">done</i>
        </button>
    </div>
    <div className="col-12 col-sm col-md-2 col-lg-2">
        <button className="btn btn-warning col" onClick={cancel}>
        <span className="buttonText">CANCEL</span><br/>
            <i className="material-icons">clear</i>
        </button>
    </div>
    <div className="col-12 col-sm col-md-2 col-lg-2">
        <button className="btn btn-danger col" onClick={del}>
        <span className="buttonText">DELETE</span><br/>
            <i className="material-icons">delete</i>
        </button>
    </div></>) : (editField = <>
            <div className="col-12 col-sm-12 col-md-3 col-lg-2">
                <div className="row">
                    <div className="col col-sm col-md-12 col-lg-12 text-right">
                        <button className="btn btn-primary col" onClick={edit}>
                        <span className="buttonText">EDIT</span><br/>
                            <i className="material-icons">edit</i>
                        </button>
                    </div>
                </div>
            </div></>)

    return (
        <div className="row SimpleTask">
            <div className="col-12 col-sm-12 col-md nameField text-left">{nameField}</div>
            {statusOfTask}
            {editField}
        </div>
    )
}

export default SimpleTask;