import React from "react";

function BookResult(props) {
    return(
        <div className="bookResult">
            <div className="row">
                <div className="aboutBook">
                    <h4>{props.title}</h4>
                    <p>By: {(props.authors)? props.authors.join(", "): "N/A"}</p>
                </div>
                <div className="btnDiv">
                    {(props.link)? 
                    <a href={props.link} target="_blank" rel="noopener noreferrer"><button type="button" name="view">View</button></a> : null}
                    <button type="button" name="save">Save</button>
                    {/* <button type="button" name="Delete">Delete</button> */}
                </div>
            </div>
            <div className="row">
                <img src={
                    (props.img.smallThumbnail)? props.img.smallThumbnail:
                    (props.img.thumbnail)? props.img.thumbnail: ""
                } alt="book cover"/>
                <p>{(props.description)? props.description: "N/A"}</p>
            </div>
        </div>
    );
}

export default BookResult;