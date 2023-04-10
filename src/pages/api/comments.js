import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {

    // ...

    // POST REQUESTS
    case 'POST':
      try {
        const { commentValue, idUser, postId } = req.body;
        await prisma.comment.create({
          data: {
            content: commentValue,
            userId: idUser,
            postId: postId
          },
        });

        res.status(201).json({ message: 'New comment!:' + commentValue + ' on post:' + postId+ 'userId:'+idUser});

      } catch (error) {
        res.status(500).json({ error: 'Failed to create comment.' });
      }
      break;

  }
}
