import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="atualizado" label="Atualizado em" />
        <DateField source="criado" label="Criado em" />
        <TextField label="ID" source="id" />
        <TextField label="Nome" source="nome" />
        <TextField label="Roles" source="roles" />
        <TextField label="Sobrenome" source="sobrenome" />
        <TextField label="Username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
