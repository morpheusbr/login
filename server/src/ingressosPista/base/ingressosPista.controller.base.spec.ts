import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { IngressosPistaController } from "../ingressosPista.controller";
import { IngressosPistaService } from "../ingressosPista.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  atualizado: new Date(),
  checkin: "true",
  comprador: "exampleComprador",
  criado: new Date(),
  id: "exampleId",
  status: "true",
  Valor: 42,
};
const CREATE_RESULT = {
  atualizado: new Date(),
  checkin: "true",
  comprador: "exampleComprador",
  criado: new Date(),
  id: "exampleId",
  status: "true",
  Valor: 42,
};
const FIND_MANY_RESULT = [
  {
    atualizado: new Date(),
    checkin: "true",
    comprador: "exampleComprador",
    criado: new Date(),
    id: "exampleId",
    status: "true",
    Valor: 42,
  },
];
const FIND_ONE_RESULT = {
  atualizado: new Date(),
  checkin: "true",
  comprador: "exampleComprador",
  criado: new Date(),
  id: "exampleId",
  status: "true",
  Valor: 42,
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("IngressosPista", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: IngressosPistaService,
          useValue: service,
        },
      ],
      controllers: [IngressosPistaController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /ingressosPistas", async () => {
    await request(app.getHttpServer())
      .post("/ingressosPistas")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        atualizado: CREATE_RESULT.atualizado.toISOString(),
        criado: CREATE_RESULT.criado.toISOString(),
      });
  });

  test("GET /ingressosPistas", async () => {
    await request(app.getHttpServer())
      .get("/ingressosPistas")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          atualizado: FIND_MANY_RESULT[0].atualizado.toISOString(),
          criado: FIND_MANY_RESULT[0].criado.toISOString(),
        },
      ]);
  });

  test("GET /ingressosPistas/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ingressosPistas"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /ingressosPistas/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ingressosPistas"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        atualizado: FIND_ONE_RESULT.atualizado.toISOString(),
        criado: FIND_ONE_RESULT.criado.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
