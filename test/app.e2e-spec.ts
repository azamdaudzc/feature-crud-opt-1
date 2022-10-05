import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing"
import { PrismaService } from "../src/prisma.service";
import * as pactum from "pactum";
import { AppModule } from "./../src/app.module";
import { CreateMakeDto } from "src/makes/dto/create-make.dto";
import { UpdateMakeDto } from "src/makes/dto/update-make.dto";
import { CreateYearDto } from "src/years/dto/create-year.dto";
import { UpdateYearDto } from "src/years/dto/update-year.dto";

describe('CRUD e2e Test', () => {

  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef =
      await Test.createTestingModule({
        imports: [AppModule],
      }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
    await app.listen(3333);
    prisma = app.get(PrismaService);
    await prisma.cleanDb();
    pactum.request.setBaseUrl('http://localhost:3333');
  });

  afterAll(() => {
    app.close();
  })

  describe('Makes', () => {
    describe('Get empty makes', () => {
      it('Should get makes', async () => {
        return await pactum.spec().get('/makes').expectStatus(200).expectBody([]);
      });
    });

    describe('Create make', () => {
      const dto: CreateMakeDto = {
        name: "Ford"
      };
      it('Should create make', async () => {
        return await pactum.spec().post('/makes').withBody(dto).expectStatus(201).stores('makeId', 'id');
      });
    });

    describe('Get makes list', () => {
      it('Should get list of all makes', async () => {
        return await pactum.spec().get('/makes').expectStatus(200).expectJsonLength(1);
      });
    });

    describe('Get make by ID', () => {
      it('Should get make by id', async () => {
        return await pactum.spec().get('/makes/{id}').withPathParams('id', '$S{makeId}').expectStatus(200).expectBodyContains('$S{makeId}');
      });
    });

    describe('Edit make by ID', () => {
      const dto: UpdateMakeDto = {
        name: "Honda"
      };
      it('Should edit make', async () => {
        return await pactum.spec().patch('/makes/{id}').withPathParams('id', '$S{makeId}').withJson(dto).expectStatus(200).expectBodyContains(dto.name);
      });
    });

    describe('Delete make by ID', () => {
      it('Should delete make', async () => {
        return await pactum.spec().delete('/makes/{id}').withPathParams('id', '$S{makeId}').expectStatus(200);
      });
      it('Should get empty make', async () => {
        return await pactum.spec().get('/makes').expectStatus(200).expectBody([]);
      });
    });

  });

  describe('Years', () => {
    describe('Get empty years', () => {
      it('Should get years', async () => {
        return await pactum.spec().get('/years').expectStatus(200).expectBody([]);
      });
    });

    describe('Create year', () => {
      const dto: CreateYearDto = {
        year: 2022
      };
      it('Should create year', async () => {
        return await pactum.spec().post('/years').withBody(dto).expectStatus(201).stores('yearId', 'id');
      });
    });

    describe('Get years list', () => {
      it('Should get list of all years', async () => {
        return await pactum.spec().get('/years').expectStatus(200).expectJsonLength(1);
      });
    });

    describe('Get years by ID', () => {
      it('Should get year by id', async () => {
        return await pactum.spec().get('/years/{id}').withPathParams('id', '$S{yearId}').expectStatus(200).expectBodyContains('$S{yearId}');
      });
    });

    describe('Edit year by ID', () => {
      const dto: UpdateYearDto = {
        year: 2021
      };
      it('Should edit year', async () => {
        return await pactum.spec().patch('/years/{id}').withPathParams('id', '$S{yearId}').withJson(dto).expectStatus(200).expectBodyContains(dto.year);
      });
    });

    describe('Delete year by ID', () => {
      it('Should delete year', async () => {
        return await pactum.spec().delete('/years/{id}').withPathParams('id', '$S{yearId}').expectStatus(200);
      });
      it('Should get empty years', async () => {
        return await pactum.spec().get('/years').expectStatus(200).expectBody([]);
      });
    });
  });

  describe('Models', () => {
    describe('Get empty models', () => {
      it('Should get models', async () => {
        return await pactum.spec().get('/models').expectStatus(200).expectBody([]);
      });
    });

    describe('Create model', () => {
      it('Should create make', async () => {
        return await pactum.spec().post('/makes').withJson({ 'name': 'Honda' }).expectStatus(201).stores('makeId', 'id');
      });
      it('Should create year', async () => {
        return await pactum.spec().post('/years').withJson({ 'year': 2004 }).expectStatus(201).stores('yearId', 'id');
      });
      it('Should create model', async () => {
        return await pactum.spec().post('/models').withJson({ 'name': 'Civic', 'yearId': '$S{yearId}', 'makeId': '$S{makeId}' }).expectStatus(201).stores('modelId', 'id');
      });
    });

    describe('Get models list', () => {
      it('Should get list of all models', async () => {
        return await pactum.spec().get('/models').expectStatus(200).expectJsonLength(1);
      });
    });

    describe('Get models by ID', () => {
      it('Should get year by id', async () => {
        return await pactum.spec().get('/models/{id}').withPathParams('id', '$S{modelId}').expectStatus(200).expectBodyContains('$S{modelId}');
      });
    });

    describe('Edit model by ID', () => {
      it('Should edit year', async () => {
        return await pactum.spec().patch('/models/{id}').withPathParams('id', '$S{modelId}').withJson({ 'name': 'Accord' }).expectStatus(200).expectBodyContains('Accord');
      });
    });

    describe('Delete model by ID', () => {
      it('Should delete model', async () => {
        return await pactum.spec().delete('/models/{id}').withPathParams('id', '$S{modelId}').expectStatus(200);
      });
      it('Should get empty models', async () => {
        return await pactum.spec().get('/models').expectStatus(200).expectBody([]);
      });
    });
  });
});