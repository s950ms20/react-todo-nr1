import React from 'react';
import {
    Component
} from 'react'
import SimpleTask from './SimpleTask'
import AddTask from './AddTask';
import PropTypes from 'prop-types'

class List extends Component {
    state = {
        ListOfTasks: [{
                name: 'Task1',
                status: true,
                id: '123000000'
            },
            {
                name: 'Task2',
                status: false,
                id: '456000000'
            }
        ],
        newTask: '',
        newStatus: false,
        newId: '',
        editMode: false,
        editName: '',
        editId: ''
    }

    newTaskHandler = (event) => {
        this.setState({
            newTask: event.target.value
        })
    }

    editNameChangeHandler = (event) => {
        this.setState({
            editName: event.target.value
        })
    }

    addNewTask = (e) => {
        e.preventDefault();
        let newTask = this.state.newTask;
        const newStatus = this.state.newStatus;
        const newId = Number(Math.floor(Math.random() * 1000000000));
        const ListOfTasks = [...this.state.ListOfTasks]
        const newPosition = {
            name: newTask,
            status: newStatus,
            id: newId
        }
        ListOfTasks.push(newPosition);
        this.setState({
            ListOfTasks: ListOfTasks,
            newTask: ''
        })
    }

    changeStatus = (id) => {
        const ListOfTasks = [...this.state.ListOfTasks];
        const actualPosition = ListOfTasks.findIndex(tsk => tsk.id === id);
        ListOfTasks[actualPosition].status = !ListOfTasks[actualPosition].status;
        this.setState({
            ListOfTasks: ListOfTasks
        })
    }

    deleteTask = (id) => {
        const ListOfTasks = [...this.state.ListOfTasks];
        const actualPosition = ListOfTasks.findIndex(tsk => tsk.id === id);
        ListOfTasks.splice(actualPosition, 1);
        this.setState({
            ListOfTasks: ListOfTasks,
            editMode: false
        })
    }

    cancelEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    editMode = this.state.editMode;
    editModeHandler = (id) => {
        this.setState({
            editMode: true,
            editId: id
        })
        const ListOfTasks = [...this.state.ListOfTasks];
        const actualPosition = ListOfTasks.findIndex(tsk => tsk.id === id);
        this.setState({
            editName: ListOfTasks[actualPosition].name
        })
    }

    changeNameHandler = () => {
        const editId = this.state.editId;
        const ListOfTasks = [...this.state.ListOfTasks];
        const actualPosition = ListOfTasks.findIndex(tsk => tsk.id === editId);
        ListOfTasks[actualPosition].name = this.state.editName;

        this.setState({
            ListOfTasks: ListOfTasks,
            editId: '',
            editName: '',
            newTask: '',
            editMode: false
        })
    }

    render() {
        return ( < >
            <div className = "col List" >
            <div className = "col mx-auto" >
            <AddTask
            addTask = {this.addNewTask}
            name = {this.state.newTask}
            newStatus = {this.state.newStatus}
            changed = {this.newTaskHandler.bind(this)}
            editMode = {this.state.editMode}
            />
            </div >
            <div className = "col mx-auto" > {
                this.state.ListOfTasks.map((task, index) => {
                    return <SimpleTask
                            name = {task.name}
                            status = {task.status}
                            key = {task.id}
                            id = {task.id}
                            edit = {() => {this.editModeHandler(task.id)}}
                            del = {() => {this.deleteTask(task.id)}}
                            changeStatus = {() => this.changeStatus(task.id)}
                            editMode = {this.state.editMode}
                            changeName = {() => {this.changeNameHandler()}}
                            changed = {this.editNameChangeHandler.bind(this)}
                            editName = {this.state.editName}
                            editId = {this.state.editId}
                            cancel = {() => {this.cancelEditMode()}}>
                            </SimpleTask>
                })
            } </div>
            </div >
            </>
        )
    }
}

List.propTypes = {
    addTask: PropTypes.func,
    name: PropTypes.string,
    newStatus: PropTypes.bool,
    changed: PropTypes.func,
    editMode: PropTypes.bool,
    edit: PropTypes.func,
    del: PropTypes.func,
    id: PropTypes.number,
    changeStatus: PropTypes.func,
    changeName: PropTypes.func,
    editName: PropTypes.string,
    editId: PropTypes.number,
    cancel: PropTypes.func
}

export default List;