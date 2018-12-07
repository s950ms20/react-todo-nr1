import React from 'react';

const SimpleTask = (props) => {
    const status = props.status;
    const editMode = props.editMode;
    let editId = props.editId;

    let statusOfTask = ''
    if (status && !editMode) {
        statusOfTask = <>
        <div className="col-12 col-sm-12 col-md-3 col-lg-2">
            <div className="row">
                <div className="col-12">
                    <button className="btn btn-success col" onClick={props.changeStatus}>
                        <span className="buttonText col">READY</span><br/>
                        <i className="material-icons">done</i>
                    </button>
                </div>
            </div>
        </div>


            </>
    } else if (!status && !editMode){
        statusOfTask = <>
            <div className="col-12 col-sm-12 col-md-3 col-lg-2">
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-warning col" onClick={props.changeStatus}>
                        <span className="buttonText">IN PROGRESS</span><br/>
                        <i className="material-icons">clear</i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    }

    let nameField = '';
    let editField = '';
    if (editMode && props.id === editId) {
        nameField = <><div className="col">
        <input type="text" value={props.editName} onChange={props.changed} className="col-12 text-left"/></div>
        </>

        editField = <>
            <div className="col-12 col-sm col-md-2 col-lg-2">
                <button className="btn btn-success col" onClick={props.changeName}>
                <span className="buttonText">UPDATE</span>
                <br/>
                    <i className="material-icons">done</i>
                </button>
            </div>
            <div className="col-12 col-sm col-md-2 col-lg-2">
                <button className="btn btn-warning col" onClick={props.cancel}>
                <span className="buttonText">CANCEL</span><br/>
                    <i className="material-icons">clear</i>
                </button>
            </div>
            <div className="col-12 col-sm col-md-2 col-lg-2">
                <button className="btn btn-danger col" onClick={props.del}>
                <span className="buttonText">DELETE</span><br/>
                    <i className="material-icons">delete</i>
                </button>
        </div>
        </>
    } else {
        nameField = <>{props.name}</>

        editField = <>
        <div className="col-12 col-sm-12 col-md-3 col-lg-2">
        <div className="row">
        <div className="col col-sm col-md-12 col-lg-12 text-right">
            <button className="btn btn-primary col" onClick={props.edit}>
            <span className="buttonText">EDIT</span><br/>
                <i className="material-icons">edit</i>
            </button>
        </div>
        </div>
        </div>
        </>
    }

    return (
        <div className="row SimpleTask">
            <div className="col-12 col-sm-12 col-md nameField text-left">{nameField}</div>
            {statusOfTask}
            {editField}
        </div>
    )
}

export default SimpleTask;