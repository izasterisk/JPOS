import { Button } from "@nextui-org/button";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    Select,
    SelectItem,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    Tabs,
    useDisclosure,
} from "@nextui-org/react";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { isAxiosUnprocessableEntityError, ResponseApi } from "@/utils/utils";
import DefaultSaleLayout from "@/layouts/sale/default";
import { createOrderAPI, getOrdersAPI, Order } from "@/apis/order";
import { deleteUserHttpSend } from "../api/user";

const Admin = () => {
    const my_id = "STAFF001";
    const [data, setData] = useState<Order[]>([]);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [user, setUser] = useState<{
        first_name: string;
        last_name: string;
        email: string;
        phone_number: string;
        role: any;
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

    const onSubmit = async (_data: {
        first_name: string;
        last_name: string;
        email: string;
        phone_number: string;
        role: any;
    }) => {
        try {
            console.log({ ..._data, role: user?.role });

            // call api
            // const result = await createOrderAPI(_data);

            // if (result.status === 200) {
            //     console.log(result.data);

            //     toast.success("Login successful");
            // }
        } catch (err) {
            if (isAxiosUnprocessableEntityError<ResponseApi<{ email: string; password: string }>>(err)) {
                // const formError = err.response?.data.data;
                toast.error("Email/Phone number or Password is incorrect");
                // if (formError) {
                //   Object.keys(formError).forEach((key) => {
                //     setError(key as keyof LoginFormData, {
                //       message: formError[key as keyof LoginFormData],
                //       type: "Server",
                //     });
                //   });
                // }
            }
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<{ first_name: string; last_name: string; email: string; phone_number: string; role: any }>();

    const updateUser = (item: any) => {
        setUser(item);
        setValue("first_name", item.first_name);
        setValue("last_name", item.last_name);
        setValue("email", item.email);
        setValue("phone_number", item.phone_number);
        setValue("role", item.role);
        onOpen();
    };

    const deleteUser = async (item: any) => {
        try {
            // console.log("user id", item.id);
            const result = await deleteUserHttpSend(item.id);

            if (result.status === 200) {
                toast.success("Delete successful");
            }
        } catch (err) {
            if (isAxiosUnprocessableEntityError<ResponseApi<{ email: string; password: string }>>(err)) {
                // const formError = err.response?.data.data;
                toast.error("Cannot delete user!!!");
                // if (formError) {
                //   Object.keys(formError).forEach((key) => {
                //     setError(key as keyof LoginFormData, {
                //       message: formError[key as keyof LoginFormData],
                //       type: "Server",
                //     });
                //   });
                // }
            }
        }
    };

    return (
        <>
            <DefaultSaleLayout>
                <div className="mt-10 px-20">
                    <h1 className="mb-5">Admin</h1>

                    <Table aria-label="Example static collection table">
                        <TableHeader>
                            <TableColumn width={50}>No.</TableColumn>
                            <TableColumn width={50}>ID</TableColumn>
                            <TableColumn width={250}>NAME</TableColumn>
                            <TableColumn width={250}>EMAIL</TableColumn>
                            <TableColumn width={200}>PHONE NUMBER</TableColumn>
                            <TableColumn width={200}>ROLE</TableColumn>
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
                                    <TableCell>{item.status}</TableCell>
                                    <TableCell className="flex gap-4">
                                        <Button color="primary" onPress={() => updateUser(item)}>
                                            UPDATE
                                        </Button>
                                        <Button color="danger" onPress={() => deleteUser(item)}>
                                            DELETE
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <Modal isOpen={isOpen} size="3xl" onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Create Order</ModalHeader>
                                <ModalBody>
                                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="flex flex-col gap-5">
                                            <div className="flex items-center justify-between gap-5">
                                                <div className="field-wrapper w-full">
                                                    <label className="field-label" htmlFor="first_name">
                                                        First Name
                                                    </label>
                                                    <input
                                                        className={classNames("field-input", {
                                                            "field-input--error": errors.first_name,
                                                        })}
                                                        id="first_name"
                                                        placeholder="Name"
                                                        type="text"
                                                        {...register("first_name")}
                                                        value={user?.first_name as string}
                                                        onChange={(e) =>
                                                            setUser({ ...user, first_name: e.target.value })
                                                        }
                                                    />
                                                </div>
                                                <div className="field-wrapper w-full">
                                                    <label className="field-label" htmlFor="name">
                                                        Last Name
                                                    </label>
                                                    <input
                                                        className={classNames("field-input", {
                                                            "field-input--error": errors.last_name,
                                                        })}
                                                        id="last_name"
                                                        placeholder="last_name"
                                                        type="text"
                                                        {...register("last_name")}
                                                        value={user?.last_name as string}
                                                        onChange={(e) =>
                                                            setUser({ ...user, last_name: e.target.value })
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="field-wrapper">
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
                                                    value={user?.email}
                                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                                />
                                            </div>
                                            <div className="flex justify-between gap-5">
                                                <div className="field-wrapper w-9/12">
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
                                                        value={user?.phone_number}
                                                        onChange={(e) =>
                                                            setUser({ ...user, phone_number: e.target.value })
                                                        }
                                                    />
                                                </div>
                                                <div className="field-wrapper w-3/12">
                                                    <label className="field-label" htmlFor="role">
                                                        ROLE
                                                    </label>
                                                    <Select
                                                        aria-label="Select role"
                                                        {...register("role")}
                                                        value={user?.role}
                                                        onSelectionChange={(e) => setUser({ ...user, role: e })}
                                                    >
                                                        <SelectItem key={"ADMIN"}>ADMIN</SelectItem>
                                                        <SelectItem key={"STAFF"}>STAFF</SelectItem>
                                                        <SelectItem key={"PRODUCT STAFF"}>PRODUCT STAFF</SelectItem>
                                                        <SelectItem key={"USER"}>USER</SelectItem>
                                                        <SelectItem key={"SALE"}>SALE</SelectItem>
                                                        <SelectItem key={"MANAGER"}>MANAGER</SelectItem>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5 flex items-center justify-end">
                                            <Button color="danger" variant="light" onPress={onClose}>
                                                Close
                                            </Button>
                                            <Button color="primary" type="submit">
                                                Update
                                            </Button>
                                        </div>
                                    </form>
                                </ModalBody>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </DefaultSaleLayout>
        </>
    );
};

export default Admin;
