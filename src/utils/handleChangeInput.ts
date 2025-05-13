import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const handleChangeInput = (e: ChangeEvent<HTMLInputElement>,
    setState: Dispatch<SetStateAction<string>>
) => {
    e.preventDefault();
    setState(e.target.value);
}