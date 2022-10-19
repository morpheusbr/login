import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { IngressosPistaResolverBase } from "./base/ingressosPista.resolver.base";
import { IngressosPista } from "./base/IngressosPista";
import { IngressosPistaService } from "./ingressosPista.service";

@graphql.Resolver(() => IngressosPista)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class IngressosPistaResolver extends IngressosPistaResolverBase {
  constructor(
    protected readonly service: IngressosPistaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
