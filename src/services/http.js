import { apiUrl } from '../config/config'; // eslint-disable-line

function jsonToQueryString(json) {
    return '?' + 
        Object.keys(json).map(function(key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
}

export function apiCall({path, method, queryParams, body, headers, authorization}) {
    let options = {};
    options.method = method

    options.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    if(headers) {
        for(let key in headers){
            options.headers[key] = headers[key]
        }
    }
    if (body) {
        options.body = JSON.stringify(body)
    }
    if(queryParams){
        path = path + jsonToQueryString
    }
    if (authorization) {
        options.headers.Authorization = localStorage.getItem('token')
    }
    const fetchPromise = fetch(`${apiUrl}${path}`, options);
    return fetchPromise;
}