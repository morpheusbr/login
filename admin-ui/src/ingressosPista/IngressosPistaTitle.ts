import { IngressosPista as TIngressosPista } from "../api/ingressosPista/IngressosPista";

export const INGRESSOSPISTA_TITLE_FIELD = "comprador";

export const IngressosPistaTitle = (record: TIngressosPista): string => {
  return record.comprador || record.id;
};
