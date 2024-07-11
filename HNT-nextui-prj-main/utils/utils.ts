import axios, { AxiosError } from "axios";

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
    // eslint-disable-next-line import/no-named-as-default-member
    return axios.isAxiosError(error);
}

export interface ResponseApi<Data> {
    message: string;
    data?: Data;
}

export function isAxiosUnprocessableEntityError<FormError>(error: unknown): error is AxiosError<FormError> {
    return isAxiosError(error) && error.response?.status === 422;
}

export const validateEmail = (email: string) => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    return regex.test(email);
};

export const validatePhoneNumber = (phoneNumber: string) => {
    const regex = /^\d{10}$/;

    return regex.test(phoneNumber);
};
