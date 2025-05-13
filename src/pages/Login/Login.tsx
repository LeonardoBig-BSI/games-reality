import { ChangeEvent, FormEvent, useState } from "react"
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { handleChangeInput } from "../../utils/handleChangeInput";
import { useLogin } from "../../hooks/useLogin";
import { toast } from "react-toastify";
import { useUserContext } from "../../hooks/useUserContext";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { emailRef, passwordRef, handleValidationFields } = useLogin();
  const { users } = useUserContext();

  const clearFields = () => {
    setEmail("");
    setPassword("");
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!handleValidationFields()) return;

    const foundUser = users.find(user => user.email === email && user.password === password);

    if(foundUser) {
      toast.success(`Olá, ${foundUser.name}, seja bem-vindo!`);
      clearFields();
    } else {
      toast.error('Usuário não encontrado, por favor realize o cadastro.');
    }
  }

  return (
    <div className="w-full h-screen bg-cover bg-no-repeat bg-center relative p-10"
      style={{ backgroundImage: "url('image-login.jpg')" }}
    >
      <h1 className="mt-40 text-center text-3xl text-zinc-100 font-bold">
        Log In
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center gap-4">
          <Input
            type="text"
            name="email"
            id="email"
            className="mt-4 px-8 py-1 text-center border border-zinc-400 bg-zinc-100 rounded focus:outline"
            placeholder="E-mail"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInput(e, setEmail)}
            value={email}
            ref={emailRef}
          />

          <Input
            type="password"
            name="password"
            id="password"
            className="mt-4 px-8 py-1 text-center border border-zinc-400 bg-zinc-100 rounded focus:outline"
            placeholder="Senha"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInput(e, setPassword)}
            value={password}
            ref={passwordRef}
          />

          <Button
            type="submit"
            className="mt-2 ml-4 px-8 py-2 border border-colorButton bg-colorButton text-white rounded hover:bg-colorButtonHover hover:text-white duration-300"
          >
            ENTRAR
          </Button>
        </div>
      </form>

    </div>
  )
}

export default Login