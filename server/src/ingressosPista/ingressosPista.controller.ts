import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IngressosPistaService } from "./ingressosPista.service";
import { IngressosPistaControllerBase } from "./base/ingressosPista.controller.base";

@swagger.ApiTags("ingressosPistas")
@common.Controller("ingressosPistas")
export class IngressosPistaController extends IngressosPistaControllerBase {
  constructor(
    protected readonly service: IngressosPistaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
