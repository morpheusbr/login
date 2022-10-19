import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  BooleanInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const IngressosPistaCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Atualizado em" source="atualizado" disabled />
        <BooleanInput label="Checkin" source="checkin" />
        <TextInput label="comprador" source="comprador" />
        <DateTimeInput label="Criado em" source="criado" disabled />
        <BooleanInput label="Status" source="status" />
        <NumberInput step={1} label="valor" source="Valor" />
      </SimpleForm>
    </Create>
  );
};
