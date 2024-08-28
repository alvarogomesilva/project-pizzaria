import { cookies } from "next/headers";

export function getCookieServer() {

    const token = cookies().get("@u")?.value
    
    return token || null;
}