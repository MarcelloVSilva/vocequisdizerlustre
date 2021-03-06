import React from 'react'

import { Context } from '../../providers/Provider'

import capaCcufg from './aoVivoCCUFG_cortada.jpg'
import capaApego from './capaApego.jpg'
import capaEp from './lutreEpCapa_n.jpg'

import './Albuns.css'

const URLS = {
    YOUTUBE_APEGO: 'https://www.youtube.com/watch?v=GI4LNcsm59s',
    YOUTUBE_CCUFG: 'https://www.youtube.com/watch?v=1hBHt1KF8N0',
    YOUTUBE_EP: 'https://www.youtube.com/watch?v=q23XioubTIs',
    SPOTIFY_APEGO: 'https://open.spotify.com/album/5yqbFJmkoLe0d2HPz3Q2dT?si=HLpQYasTQkq8hFjaZTKzhg',
    SPOTIFY_CCUFG: 'https://open.spotify.com/album/6J95jkR9Sx8mFMysIX6YMj?si=gYNTH_3KSlKkpmsDl0ReVA',
}

class Albuns extends React.Component {
    constructor() {
        super()
        this.abreLink = this.abreLink.bind(this)
        this.clickRotate = this.clickRotate.bind(this)
    }
    abreLink(url) {
        window.open(url, '_blank');
    }
    clickRotate(event) {
        const card = event.currentTarget
        card.classList.toggle('rotated');
    }
    AlbunsForDesktop = () => {
        return <div className='albunsCapas'>
            <div className='slide'>
                <div onClick={this.clickRotate} id='capaApego' className="card">
                    <div className="card-contents card-front" />
                    <div className="card-contents card-back">
                        <div className="card-depth">
                            <h2>Apego</h2>
                            <p>2017</p>
                        </div>
                    </div>
                </div>
                <div id='iconesRedesSociais'>
                    <i onClick={()=>this.abreLink(URLS.SPOTIFY_APEGO)} className="fab fa-spotify btn-social"></i>
                    <i onClick={()=>this.abreLink(URLS.YOUTUBE_APEGO)} className="fab fa-youtube btn-social"></i>
                </div>
            </div>
            <div className='slide'>
                <div onClick={this.clickRotate} id='capaCcufg' className="card">
                    <div className="card-contents card-front" />
                    <div className="card-contents card-back">
                        <div className="card-depth">
                            <h2>CCUFG</h2>
                            <p>2017</p>
                        </div>
                    </div>
                </div>
                <div id='iconesRedesSociais'>
                    <i title='Álbum completo' onClick={()=>this.abreLink(URLS.SPOTIFY_CCUFG)} className="fab fa-spotify btn-social"></i>
                    <i title='Apenas uma música no Youtube. Completo no Spotify' onClick={()=>this.abreLink(URLS.YOUTUBE_CCUFG)} className="fab fa-youtube btn-social"></i>
                </div>
            </div>
            <div className='slide'>
                <div onClick={this.clickRotate} id='capaEp' className="card">
                    <div className="card-contents card-front" />
                    <div className="card-contents card-back">
                        <div className="card-depth">
                            <h2>EP LUTRE</h2>
                            <p>2016</p>
                        </div>
                    </div>
                </div>
                <div id='iconesRedesSociais'>
                    <i onClick={()=>this.abreLink(URLS.YOUTUBE_EP)} className="fab fa-youtube btn-social"></i>
                </div>
            </div>
        </div>;
    }

    AlbunsForMobile = () => {
        return (
            <div className='mobile'>
                <div id='capaApego' className='slideMobile'>
                    <img alt="APEGO" className='capas' src={capaApego}></img>
                </div>
                <div id='capaCcufg' className='slideMobile'>
                    <img alt="CCUFG" className='capas' src={capaCcufg}></img>
                </div>
                <div id='capaEp' className='slideMobile'>
                    <img alt="EP" className='capas' src={capaEp}></img>
                </div>
            </div>
        )
    }
    render() {
        return (
            <Context.Consumer>
                {(context) => (
                    <React.Fragment>
                        {
                            context.ehBrowser ?
                                this.AlbunsForDesktop() :
                                this.AlbunsForMobile()
                        }
                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default Albuns
