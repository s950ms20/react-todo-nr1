import React from 'react';

//const AddTask = ({editMode}) => {    <- tutaj też możesz zrobić destrukturyzacje.
const AddTask = (props) => {
        // const { editMode } = this.props;    <- destrukturyzacja - rób tak, tak jest pro i możesz je wywołać po przecinku.
        const editMode = props.editMode;
        let addTaskField = null;

        // nie róbmy ifologii - 

        // return editMode ? null : <> tutaj zwracasz cały komponent </>
        if (!editMode) {
                addTaskField = <>
                <div className="col">
                        <div className="col">
                                <form onSubmit={props.addTask}>
                                        <div className="col">
                                                <div className="row mx-auto">
                                                        <div className="col col-sm text-left nameField">
                                                                <input type="text"
                                                                placeholder="New Task"
                                                                value={props.name}
                                                                onChange={props.changed}
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
        } else {
                addTaskField = <></>
        }

        return(
                <>
                {addTaskField}
                </>
        )
}

export default AddTask;
