import React, { Component } from 'react';
import './media.css';

class Media extends Component {
    
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
            <div className="Media">
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

export default Media;