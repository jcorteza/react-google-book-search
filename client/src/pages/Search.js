import React from "react";
import SearchForm from "../components/SearchForm";
import ResultsContainer from "../components/ResultsContainer";

function Search() {
    return(
        <main>
            <SearchForm />
            <ResultsContainer />
        </main>
    );
}

export default Search;