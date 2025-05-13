import { useRef } from "react";
import { toast } from "react-toastify";
import validator from 'validator';

export const useLogin = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    function handleValidationFields() {
        const enteredEmail = emailRef.current?.value;
        const enteredPassword = passwordRef.current?.value;

        if (!enteredEmail) {
            toast.error("Bloqueado: campo e-mail obrigatório.");
            return false;
        }

        if(!validator.isEmail(enteredEmail)) {
            toast.error("Bloqueado: e-mail inválido.");
            return false;
        }

        if (!enteredPassword) {
            toast.error("Bloqueado: informe sua senha.");
            return false;
        }

        if(enteredPassword.length < 8) {
            toast.error("Bloqueado: senha deve possuir, no mínimo, até 8 caracteres.");
            return false;
        }
        

        return true;
    }

    return {
        emailRef,
        passwordRef,
        handleValidationFields
    }
}