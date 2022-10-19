import { JsonValue } from "type-fest";

export type User = {
  atualizado: Date;
  criado: Date;
  id: string;
  nome: string;
  roles: JsonValue;
  sobrenome: string | null;
  username: string;
};
