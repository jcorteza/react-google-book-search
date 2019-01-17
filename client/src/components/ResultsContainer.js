import React from "react";
import BookResult from "../components/BookResult";

function ResultsContainer() {
    return(
        <div id="resultsContainer">
            <h3>Results Found</h3>
            {/* <h3>Saved Books</h3> */}
            <BookResult />
            <BookResult />
            <BookResult />
        </div>
    );
}

export default ResultsContainer;