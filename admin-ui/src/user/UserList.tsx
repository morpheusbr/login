import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="atualizado" label="Atualizado em" />
        <DateField source="criado" label="Criado em" />
        <TextField label="ID" source="id" />
        <TextField label="Nome" source="nome" />
        <TextField label="Roles" source="roles" />
        <TextField label="Sobrenome" source="sobrenome" />
        <TextField label="Username" source="username" />
      </Datagrid>
    </List>
  );
};
