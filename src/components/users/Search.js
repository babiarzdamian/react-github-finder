import React, { Component } from 'react';

export class Search extends Component {
    state = {
        text: '',
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({ text: '' });
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input
                        type="text"
                        name="text"
                        value={this.state.text}
                        onChange={this.onChange}
                        placeholder="Search users..."
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="btn btn-light btn-block"
                    />
                </form>
            </div>
        );
    }
}

export default Search;
