/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { IngressosPistaService } from "../ingressosPista.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { IngressosPistaCreateInput } from "./IngressosPistaCreateInput";
import { IngressosPistaWhereInput } from "./IngressosPistaWhereInput";
import { IngressosPistaWhereUniqueInput } from "./IngressosPistaWhereUniqueInput";
import { IngressosPistaFindManyArgs } from "./IngressosPistaFindManyArgs";
import { IngressosPistaUpdateInput } from "./IngressosPistaUpdateInput";
import { IngressosPista } from "./IngressosPista";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class IngressosPistaControllerBase {
  constructor(
    protected readonly service: IngressosPistaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "IngressosPista",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: IngressosPista })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: IngressosPistaCreateInput
  ): Promise<IngressosPista> {
    return await this.service.create({
      data: data,
      select: {
        atualizado: true,
        checkin: true,
        comprador: true,
        criado: true,
        id: true,
        status: true,
        Valor: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "IngressosPista",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [IngressosPista] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(IngressosPistaFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<IngressosPista[]> {
    const args = plainToClass(IngressosPistaFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        atualizado: true,
        checkin: true,
        comprador: true,
        criado: true,
        id: true,
        status: true,
        Valor: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "IngressosPista",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: IngressosPista })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: IngressosPistaWhereUniqueInput
  ): Promise<IngressosPista | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        atualizado: true,
        checkin: true,
        comprador: true,
        criado: true,
        id: true,
        status: true,
        Valor: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "IngressosPista",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: IngressosPista })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: IngressosPistaWhereUniqueInput,
    @common.Body() data: IngressosPistaUpdateInput
  ): Promise<IngressosPista | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          atualizado: true,
          checkin: true,
          comprador: true,
          criado: true,
          id: true,
          status: true,
          Valor: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "IngressosPista",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: IngressosPista })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: IngressosPistaWhereUniqueInput
  ): Promise<IngressosPista | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          atualizado: true,
          checkin: true,
          comprador: true,
          criado: true,
          id: true,
          status: true,
          Valor: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
