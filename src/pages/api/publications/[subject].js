// pages/api/publications/[subject].js

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const subject = req.query.subject;

  if (req.method === 'GET') {
    try {
      const data = await prisma.post.findMany({
        where: {
          subject: {
            id: subject
          }
        },
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
      const posts = data;
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Impossible de retourner les publications' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
