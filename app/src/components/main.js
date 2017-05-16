/**
 * 5/16/17.
 */
import React from 'react'
import Lista from './lista';

export default class Main extends React.Component {
    render() {
        return <div>
            <h1>Tabla de posiciones</h1>
            <hr/>
            <Lista />
        </div>
    }
}
