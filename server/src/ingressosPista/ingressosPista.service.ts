import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { IngressosPistaServiceBase } from "./base/ingressosPista.service.base";

@Injectable()
export class IngressosPistaService extends IngressosPistaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
