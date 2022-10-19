import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  atualizado?: Date;
  criado?: Date;
  nome?: string;
  password?: string;
  roles?: InputJsonValue;
  sobrenome?: string | null;
  username?: string;
};
