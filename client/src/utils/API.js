import axios from "axios";

export default {
    getBooks: () => {
        return axios.get("/api/books");
    },
    addBookToDB: () => {
        return axios.post("/api/books");
    },
    deleteBook: (id) => {
        return axios.post(`/api/books/${id}`);
    }
}