import axios from 'axios';
import Axios from './Axios.lib';

const AllUser = async () => {

    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users`,
            {
                headers: {
                    accept: 'Application/json',
                },
            },
        );

        return response.data
    } catch (error) {

        return [];
    }
};

const GetChat = async () => {

    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/comments`,
            {
                headers: {
                    accept: 'Application/json',
                },
            },
        );

        return response.data
    } catch (error) {

        return [];
    }
};

const GetTask = async () => {

    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts`,
            {
                headers: {
                    accept: 'Application/json',
                },
            },
        );

        return response.data
    } catch (error) {

        return [];
    }
};


export {
    AllUser,
    GetChat,
    GetTask
};
