import React from 'react';

const AddTask = ({ addTask, name, changed, editMode }) => {

        let addTaskField = null;

        addTaskField = (editMode) ? addTaskField = null : addTaskField = <>
        <div className="col">
                <div className="col">
                        <form onSubmit={addTask}>
                                <div className="col">
                                        <div className="row mx-auto">
                                                <div className="col col-sm text-left nameField">
                                                        <input type="text"
                                                        placeholder="New Task"
                                                        value={name}
                                                        onChange={changed}
                                                        className="col" />
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-2 text-right">
                                                        <button className="btn btn-info col" type="submit">
                                                                <span className="buttonText">ADD</span><br/>
                                                                <i className="material-icons">add</i>
                                                        </button>
                                                </div>
                                        </div>
                                </div>
                        </form>
                </div>
        </div>
        </>

        return (
                <>
                {addTaskField}
                </>
        )

}

export default AddTask;
