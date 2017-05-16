/**
 * 5/16/17.
 */

/*require

nombre
estado
puntos */

import React from 'react'

export default class Item extends React.Component {
    render() {


        return <li>
            <div>
                <div> Estado: {this.props.data.en_linea?'conectado':'desconectado'} </div>
                <div> Nombre: {this.props.data.name} </div>
                <div> Puntos: {this.props.data.puntos} </div>
            </div>

        </li>
    }
}
