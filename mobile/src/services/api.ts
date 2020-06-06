import React from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL:'#'  //url que aparecer no expo + 3333 da api
});

export default api;