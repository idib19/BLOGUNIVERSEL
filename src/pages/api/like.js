import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
        try {
          const {postId} = req.body;
          await prisma.post.update({
              where: { id: postId },
              data: { likes: { increment : 1 } }
            })
          res.status(200).json({ success: true });
      
        } catch (error) {
          res.status(500).json({ error: 'Failed to like the post '});
        }
        break;

    case 'PUT':
        try {
          const {postId} = req.body;
          await prisma.post.update({
              where: { id: postId },
              data: { likes: { decrement : 1 } }
            })
          res.status(200).json({ success: true });
      
        } catch (error) {
          res.status(500).json({ error: 'Failed to like the post '});
        }
        break;

  }
}
