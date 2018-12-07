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
        newId: ''
    }

    handleChange(event) {
        this.setState({
            newTask: event.target.value
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
            ListOfTasks: ListOfTasks
        })
        console.log(newTask);
        console.log(newStatus);
        console.log(ListOfTasks);
    }

    render() {
        return ( <>
            <div className = "col" >
            <div className = "col" >
            <AddTask addTask = {this.addNewTask}
            name = {this.state.newTask}
            newStatus = {this.state.newStatus}
            changed = {this.handleChange.bind(this)}/> </div >
            <div className = "col-8 mx-auto" > {this.state.ListOfTasks.map((task, index) => {
                    return <SimpleTask
                    name = {task.name}
                    status = {task.status}
                    key = {task.id}
                    id = {task.id}
                    edit = {task.edit}
                    del = {task.del}
                    />
                })
            }
            </div>
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
    edit: PropTypes.func,
    del: PropTypes.func,
    id: PropTypes.number
}

export default List;