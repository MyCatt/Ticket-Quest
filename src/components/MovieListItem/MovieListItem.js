import React from 'react';

export default class MovieListItem extends React.Component {
    constructor() {
        super();
    }

    truncate(str) {
        return str.substring(0, 256) + "...";
    }

    render() {
        return (
            <div className="movieItem">
                <img className="moviePoster" src={this.props.moviePoster} />
                <div className="movieDescription">
                    <h3>{this.props.movieName}</h3>
                    <p>{this.truncate(this.props.movieDesc)}</p>
                </div>
            </div>
        )
    }
} 