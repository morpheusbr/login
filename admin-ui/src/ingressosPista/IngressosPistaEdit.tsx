import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  BooleanInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const IngressosPistaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Atualizado em" source="atualizado" disabled />
        <BooleanInput label="Checkin" source="checkin" />
        <TextInput label="comprador" source="comprador" />
        <DateTimeInput label="Criado em" source="criado" disabled />
        <BooleanInput label="Status" source="status" />
        <NumberInput step={1} label="valor" source="Valor" />
      </SimpleForm>
    </Edit>
  );
};
