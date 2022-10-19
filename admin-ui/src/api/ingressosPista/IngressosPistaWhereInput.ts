import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type IngressosPistaWhereInput = {
  checkin?: BooleanNullableFilter;
  comprador?: StringFilter;
  id?: StringFilter;
  status?: BooleanNullableFilter;
  Valor?: IntFilter;
};
