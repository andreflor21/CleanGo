import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import Input from "../Input";
import { ContainerForm } from "./styles";
import Button from "../Button";
import { useClients } from "../../providers/Clients";
import { ClientData } from "../../types/clientData";

function FormRegister() {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório"),
    cpf: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
  });
  interface FormData {
    name: string;
    email: string;
    cpf: string;
    password: string;
    passwordConfirm: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [error, setError] = useState(false);
  const history = useHistory();
  const { newClient } = useClients();

  const onSubmit = ({ cpf, email, name, password }: FormData) => {
    const data: ClientData = { cpf, email, name, password };
    newClient(data, setError, history);
  };

  return (
    <ContainerForm>
      <h2>Faça seu cadastro</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          inputType="text"
          label="Nome"
          {...register("name")}
          placeholder="Digite seu nome"
          error={!!errors.name}
          errorMessage={errors.name?.message}
        />

        <Input
          inputType="email"
          label="Email"
          {...register("email")}
          placeholder="Digite seu email"
          error={!!errors.email}
          errorMessage={errors.email?.message}
        />
        <Input
          inputType="text"
          label="CPF"
          {...register("cpf")}
          placeholder="Digite seu CPF"
          data-mask="000.000.000-00"
          error={!!errors.cpf}
          errorMessage={errors.cpf?.message}
        />

        <Input
          inputType="password"
          label="Senha"
          {...register("password")}
          placeholder="Digite sua senha"
          error={!!errors.password}
          errorMessage={errors.password?.message}
        />
        <Input
          inputType="password"
          label="Confirmar senha"
          placeholder="Confirme sua senha"
          {...register("passwordConfirm")}
          error={!!errors.passwordConfirm}
          errorMessage={errors.passwordConfirm?.message}
        />

        <p>
          Já possui conta?
          <Link id="link" to="/login">
            {" "}
            Clique aqui
          </Link>{" "}
          para entrar.
        </p>
        <div className="containerButton">
          <Button type="submit" whiteSchema={false}>
            CADASTRAR
          </Button>
        </div>
      </form>
    </ContainerForm>
  );
}
export default FormRegister;
