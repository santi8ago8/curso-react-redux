/**
 * 5/16/17.
 */
import React from 'react'
import Item from './item';

export default class Lista extends React.Component {
    render() {
        var items = [];
        var data = [
            {name: 'Nombre1', puntos: 123, en_linea: true},
            {name: 'Nombre2', puntos: 124, en_linea: false},
            {name: 'Nombre3', puntos: 125, en_linea: true},
        ];

        data.forEach((p)=> {
            items.push(<Item data={p} key={p.name}/>);
        });


        return <ul>
            {items}
        </ul>
    }
}
