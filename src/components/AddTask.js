import React from 'react';

const AddTask = (props) => {
        return(
                <>
                <form onSubmit={props.addTask}>
                        <div className="row">
                                <div className="col-10 text-left">
                                        <input type="text"
                                        placeholder="New Task"
                                        value={props.name}
                                        onChange={props.changed}
                                        /></div>
                                <div className="col">
                                        <button className="btn btn-light" type="submit">+</button>
                                </div>
                        </div>
                </form>
                </>
        )
}

export default AddTask;