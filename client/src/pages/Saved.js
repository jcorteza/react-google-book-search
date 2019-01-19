import React from "react";
import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API";

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedBooks: []
        }
    }

    componentWillMount() {
        API.getBooks().then(
            (response) => {
                this.setState({savedBooks: response.data});
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        return(
            <main>
                <ResultsContainer savedBooks={this.state.savedBooks} path={this.props.match.path}/>
            </main>
        );
    }
}

export default Saved;