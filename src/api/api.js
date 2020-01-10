import axios from "axios";
axios.defaults.baseURL = 'http://118.31.2.239';
// axios.defaults.withCredentials = true;
axios.defaults.headers =  {
    'Content-Type' : 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': "*",
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
}

export function listbysubid() {
    return axios.get('api/iothubresource/listbysubid');
  }

export function resourcegroup() {  
    return axios.get('api/resourcegroup');
  }

export function createIoThub(resourceGroupName, resourceName, data) {
    return axios.put(`api/iothubresource/createorupdate/${resourceGroupName}/${resourceName}`, data);
}

export function deleteIoThub(resourceGroupName, resourceName) {
  return axios.delete(`api/iothubresource/delete/${resourceGroupName}/${resourceName}`);
}

export function createRecourceGroup(resourceGroupName, location) {
  return axios.put(`api/resourcegroup/createorupdate/${resourceGroupName}/${location}`);
}

export function getIoThub (resourceGroupName, resourceName) {
  return axios.get(`api/iothubresource/getiothubinfo/${resourceGroupName}/${resourceName}`);
}
