import { PrismaClient } from '@prisma/client';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
const prisma = new PrismaClient();


export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;

      const user = await prisma.user.findUnique({ where: { email: email } });
      if (!user) {
        return res.status(401).json({ error: 'Email invalide' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Mot de passe invalide.' });
      }

      const playload = { id: user.id, email: user.email, name: user.name };
      const token = jwt.sign(playload, process.env.JWT_SECRET);

      console.log(`${user.name} connecté avec succès!`);

      // Mettre le JWT dans un cookie http seulement
      res.setHeader('Set-Cookie', serialize('tokenjwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60, // 1 hour
        path: '/',
      }));

      res.status(200).json({
        sucess: true,
        user: {
          id: playload.id,
          nom: playload.name
        },
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Impossible de se connecter.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Méthode ${req.method} non autorisée`);
  }
}
