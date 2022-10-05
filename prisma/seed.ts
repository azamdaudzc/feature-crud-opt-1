import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.make.deleteMany({});
    await prisma.year.deleteMany({});
    await prisma.model.deleteMany({});

    const createMakes = await prisma.make.createMany({
        data: [
            { name: "Honda" },
            { name: "Toyota" },
            { name: "Suzuki" },
            { name: "Chevorlet" },
            { name: "Ford" },
            { name: "Tesla" },
            { name: "Nissan" },
            { name: "BMW" },
            { name: "Mercedes" },
        ]
    });

    const createYears = await prisma.year.createMany({
        data: [
            { year: 2010 },
            { year: 2011 },
            { year: 2012 },
            { year: 2013 },
            { year: 2014 },
            { year: 2015 },
            { year: 2016 },
            { year: 2017 },
            { year: 2018 },
            { year: 2019 },
            { year: 2020 },
            { year: 2021 },
            { year: 2022 },
        ]
    });

    const createModels = await prisma.model.createMany({
        data: [
            {
                name: "Civic",
                yearId: 1,
                makeId: 1
            },
            {
                name: "Accord",
                yearId: 4,
                makeId: 1
            },
            {
                name: "City",
                yearId: 7,
                makeId: 1
            },
            {
                name: "Corolla",
                yearId: 3,
                makeId: 2
            },
            {
                name: "Hilux",
                yearId: 8,
                makeId: 2
            },
            {
                name: "Alto",
                yearId: 8,
                makeId: 3
            },
            {
                name: "Swift",
                yearId: 10,
                makeId: 3
            },
            {
                name: "Corvette",
                yearId: 1,
                makeId: 4
            },
            {
                name: "F150 Raptor",
                yearId: 11,
                makeId: 5
            },
            {
                name: "Model S",
                yearId: 11,
                makeId: 6
            },
            {
                name: "Maxima",
                yearId: 5,
                makeId: 7
            },
            {
                name: "M5",
                yearId: 12,
                makeId: 8
            },
            {
                name: "S200h",
                yearId: 8,
                makeId: 9
            },
        ]
    })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });