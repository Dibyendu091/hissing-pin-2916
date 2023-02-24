import axios from 'axios';

// founded products

export const founded_brands = () => {
    return axios.get(`http://localhost:8080/founded_brands`)
}
