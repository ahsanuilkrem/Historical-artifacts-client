import axios from 'axios';
import { useEffect } from 'react';
import useAuth from '../authlayot/useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'https://assignment-eleven-historical-server.vercel.app/',
    withCredentials: true 
})

const useAxiosSecure = () => { 
    const {signOutuse} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log('error in interceptor', error);
            if(error.status === 401 || error.status === 403){
                console.log('neet to logout the use')
                signOutuse()
                .then(() => {
                    console.log('logOut');
                    navigate('/signIn');
                })
                .catch(error => console.log(error));
            }
            return Promise.reject(error);
        })
    }, [])

    return axiosInstance;
   
};

export default useAxiosSecure;


// 