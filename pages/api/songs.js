import { PrismaClient } from '@prisma/client';

async function songs(_) {
    const prisma = new PrismaClient();
    return prisma.song.findMany({
        include: { artist: true }
    });
}


export default async (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    const songList = await songs({})
    res.end(JSON.stringify(songList))
}

export { songs }