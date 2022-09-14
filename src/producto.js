//importo la libreria de react
import React,{Component} from "react";
//importamos los estilos
import './producto.css';
//creo una lista de datos
const list = [
    {
        id: 1,
        articulo:'jarron',
        descripcion:'jarron las americas',
        precio:20000,
    },
    {
        id: 2,
        articulo:'Escultura',
        descripcion:'Escultura las americas',
        precio:20000,
    },
    {
        id: 3,
        articulo:'Morral',
        descripcion:'morral las americas',
        precio:20000,
    }
];
//creo la clase
class Productos extends Component{
//creamos un constructor
//palabra clave props como parametro
constructor(props){
    //palabra clave super
    super(props);

    //palabra clave this
    //vamos a cambiar el estado de la lista
    this.state ={
        list,
    };
    this.eliminar=
    this.eliminar.bind(this);

    
    }
    eliminar(id){
        const isNotId = item => item.id !== id;
        const listActualizada=
        this.state.list.filter(isNotId);
        this.setState({list: listActualizada});

    }

//renderizamos


//78  <div key={item.id}>  103 </div>
render(){

   return(
    <div>
 <h2 className="titulo">Artesanias</h2> <br></br>
  
    <div className="contenidotabla">  
   
    <table>
       
        <thead>
            <tr>
                <th>
                    Articulo
                </th>
                <th>
                    Descripcion
                </th>
                <th>
                    Precio
                </th>
                <th>
                    Eliminar
                </th>
            </tr>
        </thead>
        <tbody> 
        {this.state.list.map(item=>
        
               <tr>
       
                <th>
                {item.articulo}
                </th>
                <td>
                {item.descripcion}
                </td>
                <td>
                {item.precio}
                </td>
                <td>
                <button
                        onClick={()=>this.
                        eliminar(item.id)}
                        type="button">
                        eliminar
                    </button>
                </td>
            
             
                
              </tr>
           
            )} 
           
             </tbody> 
           
            
            </table>
    </div>  </div>
   )
}
}
//exporto la clase
export default Productos;

