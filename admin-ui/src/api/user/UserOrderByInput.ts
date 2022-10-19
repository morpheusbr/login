import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  atualizado?: SortOrder;
  criado?: SortOrder;
  id?: SortOrder;
  nome?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  sobrenome?: SortOrder;
  username?: SortOrder;
};
