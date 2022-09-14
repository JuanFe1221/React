import React, { Component } from "react";

//construir un arreglo generando un estado de dicho arreglo desde el constructor
//El arreglo  tendra 2 atrubutos. un atributo llamado accion y un atributo llamado done
class ListarTareas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "Luisa",
            todoItems: [/*{
                accion: "Endulzae a mi amigo secreto",
                done: false,

            },
        {
            accion: "comprar almuerzo",
            done: true,
        }*/],
        newItemText: "",
        }
    }

    UpdateNewTextValue = (event) => {
        this.setState({ newItemText: event.target.value});
    }

    CreateNewTodo = () => {
        if (!this.state.todoItems.find(item => item.accion === this.state.newItemText)) {
            this.setState({
                todoItems: [...this.state.todoItems,
                    {
                        accion: this.state.newItemText, 
                        done: false, 
                    }],
            });
        }
    }
    ToggleTodo = (todo) => this.setState({todoItems:
                  this.state.todoItems.map(item => item.accion === todo.accion 
                       ? {item, done: !item.done} : item)}); 

    TodoTableRows = () => this.state.todoItems.map(item => 
         <tr key={ item.accion}>
            <td> { item.accion }</td>
            <td>
                <input type="checkbox" checked={ item.done} onChange={() => this.ToggleTodo(item)}></input>
            </td>
         </tr>
        );
    render() {
        return (
            <div>
                <h4 className="bg-dark text-white text-center p-2">Lista de tareas de {this.state.userName} {this.state.todoItems.filter(t => !t.done).length} cosa(s) por hacer</h4>
                <div className="container-fluid">
                    <div className="my-1">
                        <input className="form-control" value={this.state.newItemText} onChange={this.UpdateNewTextValue}></input>
                        <button className="btn btn-dark mt-2" onClick={this.CreateNewTodo}>Añadir</button>
                        <div>
                            <table className="table table-striped table-bordered mt-2">
                                <thead>
                                    <tr><th>Descripcion: </th></tr>
                                </thead>
                                <tbody>{this.TodoTableRows()}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListarTareas;