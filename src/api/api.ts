import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': '9f225800-9b44-4745-b381-d436ad2be4a7'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(id: string) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(id: string) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    getUserIDProfile(userId: string) {
        console.warn('This method is obsolete. Use profileAPI instead')
        return profileAPI.getUserIDProfile(userId)
    },

}
export const profileAPI = {
    getUserIDProfile(userId: string) {
        return instance.get(`profile/${userId}`)

    },
    getStatus(userId: string) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status/`, {status: status})

    },
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false){
        return instance.post(`auth/login`, {email, password, rememberMe} )
    },
    logOut(){
        return instance.delete(`auth/login`).then(res => res.data)
    }
}