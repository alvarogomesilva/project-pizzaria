import { getCookie } from "cookies-next";

export function getCookieClient() {
    const token = getCookie("@u")
    return token
}