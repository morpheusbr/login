import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
