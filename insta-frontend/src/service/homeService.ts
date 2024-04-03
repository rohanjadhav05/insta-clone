import axios from "axios";

const REST_API_BASE_URL_HOME = "http://localhost:8080/home";

export interface UserDto{
    userName : string,
    userPhone : string,
    userPass : string,
    userFullName : string,
    userPost : number
}

export const signupUser = (userDto : UserDto) => {
    return axios.post(REST_API_BASE_URL_HOME+"/signup", userDto);
}

export const loginUser = (userDto : UserDto) => {
    return axios.post(REST_API_BASE_URL_HOME+"/login", userDto);
}