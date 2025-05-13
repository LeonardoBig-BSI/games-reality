import { ChangeEvent, forwardRef } from "react";

interface InputProps {
    type: string;
    name: string;
    id: string;
    className: string;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ type, name, id, className, placeholder, onChange, value }, ref) => {
    return (
        <input
            type={type}
            name={name}
            id={id}
            className={className}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            ref={ref}
        />
    )
})

export default Input