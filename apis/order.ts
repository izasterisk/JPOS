import http from "@/utils/http";

export const createOrderAPI = (_data: { name: string; email: string; phone_number: string; message: string }) =>
    http.post("order/create", {
        _data,
    });

type status = "PENDING" | "ACCEPTED" | "PROCESSING" | "DONE" | "REJECTED";

export type Order = {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    message: string;
    assigned_to: string | null;
    status: status;
};

type OrderResponse = {
    messsage: string;
    result: Order[];
};

export const getOrdersAPI = () => http.get<OrderResponse>("order/all");
