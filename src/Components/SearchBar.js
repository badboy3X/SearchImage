import React, { Component } from 'react';

class SearchBar extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { term : "hello" }
    // }
    state = {term : ""}

    // onInputChange(event) {

    //     this.setState({ term : event.target.value })
    // }

    onFormSubmit = (event) => {

        event.preventDefault();
        this.props.onUserSubmit(this.state.term);
        
    }

    render() {

        return (
            <div className=" ui segment "> 
                <form className=" ui form " onSubmit={this.onFormSubmit} >
                    <div className=" ui field">
                        <label>ImageSearch</label>
                        <input type="text" value={this.state.term} onChange={e=> this.setState({term : e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }
};

export default SearchBar;