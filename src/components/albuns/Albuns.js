import React from 'react'

import capaCcufg from './aoVivoCCUFG.jpg'
import capaApego from './capaApego.jpg'
import capaEp from './lutreEpCapa_n.jpg'

import './Albuns.css'

class Albuns extends React.Component {
    render() {
        return (
            <div className='albunsCapas'>
                <img alt="" className='capas' id='capaApego' src={capaApego}></img>
                <img alt="" className='capas' id='capaCcufg' src={capaCcufg}></img>
                <img alt="" className='capas' id='capaEp' src={capaEp}></img>
            </div>
            )
    }
}

export default Albuns