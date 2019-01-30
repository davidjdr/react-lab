import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {
    
    //forma de hacerlo con ES6
    /*
    constructor(props) {
        super(props)
        //enlazo evento con clase, se cambia el contexto de la función
        this.handleClick = this.handleClick.bind(this);
    }
    */

    //gracias al uso de arrow function (que heredan el contexto del padre)
    //puedo usar el this.props, sin necesidad de hacer el bind en el constructor
    handleClick = (event) => {
        console.log(this.props.image);
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
                <p className="Media-author">{this.props.author}</p>
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