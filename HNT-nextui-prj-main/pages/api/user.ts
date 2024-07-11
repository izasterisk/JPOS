import http from "@/utils/http";

type LoginResponse = {
    message: string;
    role: "user" | "sale" | "manager" | "product-staff" | "admin";
};

type DeleteResponse = {
    message: string;
};

export const login = (_data: { email: string; password: string }) =>
    http.post<LoginResponse>("/v1/authen/login", _data);

export const deleteUserHttpSend = (_data: { user_id: string }) =>
    http.delete<DeleteResponse>(`/v1/user/${_data.user_id}`);
