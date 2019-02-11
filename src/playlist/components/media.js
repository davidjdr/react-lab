import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {
    
    //forma de hacerlo con ES6
    
   /* constructor(props) {
        super(props)
        //enlazo evento con clase, se cambia el contexto de la función
        //this.handleClick = this.handleClick.bind(this);

        //Esta es la manera anterior para trabajar con ES menor a 7
        //Estado de los componentes en ReactJs
        this.state = {
            author: props.author
        }

        //0 Constructor: método llamado antes de que el componente sea 
        //montado (el componente aún no se ve)
        //Dentro del ciclo de vida de un componente esto representa:
        // Enlazo (bind) eventos y/o inicializo estado
    }*/
    
    //ES7 de manejar estado de los componentes
    state = {
        author: 'David Jesus'
    }

    componentWillMount(){
        //1 Se ejecuta antes de montar el componente
        // Se podría usar para hacer un setState()
    }

    render(){
        //2 Contiene todos los elementos a renderizar
        // podrías usarlo para calcular propiedades (ej: concatenar una cadena)
    }

    componentDidMount(){
        //3 Solo se lanza una vez
        //Ideal para llamar a una API, hacer un setInteval, etc
    }

    //Actualización:
    componentWillReceiveProps(){
        //4 Es llamado cuando el componente recibe nuevas propiedades.

    }

    shouldComponentUpdate(){
        //5 Idea para poner una condición y  si las propiedades que le llegaron anteriormente
        // eran las mismas que tenia retornar false para evitar re-renderear el componente
    }

    componentWillUpdate(){
        //6 metodo llamado antes de re-renderizar el componente si shouldComponentUpdate devolvió true
    }

    // re-render si es necesario...
    componentDidUpdate(){
        //7 Método llamado luego del re-render
    }

    componentWillUnmount(){
        //8 Método llamado antes de desmontar el componente
    }

    componentDidCatch(){
        //9 Si ocurre algún error, lo capturo desde acá:
    }


    //gracias al uso de arrow function (que heredan el contexto del padre)
    //puedo usar el this.props, sin necesidad de hacer el bind en el constructor
    handleClick = (event) => {
       //console.log(this.props.image);
       //llamamos a un metodo del componente para cambiar el estado
       this.setState({
           author: 'David Rosales'
       })
    }

    render(){
        const styles = {
            container: {
                color: 'black',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        }
        return (
            /*class aunque es un atributo html tambien es una palabra resrvada de js, por lo que se sustituye con className*/
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                   <img
                    src={this.props.image}
                    alt=""
                    width={260}
                    height={160}
                    className="Media-image"
                   />
                </div>
                <h3 className="Media-title">{this.props.title}</h3>
                <p className="Media-author">{this.state.author}</p>
            </div>
        )
    }
}

//Defino propTypes con propiedades y tipos para ser validados
Media.propTypes = {
    image: PropTypes.string,
    //isRequired para valor obligatorio
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    //ejemplo:
    //unaPropiedad: number //valida numeros
    //otros tipos de datos: object, func (función), array, etc
    //oneOf valida texto esperado de una colección
    type: PropTypes.oneOf(['video', 'audio'])
};

//Doc de PropType: https://reactjs.org/docs/typechecking-with-proptypes.html

export default Media;

/*
Ciclo de vida de los componentes
*/