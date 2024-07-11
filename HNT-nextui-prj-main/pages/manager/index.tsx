import { Button } from "@nextui-org/button";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    useDisclosure,
} from "@nextui-org/react";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import DefaultSaleLayout from "@/layouts/sale/default";
import { getOrdersAPI, Order } from "@/apis/order";

const Manager = () => {
    const [data, setData] = useState<Order[]>([]);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [order, setOrder] = useState<{
        name: string;
        email: string;
        phone_number: string;
        message: string;
    }>();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        control,
    } = useForm<{
        name: string;
        email: string;
        phone_number: string;
        message: string;
        reason: string;
        decision: "accept" | "decline";
    }>();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getOrdersAPI();

            if (result.status === 200) {
                setData(result.data.result);
            }
        };

        fetchApi();
    }, []);

    const confirmOrder = (item: any) => {
        setOrder(item);
        setValue("name", item.name);
        setValue("email", item.email);
        setValue("phone_number", item.phone_number);
        setValue("message", item.message);
        onOpen();
    };

    const onSubmit = async (_data: {
        name: string;
        email: string;
        phone_number: string;
        message: string;
        reason: string;
        decision: "accept" | "decline";
    }) => {
        try {
            console.log(_data);
            // const result = await createOrderAPI(_data);
            // if (result.status === 200) {
            //     console.log(result.data);
            //     toast.success("Login successful");
            // }
        } catch (err) {
            // if (isAxiosUnprocessableEntityError<ResponseApi<{ email: string; password: string }>>(err)) {
            //     // const formError = err.response?.data.data;
            //     toast.error("Email/Phone number or Password is incorrect");
            //     // if (formError) {
            //     //   Object.keys(formError).forEach((key) => {
            //     //     setError(key as keyof LoginFormData, {
            //     //       message: formError[key as keyof LoginFormData],
            //     //       type: "Server",
            //     //     });
            //     //   });
            //     // }
            // }
        }
    };

    return (
        <>
            <DefaultSaleLayout>
                <div className="mt-10 px-20">
                    <h1 className="mb-5">Manager</h1>
                    <Table aria-label="Example static collection table">
                        <TableHeader>
                            <TableColumn width={50}>No.</TableColumn>
                            <TableColumn width={50}>ID</TableColumn>
                            <TableColumn width={150}>NAME</TableColumn>
                            <TableColumn width={200}>EMAIL</TableColumn>
                            <TableColumn width={200}>PHONE NUMBER</TableColumn>
                            <TableColumn>MESSAGE</TableColumn>
                            <TableColumn width={100}>STAFF ID</TableColumn>
                            <TableColumn width={100}>STATUS</TableColumn>
                            <TableColumn width={150}>ACTION</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {data.map((item, index) => (
                                <TableRow key={item.id}>
                                    <TableCell>{index}</TableCell>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.phone_number}</TableCell>
                                    <TableCell>{item.message}</TableCell>
                                    <TableCell>{item.assigned_to}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                    <TableCell>
                                        <Button color="primary" onClick={() => confirmOrder(item)}>
                                            View Order
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Modal isOpen={isOpen} size="3xl" onOpenChange={onOpenChange}>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1">Confirm Order</ModalHeader>
                                    <ModalBody>
                                        <form className="" onSubmit={handleSubmit(onSubmit)}>
                                            <div className="flex flex-col gap-5">
                                                <div className="flex justify-between gap-5">
                                                    <div className="field-wrapper w-1/2">
                                                        <label className="field-label" htmlFor="name">
                                                            Name
                                                        </label>
                                                        <input
                                                            className={classNames("field-input", {
                                                                "field-input--error": errors.name,
                                                            })}
                                                            id="name"
                                                            placeholder="Name"
                                                            type="text"
                                                            {...register("name")}
                                                            disabled
                                                            value={order?.name}
                                                        />
                                                    </div>
                                                    <div className="field-wrapper w-1/2">
                                                        <label className="field-label" htmlFor="email">
                                                            Email
                                                        </label>
                                                        <input
                                                            className={classNames("field-input", {
                                                                "field-input--error": errors.email,
                                                            })}
                                                            id="email"
                                                            placeholder="Your Email"
                                                            type="text"
                                                            {...register("email")}
                                                            disabled
                                                            value={order?.email}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="field-wrapper">
                                                    <label className="field-label" htmlFor="phone_number">
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        className={classNames("field-input", {
                                                            "field-input--error": errors.phone_number,
                                                        })}
                                                        id="phone_number"
                                                        placeholder="Your Phone Number"
                                                        type="text"
                                                        {...register("phone_number")}
                                                        disabled
                                                        value={order?.phone_number}
                                                    />
                                                </div>
                                                <div className="field-wrapper">
                                                    <label className="field-label" htmlFor="message">
                                                        Message
                                                    </label>
                                                    <textarea
                                                        className={classNames("textarea-input", {
                                                            "textarea-input--error": errors.message,
                                                        })}
                                                        id="message"
                                                        placeholder="Your Message"
                                                        {...register("message")}
                                                        value={order?.message}
                                                        onChange={(e) =>
                                                            setOrder({ ...order, message: e.target.value })
                                                        }
                                                    />
                                                </div>
                                                <div className="flex gap-5">
                                                    <div className="field-wrapper w-36">
                                                        <label className="field-label" htmlFor="decision">
                                                            Decision
                                                        </label>
                                                        <select
                                                            className="field-input"
                                                            defaultValue="accept"
                                                            {...register("decision")}
                                                        >
                                                            <option value="accept">Accept</option>
                                                            <option value="decline">Decline</option>
                                                        </select>
                                                    </div>

                                                    <div className="field-wrapper w-full">
                                                        <label className="field-label" htmlFor="reason">
                                                            Reason
                                                        </label>
                                                        <input
                                                            className={classNames("field-input", {
                                                                "field-input--error": errors.reason,
                                                            })}
                                                            id="reason"
                                                            placeholder="Reason"
                                                            type="text"
                                                            {...register("reason")}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-5 flex items-center justify-end gap-3">
                                                <Button color="danger" variant="light" onPress={onClose}>
                                                    Close
                                                </Button>
                                                <Button color="primary" type="submit">
                                                    Submit
                                                </Button>
                                            </div>
                                        </form>
                                    </ModalBody>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </div>
            </DefaultSaleLayout>
        </>
    );
};

export default Manager;
