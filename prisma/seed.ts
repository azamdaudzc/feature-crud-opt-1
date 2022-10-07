import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.make.deleteMany({});
    await prisma.year.deleteMany({});
    await prisma.model.deleteMany({});

    await prisma.make.createMany({
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

    await prisma.year.createMany({
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

    await prisma.model.create({
        data:
        {
            name: "Civic",
            years: {
                connect: [{ id: 1 }, { id: 2 }]
            },
            makeId: 1
        }
    });
    await prisma.model.create({
        data:
        {
            name: "Accord",
            years: {
                connect: [{ id: 3 }, { id: 10 }, { id: 6 }]
            },
            makeId: 1
        }
    });
    await prisma.model.create({
        data:
        {
            name: "City",
            years: {
                connect: [{ id: 5 }, { id: 7 }]
            },
            makeId: 1
        }
    });

    await prisma.model.create({
        data:
        {
            name: "Corolla",
            years: {
                connect: [{ id: 9 }, { id: 1 }]
            },
            makeId: 2
        }
    })
    await prisma.model.create({
        data:
        {
            name: "Hilux",
            years: {
                connect: [{ id: 4 }, { id: 2 }]
            },
            makeId: 2
        }
    });

    await prisma.model.create({
        data:
        {
            name: "Alto",
            years: {
                connect: [{ id: 2 }]
            },
            makeId: 3
        }
    })
    await prisma.model.create({
        data:
        {
            name: "Swift",
            years: {
                connect: [{ id: 10 }, { id: 2 }]
            },
            makeId: 3
        }
    })
    await prisma.model.create({
        data:
        {
            name: "Corvette",
            years: {
                connect: [{ id: 3 }]
            },
            makeId: 4
        }
    });
    await prisma.model.create({
        data:
        {
            name: "F150 Raptor",
            years: {
                connect: [{ id: 11 }, { id: 2 }]
            },
            makeId: 5
        }
    })
    await prisma.model.create({
        data:
        {
            name: "Model S",
            years: {
                connect: [{ id: 11 }, { id: 10 }]
            },
            makeId: 6
        }
    })
    await prisma.model.create({
        data:
        {
            name: "Maxima",
            years: {
                connect: [{ id: 8 }, { id: 9 }]
            },
            makeId: 7
        }
    })
    await prisma.model.create({
        data:
        {
            name: "M5",
            years: {
                connect: [{ id: 12 }, { id: 2 }]
            },
            makeId: 8
        }
    })
    await prisma.model.create({
        data:
        {
            name: "S200h",
            years: {
                connect: [{ id: 1 }, { id: 2 }]
            },
            makeId: 9
        }
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