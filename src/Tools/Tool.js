import React, { Component } from 'react';

export default class Tool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleBlock: false,
            show: '',
            bgcolors: this.props.bgcolors, 
            frames: this.props.frames,
            fonts: this.props.fonts,
            active: this.props.title.toLowerCase(),
            colors: this.props.colors,
            open: true,
            class: "accordion__section"
        }
    }

    on_Click() {
        this.setState({
            open:  !this.state.open,
            class: "accordion__section"
        });
    }
    render() {
        {console.log(this.state.open)}
        return (
            <>
                <div className={this.state.class}>
                    <button className="accordion" onClick={() => this.on_Click()}>
                        <p className="accordion__title">{this.props.name}</p>
                    </button>
                    {this.state[this.state.active].map(value => (
                        <div key={value}>
                            <div className='accordion__text' value={value}
                                onClick={() => this.props.changeProperty(this.state.active, value)}>{value}</div>
                        </div>
                        )
                    )}
                </div>
            </>
        );
    } 
}