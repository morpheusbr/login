import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  BooleanField,
  TextField,
} from "react-admin";

export const IngressosPistaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="atualizado" label="Atualizado em" />
        <BooleanField label="Checkin" source="checkin" />
        <TextField label="comprador" source="comprador" />
        <DateField source="criado" label="Criado em" />
        <TextField label="ID" source="id" />
        <BooleanField label="Status" source="status" />
        <TextField label="valor" source="Valor" />
      </SimpleShowLayout>
    </Show>
  );
};
