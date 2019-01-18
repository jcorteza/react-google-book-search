import React from "react";
import BookResult from "../components/BookResult";

function ResultsContainer(props) {
    return(
        <div id="resultsContainer">
            <h3>Results Found</h3>
            {props.bookData.map((book) => {
                const bookInfo = book.volumeInfo;
                return <BookResult 
                title={bookInfo.title} 
                authors={bookInfo.authors} 
                description={bookInfo.description} 
                link={bookInfo.canonicalVolumeLink} 
                img={bookInfo.imageLinks} 
                key={book.id}/>
            })}
        </div>
    );
}

export default ResultsContainer;