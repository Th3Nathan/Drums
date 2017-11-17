import React, { Component } from 'react';
import Drum from './Drum';
import { drumSounds } from './sounds';
import './Drumkit.css';

class Drumkit extends Component {
    constructor(props){
        super(props);
        this.state = {
            playing: new Set()
        } 
    }
    keysToDrums = {
        'a': 'boom',
        's': 'clap',
        'd': 'hihat',
        'f': 'kick',
        'g': 'openhat',
        'h': 'ride',
        'j': 'snare',
        'k': 'tink',
        'l': 'tom'
    };

    componentWillMount() {
        document.addEventListener("keydown", this.handleFocus().bind(this));
        document.addEventListener("keyup", this.handleUnfocus().bind(this));
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleFocus().bind(this));
        document.removeEventListener("keyup", this.handleUnfocus().bind(this));       
    }

    handleFocus(drumType) {
        return (e) => {
            let type = drumType ? drumType : this.keysToDrums[e.key]
            if (!type) return null;
            drumSounds[type].currentTime = 0;
            drumSounds[type].play();
            this.setState(s => s.playing.add(type));
        }
    }

    handleUnfocus(drumType) {
        return (e) => {
            let type = drumType ? drumType : this.keysToDrums[e.key]
            this.setState(s => s.playing.delete(type));
        }
    }

    render() {
        return (
        <div className='Drumkit'>
            {
                Object.keys(this.keysToDrums).map((k, i) => {
                let drum = this.keysToDrums[k];
                let isPlaying = this.state.playing.has(drum);
                return (
                    <Drum 
                        type={drum}
                        isPlaying={isPlaying} 
                        letter={k} 
                        handleFocus={this.handleFocus(drum)}
                        handleUnfocus={this.handleUnfocus(drum)}
                    />
                )
                })
            }
        </div>
        );
    }
}

export default Drumkit;