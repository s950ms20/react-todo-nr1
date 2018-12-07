import React from 'react';

const SimpleTask = (props) => {
    return (
        <div className="row SimpleTask">
            <div className="col">
                <div className="row">
                <p className="col text-left">{props.name}</p>
                <p className="col">{props.status}</p>
                <div className="col-2"><button className="btn btn-light" edit={props.edit}>EDIT</button></div>
                <div className="col-2"><button className="btn btn-light" del={props.del}>DEL</button></div>
                </div>
            </div>
        </div>
    )
}

export default SimpleTask;