import { PrismaClient } from '@prisma/client';

async function song({ id }) {
    const prisma = new PrismaClient();
    return  prisma.song.findOne({
        include: { artist: true },
        where: {
            id: Number(id)
        }
    });
}

export default async (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    const songDetail = await song(req.query)
    res.end(JSON.stringify(songDetail))
}

export { song }
