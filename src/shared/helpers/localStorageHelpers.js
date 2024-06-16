export function getAccessToken() {
    return localStorage.getItem("accessToken");
}

export function getRefreshToken() {
    return localStorage.getItem("refreshToken");
}

export function removeAccessToken() {
    localStorage.removeItem("accessToken");
}

export function removeRefreshToken() {
    localStorage.removeItem("refreshToken");
}


export function setAccessToken(token) {
    localStorage.setItem("accessToken", token);
}

export function setRefreshToken(token) {
    localStorage.setItem("refreshToken", token);
}
