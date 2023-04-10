import styles from 'src/styles/Inscription.module.css'
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';


export default function Inscription() {

    const router = useRouter();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [avatar, setAvatar] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();

        //validation = true
        if ((password === confirmPassword) && (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))) {
            try {
                const response = await axios.post('/api/sign-up', {
                    username,
                    email,
                    password,
                    birthdate,
                    avatar
                });

                // ICI ON PEUT REDIRIGE LE USER SUR UNE PAGE DE CONFIRMATION D'INSCRIPTION, LE CONNECTER DIRECTEMENT CREER UN COOKIE, UNE CESION ETC... 
                console.log(`Success!: ${response.data} `);

                location.replace('/Connexion')

            } catch (error) {
                alert(`Une erreur est survenu`)
            }
        }
        // validation = echec 
        else {
            alert('Votre mot de passe ou votre email est invalide ')
        }

    }

    return <>
        <motion.div  initial='hidden' animate='visible' variants={{ hidden: { scale: .8, opacity: 0 }, visible: { scale: [1, .9, 1], opacity: 1, transition: { delay: 0.2 } } }} className={styles.loginsection}>

            <div className={styles.divcontainer}>
                <div className={styles.mainCard}>
                    <div className={styles.card}>
                        <h3 className={styles.h3}>Créez Votre Compte!</h3>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Nom d'utilisateur"
                            minLength="5"
                            maxLength="20"
                            required
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                        <input
                            className={styles.input}
                            type="email"
                            placeholder="Courriel"
                            required
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <input
                            className={styles.input}
                            type="password"
                            placeholder='Password'
                            required
                            value={password}
                            minLength={8}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <input
                            className={styles.input}
                            type="password"
                            placeholder='Confirm Password'
                            required
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                        <input
                            className={styles.input}
                            type="date"
                            placeholder='Date de naissance'
                            required
                            value={birthdate}
                            onChange={(event) => setBirthdate(event.target.value)}
                        />

                        
                        <div className={styles.card2}>
                            <h4 className={styles.h3}>Choisis une photo de profil</h4>
                        </div>

                        <div className={styles.avatarChoice}>

                            <label >

                                <input
                                    className={styles.radio}
                                    type="radio"
                                    name='avatar_choice'
                                    value='/profilePictures/profil1.jpg'
                                    onChange={(event) => setAvatar(event.target.value)}
                                />
                                <Image className={styles.images} src="/profilePictures/profil1.jpg" alt="choix de profil" width={100} height={100} />

                            </label>

                            <label >

                                <input
                                    className={styles.radio}
                                    type="radio"
                                    name='avatar_choice'
                                    value='/profilePictures/profil2.jpg'
                                    onChange={(event) => setAvatar(event.target.value)}
                                />
                                <Image src="/profilePictures/profil2.jpg" alt="choix de profil" width={100} height={100} />

                            </label>

                            <label >

                                <input
                                    className={styles.radio}
                                    type="radio"
                                    name='avatar_choice'
                                    value='/profilePictures/profil3.jpg'
                                    onChange={(event) => setAvatar(event.target.value)}
                                />
                                <Image src="/profilePictures/profil3.jpg" alt="choix de profil" width={100} height={100} />

                            </label>

                            <label >

                                <input
                                    className={styles.radio}
                                    type="radio"
                                    name='avatar_choice'
                                    value='/profilePictures/profil4.jpg'
                                    onChange={(event) => setAvatar(event.target.value)}
                                />
                                <Image src="/profilePictures/profil4.jpg" alt="choix de profil" width={100} height={100} />

                            </label>


                            <label >

                                <input
                                    className={styles.radio}
                                    type="radio"
                                    name='avatar_choice'
                                    value='/profilePictures/profil5.jpg'
                                    onChange={(event) => setAvatar(event.target.value)}
                                />
                                <Image src="/profilePictures/profil5.jpg" alt="choix de profil" width={100} height={100} />

                            </label>

                            <label >

                                <input
                                    className={styles.radio}
                                    type="radio"
                                    name='avatar_choice'
                                    value='/profilePictures/profil6.jpg'
                                    onChange={(event) => setAvatar(event.target.value)}
                                />
                                <Image src="/profilePictures/profil6.jpg" alt="choix de profil" width={100} height={100} />

                            </label>

                            <label >

                                <input
                                    className={styles.radio}
                                    type="radio"
                                    name='avatar_choice'
                                    value='/profilePictures/profil8.jpg'
                                    onChange={(event) => setAvatar(event.target.value)}
                                />
                                <Image src="/profilePictures/profil8.jpg" alt="choix de profil" width={100} height={100} />

                            </label>


                            <label >

                                <input
                                    className={styles.radio}
                                    type="radio"
                                    name='avatar_choice'
                                    value='/profilePictures/profil9.jpg'
                                    onChange={(event) => setAvatar(event.target.value)}
                                />
                                <Image src="/profilePictures/profil9.jpg" alt="choix de profil" width={100} height={100} />

                            </label>




                            <label >

                                <input
                                    className={styles.radio}
                                    type="radio"
                                    name='avatar_choice'
                                    value='/profilePictures/profil10.jpg'
                                    onChange={(event) => setAvatar(event.target.value)}
                                />
                                <Image src="/profilePictures/profil10.jpg" alt="choix de profil" width={100} height={100} />

                            </label>

                            <label >

                                <input
                                    className={styles.radio}
                                    type="radio"
                                    name='avatar_choice'
                                    value='/profilePictures/profil11.jpg'
                                    onChange={(event) => setAvatar(event.target.value)}
                                />
                                <Image src="/profilePictures/profil11.jpg" alt="choix de profil" width={100} height={100} />

                            </label>

                            <label >

                                <input
                                    className={styles.radio}
                                    type="radio"
                                    name='avatar_choice'
                                    value='/profilePictures/profil12.jpg'
                                    onChange={(event) => setAvatar(event.target.value)}
                                />
                                <Image src="/profilePictures/profil12.jpg" alt="choix de profil" width={100} height={100} />

                            </label>
                            <label >

                                <input
                                    className={styles.radio}
                                    type="radio"
                                    name='avatar_choice'
                                    value='/profilePictures/profil13.jpg'
                                    onChange={(event) => setAvatar(event.target.value)}
                                />
                                <Image src="/profilePictures/profil13.jpg" alt="choix de profil" width={100} height={100} />

                            </label>
                            
                            <motion.div whileHover={{ scale: [1, 0.99, 1.03], transition: { duration: .25 } }}>
                                <button className={styles.inscrirebutton} type='submit'>S'inscrire</button>
                            </motion.div>
                    
                        </div>
                    </form>
                    
                   
                    <div>
                        <button className={styles.retourbutton} onClick={() => router.push('/Connexion')} type='submit'>Retour</button>
                    </div>


                </div>
            </div>
                
        </motion.div>
    </>

}
