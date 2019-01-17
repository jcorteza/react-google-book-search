import React from "react";

function BookResult() {
    return(
        <div className="bookResult">
            <div className="row">
                <div className="aboutBook">
                    <h4>This a Book Title</h4>
                    <p>By: some author</p>
                </div>
                <div className="btnDiv">
                    <button type="button" name="view">View</button>
                    <button type="button" name="save">Save</button>
                    {/* <button type="button" name="Delete">Delete</button> */}
                </div>
            </div>
            <div className="row">
                <img src="" alt="book"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    );
}

export default BookResult;