import axios from "axios"

export const fetchApi = async (pageDetails) => {
    //parameter ma us argument ko receive krny k bad uski value destructure kr li hn
    const {pageNumber, pageSize} = pageDetails
    const res = await axios.get(`http://localhost:3004/comments?_page=${pageNumber}&_limit=${pageSize}`) 
    return res;
}