import { getCookie, setCookie } from '../../utils/package-cookies'
export var mainColor = getCookie("mainColor")
export function changeMainColor(color) {
    setCookie('mainColor', color, 20)
}
