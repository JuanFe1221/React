import { Component } from "react";
import './Productos.css';

const list = [
    {
        id:1,
        descripcion:'PC Samsung',
        precio:2800000,
    },
    {
        id:2,
        descripcion:'PC Asus',
        precio:2300000,
    },
    {
        id:3,
        descripcion:'Mackbook air ml',
        precio:4300000,
    }
]; 


function buscar (descp){
    return function(item){
        return item.descripcion.toLowerCase().includes(descp.toLowerCase());
    }
}
class Productos extends Component {
    constructor(props) {
        super(props);

        this.state={
            list,
            descp: '',
        };

        this.Eliminar = this.Eliminar.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)
    }

    Eliminar(id) {
        const isNotId = item => item.id !== id;
        const listaActualizada = this.state.list.filter(isNotId);
        this.setState({ list: listaActualizada});
    };

    onSearchChange(event){
        this.setState({descp:event.target.value})
    }

    render() {
        return (
           <div className="content"> 
                <h2>Lista de Productos</h2>
                <label>Buscar</label>  
                <br></br><br></br>              
                <input tipe="tet" textarea="Buscar Productos" onChange={this.onSearchChange}></input>
                <div className='tabla'>        
                    <table>
                        <thead>
                            <th>Descripción  Producto</th>
                            <th>Precio</th>
                           <th>Eliminar Producto</th>
                        </thead>      
                                    <tbody>
                                        { this.state.list.filter(buscar(this.state.descp)).map  (item =>
                                        <tr key={item.id}>
                                            <td>
                                                {
                                                    item.descripcion
                                                }
                                            </td>
                                            <td>
                                                {
                                                    item.precio
                                                }
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() => this.Eliminar(item.id)}
                                                    type="button"
                                                >
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>                                                                                                     
                    </table>
                </div>
            </div>
        );
    };
};

export default Productos;