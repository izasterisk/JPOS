import { Button } from "@nextui-org/button";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
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

const ProductStaff = () => {
    const my_id = "STAFF001";
    const [data, setData] = useState<Order[]>([]);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [order, setOrder] = useState<{ name: string; email: string; phone_number: string; message: string }>();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getOrdersAPI();

            if (result.status === 200) {
                setData(result.data.result);
            }
        };

        fetchApi();
    }, []);

    const onSubmit = async (_data: { name: string; email: string; phone_number: string; message: string }) => {
        try {
            const result = await createOrderAPI(_data);

            if (result.status === 200) {
                console.log(result.data);

                toast.success("Login successful");
            }
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
    } = useForm<{ name: string; email: string; phone_number: string; message: string }>();

    const createOrder = (item: any) => {
        setOrder(item);
        setValue("name", item.name);
        setValue("email", item.email);
        setValue("phone_number", item.phone_number);
        setValue("message", item.message);
        onOpen();
    };

    return (
        <>
            <DefaultSaleLayout>
                <div className="mt-10 px-20">
                    <h1 className="mb-5">Product Staff</h1>
                    <Tabs aria-label="Options">
                        <Tab key="me" title="My Products">
                            <Table aria-label="Example static collection table">
                                <TableHeader>
                                    <TableColumn width={50}>No.</TableColumn>
                                    <TableColumn width={50}>ID</TableColumn>
                                    <TableColumn width={250}>NAME</TableColumn>
                                    <TableColumn width={250}>EMAIL</TableColumn>
                                    <TableColumn width={200}>PHONE NUMBER</TableColumn>
                                    <TableColumn>MESSAGE</TableColumn>
                                    <TableColumn width={100}>STATUS</TableColumn>
                                    <TableColumn width={150}>ACTION</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    {data
                                        .filter((item) => item.assigned_to === my_id)
                                        .map((item, index) => (
                                            <TableRow key={item.id}>
                                                <TableCell>{index}</TableCell>
                                                <TableCell>{item.id}</TableCell>
                                                <TableCell>{item.name}</TableCell>
                                                <TableCell>{item.email}</TableCell>
                                                <TableCell>{item.phone_number}</TableCell>
                                                <TableCell>{item.message}</TableCell>
                                                <TableCell>{item.status}</TableCell>
                                                <TableCell>
                                                    <Button color="primary" onPress={() => createOrder(item)}>
                                                        {item.status === "DONE" ? "View Image" : "Upload Image"}
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </Tab>
                        <Tab key="music" title="All Pending Products">
                            <Table aria-label="Example static collection table">
                                <TableHeader>
                                    <TableColumn width={50}>No.</TableColumn>
                                    <TableColumn width={50}>ID</TableColumn>
                                    <TableColumn width={250}>NAME</TableColumn>
                                    <TableColumn width={250}>EMAIL</TableColumn>
                                    <TableColumn width={200}>PHONE NUMBER</TableColumn>
                                    <TableColumn>MESSAGE</TableColumn>
                                    <TableColumn width={100}>STATUS</TableColumn>
                                    <TableColumn width={150}>ACTION</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    {data
                                        .filter((item) => item.assigned_to === "" && item.status === "ACCEPTED")
                                        .map((item, index) => (
                                            <TableRow key={item.id}>
                                                <TableCell>{index}</TableCell>
                                                <TableCell>{item.id}</TableCell>
                                                <TableCell>{item.name}</TableCell>
                                                <TableCell>{item.email}</TableCell>
                                                <TableCell>{item.phone_number}</TableCell>
                                                <TableCell>{item.message}</TableCell>
                                                <TableCell>{item.status}</TableCell>
                                                <TableCell>
                                                    <Button color="warning">Assign Myself</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </Tab>
                    </Tabs>
                </div>
                <Modal isOpen={isOpen} size="3xl" onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Create Order</ModalHeader>
                                <ModalBody>
                                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="flex flex-col gap-5">
                                            <div className="field-wrapper">
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
                                                    value={order?.name as string}
                                                    onChange={(e) => setOrder({ ...order, name: e.target.value })}
                                                />
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
                                                    value={order?.email}
                                                    onChange={(e) => setOrder({ ...order, email: e.target.value })}
                                                />
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
                                                    value={order?.phone_number}
                                                    onChange={(e) =>
                                                        setOrder({ ...order, phone_number: e.target.value })
                                                    }
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
                                                    onChange={(e) => setOrder({ ...order, message: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-5 flex items-center justify-end">
                                            <Button color="danger" variant="light" onPress={onClose}>
                                                Close
                                            </Button>
                                            <Button color="primary" type="submit">
                                                Create
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

export default ProductStaff;
