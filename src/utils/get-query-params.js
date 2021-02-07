import queryString from 'query-string';

export default function getQueryParams(search) { 
    return queryString.parse(search);
}