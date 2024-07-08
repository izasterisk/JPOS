// hooks
import { useState, useEffect, MouseEvent } from "react";

// utils
import classNames from "classnames";
import { FieldError, RefCallBack } from "react-hook-form";

import EyeSlashFilledIcon from "./icons/EyeSlashFilledIcon";
import EyeFilledIcon from "./icons/EyeFilledIcon";

interface PasswordInputProps {
    innerRef: RefCallBack;
    id: string;
    label?: string;
    isInvalid: FieldError | undefined;
    value?: string;
    placeholder?: string;
    error?: FieldError | undefined;
    onChange?: () => void;
}

const PasswordInput = ({ innerRef, id, label = "Password", isInvalid, ...props }: PasswordInputProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsPasswordVisible(!isPasswordVisible);
    };

    useEffect(() => {
        props.value === "" && setIsPasswordVisible(false);
    }, [props.value]);

    return (
        <div className="field-wrapper">
            <label className="field-label" htmlFor={id}>
                {label}
            </label>
            <div className="relative">
                <input
                    ref={innerRef}
                    className={classNames("field-input !pr-10", {
                        "field-input--error": isInvalid,
                    })}
                    id={id}
                    type={isPasswordVisible ? "text" : "password"}
                    {...props}
                />
                <button
                    className="mb4 fixed right-3 translate-y-1/2 focus:outline-none"
                    type="button"
                    onClick={togglePasswordVisibility}
                >
                    {isPasswordVisible ? (
                        <EyeSlashFilledIcon className="pointer-events-none text-2xl text-default-400" />
                    ) : (
                        <EyeFilledIcon className="pointer-events-none text-2xl text-default-400" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default PasswordInput;
