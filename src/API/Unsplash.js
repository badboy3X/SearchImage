import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID xVh1PY-UOpAt9Ve_LsuVxUAOeFsq4JIVIxIEKP7Eg4c'
    }
})