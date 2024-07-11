/* eslint-disable tailwindcss/no-custom-classname */
import classNames from "classnames";
import { useForm } from "react-hook-form";

import DefaultLayout from "@/layouts/default";

export default function ContactPage() {
    const onSubmit = async (_data: {
        first_name: string;
        last_name: string;
        email: string;
        phone_number: string;
        message: string;
    }) => {
        try {
            console.log(_data);

            // @1 gửi req tới http://localhost:4000/api/contact_us/ METHOD POST

            // const result = await login(_data);
            // if (result.status === 200) {
            //     addToken(result.data.result);
            //     toast.success("Login successful");
            //     navigate("/");
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

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            message: "",
        },
    });

    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block min-h-screen max-w-lg justify-center text-center">
                    <div className="flex flex-col gap-2.5 text-center">
                        <h1>Contact Us</h1>
                    </div>
                    <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-5">
                                <div className="field-wrapper">
                                    <label className="field-label" htmlFor="first_name">
                                        First Name
                                    </label>
                                    <input
                                        className={classNames("field-input", {
                                            "field-input--error": errors.first_name,
                                        })}
                                        id="first_name"
                                        placeholder="Your First Name"
                                        type="text"
                                        {...register("first_name", {
                                            required: true,
                                        })}
                                    />
                                </div>
                                <div className="field-wrapper">
                                    <label className="field-label" htmlFor="last_name">
                                        Last Name
                                    </label>
                                    <input
                                        className={classNames("field-input", {
                                            "field-input--error": errors.last_name,
                                        })}
                                        id="last_name"
                                        placeholder="Your Last Name"
                                        type="text"
                                        {...register("last_name", {
                                            required: true,
                                        })}
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
                                    {...register("email", {
                                        required: true,
                                        pattern: /^\S+@\S+$/i,
                                    })}
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
                                    {...register("phone_number", {
                                        required: true,
                                    })}
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
                                    {...register("message", {
                                        required: true,
                                    })}
                                />
                            </div>
                        </div>
                        <div className="my-10 flex flex-col items-center gap-6">
                            <button className="btn btn--primary w-full" type="submit">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </DefaultLayout>
    );
}

export const ContactComponent = () => {
    const onSubmit = async (_data: {
        first_name: string;
        last_name: string;
        email: string;
        phone_number: string;
        message: string;
    }) => {
        try {
            console.log(_data);
            // const result = await login(_data);
            // if (result.status === 200) {
            //     addToken(result.data.result);
            //     toast.success("Login successful");
            //     navigate("/");
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

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            message: "",
        },
    });

    return (
        <div className="flex justify-center">
            <div className="inline-block max-w-lg justify-center text-center">
                <div className="flex flex-col gap-2.5 text-center">
                    <h1>Contact Us</h1>
                </div>
                <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5">
                            <div className="field-wrapper">
                                <label className="field-label" htmlFor="first_name">
                                    First Name
                                </label>
                                <input
                                    className={classNames("field-input", {
                                        "field-input--error": errors.first_name,
                                    })}
                                    id="first_name"
                                    placeholder="Your First Name"
                                    type="text"
                                    {...register("first_name", {
                                        required: true,
                                    })}
                                />
                            </div>
                            <div className="field-wrapper">
                                <label className="field-label" htmlFor="last_name">
                                    Last Name
                                </label>
                                <input
                                    className={classNames("field-input", {
                                        "field-input--error": errors.last_name,
                                    })}
                                    id="last_name"
                                    placeholder="Your Last Name"
                                    type="text"
                                    {...register("last_name", {
                                        required: true,
                                    })}
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
                                {...register("email", {
                                    required: true,
                                    pattern: /^\S+@\S+$/i,
                                })}
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
                                {...register("phone_number", {
                                    required: true,
                                })}
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
                                {...register("message", {
                                    required: true,
                                })}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <button className="btn btn--primary w-full" type="submit">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
