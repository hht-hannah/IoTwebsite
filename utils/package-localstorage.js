//获取
export function getItemFormLocalstorage(key) {
  let value = window.localStorage.getItem(key);
  return JSON.parse(value);
}

//设置
export function setItemToLocalstorage(key,value) {
  value = JSON.stringify(value);                     // 将 JSON 对象 jsonValue 转化成字符串
  localStorage.setItem(key, value);
}

//删除
export function delItemFormLocalstorage(key) {
  localStorage.removeItem(key);
}

//删除全部
export function delAllFormLocalstorage(key) {
  localStorage.clear();
}
