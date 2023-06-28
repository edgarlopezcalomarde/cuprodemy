


export const routes = {
    LOGIN: "/login",
    REGISTER: "/register",
}

export const genRanHex = (size: number) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');