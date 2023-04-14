import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {

  switch (req.method) {

    //GET REQUESTS
    case 'GET':
      try {
        const data = await prisma.post.findMany({
          include: {
            user: {
              select: {
                name: true,
                avatar: true
              }
            },
            subject: {
              select: {
                name: true
              }
            },
            comments: {
              select: {
                content: true,
                user: {
                  select: {
                    name: true,
                    avatar: true
                  }
                }
              }
            }
          }
        });
        // Ici on reverse les donnees dans le tableau pour les derniers posts soient affichees en premier 
        const posts = data.reverse();

        res.status(200).json(posts);
      } catch (error) {
        res.status(500).json({ error: 'Impossible de retourner les publications' });
      }
      break;


    //POST REQUESTS
    case 'POST':
      try {
        const { title, content, idUser, subjectId } = req.body;
        await prisma.post.create({
          data: {
            title,
            content,
            userId: idUser,
            subjectId: subjectId
          },
        });

        res.status(201).json({ message: 'New Post!' });

      } catch (error) {
        res.status(500).json({ error: 'Echec creation post.' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}