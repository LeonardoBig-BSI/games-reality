import { ChangeEvent, FormEvent, useState } from "react"
import Input from "../../components/Input/Input"
import { handleChangeInput } from "../../utils/handleChangeInput";
import Button from "../../components/Button/Button";
import { useRegisterUser } from "../../hooks/useRegisterUser";

const RegisterUser = () => {
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { nameRef,
    dateRef,
    emailRef,
    cityRef,
    countryRef,
    addressRef,
    postalCodeRef,
    passwordRef,
    handleValidationFields } = useRegisterUser();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!handleValidationFields()) return;
  }

  return (
    <div className="w-full h-screen bg-cover bg-no-repeat bg-center relative p-10"
      style={{ backgroundImage: "url('image-registerUser.jpg')" }}
    >

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-start items-start gap-2">
          {/* Nome */}
          <label htmlFor="name" className="text-zinc-100 font-bold text-sm sm:text-sm md:text-base lg:text-base">
            Nome:
          </label>

          <Input
            type="text"
            name="name"
            id="name"
            className="sm:px-4 sm:py-1 md:px-4 md:py-1 text-start border border-zinc-400 bg-zinc-100 rounded focus:outline"
            placeholder="Nome"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInput(e, setName)}
            value={name}
            ref={nameRef}
          />

          {/* Data de Nascimento */}
          <label htmlFor="date" className="mt-8 text-zinc-100 font-bold text-sm sm:text-sm md:text-base lg:text-base">
            Data de Nascimento:
          </label>

          <Input
            type="text"
            name="date"
            id="date"
            className="sm:px-4 sm:py-1 md:px-4 md:py-1 text-start border border-zinc-400 bg-zinc-100 rounded focus:outline"
            placeholder="Data"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInput(e, setDate)}
            value={date}
            ref={dateRef}
          />

          {/* E-mail */}
          <label htmlFor="email" className="mt-8 text-zinc-100 font-bold text-sm sm:text-sm md:text-base lg:text-base">
            E-mail:
          </label>

          <Input
            type="text"
            name="email"
            id="email"
            className="sm:px-4 sm:py-1 md:px-4 md:py-1 text-start border border-zinc-400 bg-zinc-100 rounded focus:outline"
            placeholder="E-mail"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInput(e, setEmail)}
            value={email}
            ref={emailRef}
          />

          {/* Cidade */}
          <label htmlFor="city" className="mt-8 text-zinc-100 font-bold text-sm sm:text-sm md:text-base lg:text-base">
            Cidade:
          </label>

          <Input
            type="text"
            name="city"
            id="city"
            className="sm:px-4 sm:py-1 md:px-4 md:py-1 text-start border border-zinc-400 bg-zinc-100 rounded focus:outline"
            placeholder="Cidade"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInput(e, setCity)}
            value={city}
            ref={cityRef}
          />

          {/* País */}
          <label htmlFor="country" className="mt-8 text-zinc-100 font-bold text-sm sm:text-sm md:text-base lg:text-base">
            País:
          </label>
          
          <Input
            type="text"
            name="country"
            id="country"
            className="sm:px-4 sm:py-1 md:px-4 md:py-1 text-start border border-zinc-400 bg-zinc-100 rounded focus:outline"
            placeholder="País"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInput(e, setCountry)}
            value={country}
            ref={countryRef}
          />

          {/* Endereco */}
          <label htmlFor="address" className="mt-8 text-zinc-100 font-bold text-sm sm:text-sm md:text-base lg:text-base">
            Endereço:
          </label>
          
          <Input
            type="text"
            name="address"
            id="address"
            className="sm:px-4 sm:py-1 md:px-4 md:py-1 text-start border border-zinc-400 bg-zinc-100 rounded focus:outline"
            placeholder="Endereço"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInput(e, setAddress)}
            value={address}
            ref={addressRef}
          />

          {/* Código Postal */}
          <label htmlFor="postalCode" className="mt-8 text-zinc-100 font-bold text-sm sm:text-sm md:text-base lg:text-base">
            CEP:
          </label>
          
          <Input
            type="text"
            name="postalCode"
            id="postalCode"
            className="sm:px-4 sm:py-1 md:px-4 md:py-1 text-start border border-zinc-400 bg-zinc-100 rounded focus:outline"
            placeholder="CEP"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInput(e, setPostalCode)}
            value={postalCode}
            ref={postalCodeRef}
          />

          <Button
            type="submit"
            className="mt-2 ml-4 px-4 py-1 sm:px-3 sm:py-1 md:px-8 md:py-2 border border-colorButton bg-colorButton text-white rounded hover:bg-colorButtonHover hover:text-white duration-300"
          >
            CADASTRAR
          </Button>
        </div>
      </form>
    </div>
  )
}

export default RegisterUser