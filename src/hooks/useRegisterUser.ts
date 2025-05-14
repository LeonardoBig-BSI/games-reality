import { useRef } from "react";
import { toast } from "react-toastify";
import validator from 'validator';

export const useRegisterUser = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLInputElement>(null);
    const countryRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const postalCodeRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    function handleValidationFields() {
        const enteredName = nameRef.current?.value;
        const enteredDate = dateRef.current?.value;
        const enteredEmail = emailRef.current?.value;
        const enteredCity = cityRef.current?.value;
        const enteredCountry = countryRef.current?.value;
        const enteredAddress = addressRef.current?.value;
        const enteredPostalCode = postalCodeRef.current?.value;
        const enteredPassword = passwordRef.current?.value;

        if (!enteredName) {
            toast.error("Bloqueado: campo nome é obrigatório.");
            return false;
        }

        if (!enteredDate) {
            toast.error("Bloqueado: campo data de nascimento é obrigatório.");
            return false;
        }

        if (!enteredEmail) {
            toast.error("Bloqueado: campo e-mail é obrigatório.");
            return false;
        }

        if (!validator.isEmail(enteredEmail)) {
            toast.error("Bloqueado: e-mail inválido.");
            return false;
        }

        if (!enteredCity) {
            toast.error("Bloqueado: campo cidade é obrigatório.");
            return false;
        }

        if (!enteredCountry) {
            toast.error("Bloqueado: campo país é obrigatório.");
            return false;
        }

        if (!enteredAddress) {
            toast.error("Bloqueado: campo endereço é obrigatório.");
            return false;
        }

        if (!enteredPostalCode) {
            toast.error("Bloqueado: campo CEP é obrigatório.");
            return false;
        }

        if (!enteredPassword) {
            toast.error("Bloqueado: informe sua senha.");
            return false;
        }

        if (enteredPassword.length < 8) {
            toast.error("Bloqueado: senha deve possuir, no mínimo, até 8 caracteres.");
            return false;
        }

        return true;
    }

    return {
        nameRef,
        dateRef,
        emailRef,
        cityRef,
        countryRef,
        addressRef,
        postalCodeRef,
        passwordRef,
        handleValidationFields,
    }
}