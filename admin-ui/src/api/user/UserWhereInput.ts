import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  id?: StringFilter;
  nome?: StringFilter;
  sobrenome?: StringNullableFilter;
  username?: StringFilter;
};
