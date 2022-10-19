import { Module } from "@nestjs/common";
import { IngressosPistaModuleBase } from "./base/ingressosPista.module.base";
import { IngressosPistaService } from "./ingressosPista.service";
import { IngressosPistaController } from "./ingressosPista.controller";
import { IngressosPistaResolver } from "./ingressosPista.resolver";

@Module({
  imports: [IngressosPistaModuleBase],
  controllers: [IngressosPistaController],
  providers: [IngressosPistaService, IngressosPistaResolver],
  exports: [IngressosPistaService],
})
export class IngressosPistaModule {}
