import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Atualizado em" source="atualizado" disabled />
        <DateTimeInput label="Criado em" source="criado" disabled />
        <TextInput label="Nome" source="nome" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Sobrenome" source="sobrenome" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
