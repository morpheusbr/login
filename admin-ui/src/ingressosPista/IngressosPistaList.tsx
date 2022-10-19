import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const IngressosPistaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ingressos_pistas"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="atualizado" label="Atualizado em" />
        <BooleanField label="Checkin" source="checkin" />
        <TextField label="comprador" source="comprador" />
        <DateField source="criado" label="Criado em" />
        <TextField label="ID" source="id" />
        <BooleanField label="Status" source="status" />
        <TextField label="valor" source="Valor" />
      </Datagrid>
    </List>
  );
};
