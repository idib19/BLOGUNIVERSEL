import { useState } from 'react';
import axios from 'axios';
import styles from 'src/styles/Connexion.module.css';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';

export default function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const response = await axios.post('/api/sign-in', {
        email,
        password
      });
      // SI JWT RECUE!
      // const data = response.data.tokenjwt
      // const decodeddata = jwt.decode(data);
      // console.log(decodeddata);

      const data = response.data
      console.log(`${data.user.nom} connecté avec succès!`)

      router.push('/');

    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage('Erreur lors de la connexion');
      }
    }
  };

  return (
    <>
    <div className={styles.rootcontainer}>
      <motion.div initial='hidden' animate='visible' variants={{ hidden: { scale: .8, opacity: 0 }, visible: { scale: [1, .9, 1], opacity: 1, transition: { delay: 0.2 } } }} className={styles.container}>
          <div className={styles.loginsection}>
            <span className={styles.span}>
              <div className={styles.card}>
                <h3 className={styles.h3}>Bienvenue à BlogueUniversel</h3>
              </div>
            </span>

            <form className={styles.form} onSubmit={handleSubmit}>
              <input className={styles.input} type="email" placeholder="Courriel" required value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className={styles.input} type="password" placeholder="Mot de passe" minLength={8} required value={password} onChange={(e) => setPassword(e.target.value)} />
              {errorMessage && <div className={styles.error}>{errorMessage}</div>}
              <a className={styles.forgotpass}>Mot de passe oublié?</a>
              
              <motion.div whileHover={{ scale: [1, 0.99, 1.018], transition: { duration: .25 } }}>
                <button className={styles.connexionbutton} type="submit">Connexion</button>
              </motion.div>
              
              <span className={styles.span}>
              <motion.div whileHover={{ scale: [1, 0.99, 1.05], transition: { duration: .25 } }}>
                <button className={styles.creercomptebutton} type="button" onClick={() => location.replace('/Inscription')}>Créer un compte</button>
              </motion.div>
              </span>
            </form>
          </div>

        </motion.div>
    </div>
      
    </>
  );
}
