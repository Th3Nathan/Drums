import React, { Component } from 'react';
import './Drum.css';

class Drum extends Component {
    render(){
        let drumStyle = null;
        if (this.props.isPlaying) {
            drumStyle = {
                transform: 'scale(1.1)',
                borderColor: '#ffc600',
                boxShadow: '0 0 1rem #ffc600'                              
            }
        }

        return (
            <div className="Drum"
                 style={drumStyle}
                 onMouseDown={this.props.handleFocus} 
                 onMouseUp={this.props.handleUnfocus}
                 onMouseLeave={this.props.handleUnfocus}
            >
                <div>
                    {this.props.letter}
                </div>
                <div>
                    {this.props.type}
                </div>
            </div>
        );
    }
}

export default Drum;