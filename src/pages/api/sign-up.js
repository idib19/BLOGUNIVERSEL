import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req, res) {

    if (req.method === 'POST') {
        try {
            const { username, email, password, birthdate, avatar } = req.body;
            const hashPassword = await bcrypt.hash(password,10);

            const newUser = await prisma.user.create({
                data: {
                    name: username,
                    email: email,
                    password: hashPassword,
                    dateOfBirth: new Date(birthdate),
                    avatar : avatar
                },
            });
            console.log(`Le compte de ${ newUser.name } a été créé avec succès!`);
            res.status(201).json({ message: 'Compte créé avec succès!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Impossible de créer un nouveau compte utilisateur.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Méthode ${ req.method } non autorisée`);
    }
}