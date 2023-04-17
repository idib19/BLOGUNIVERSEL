import styles from 'src/styles/ViewProfile.module.css'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { verifierAuthentication } from 'modele/verifierAuth'
import { parse } from 'cookie';
import { getUserByToken } from 'modele/getUser'


export default function ViewProfile({user}) {

    const router = useRouter()

    return (
        <motion.div initial='hidden' animate='visible' variants={{ hidden: { scale: .8, opacity: 0 }, visible: { scale: [1, .9, 1], opacity: 1, transition: { delay: 0.2 } } }}  className={styles.mainCard}>
            <span className={styles.span}>
                <div>
                    <Image src={user.avatar} width='200' height='200' alt= 'Pfp logo' className={styles.userlogo}/>
                    <p className={styles.username}>{user.name}</p>
                </div>

            </span>
    
            <div className={styles.aboutContainer}>
                <span className={styles.span}>
                    <p className={styles.about}>Biographie</p>
                    <div className={styles.aboutCard}>
                        <p className={styles.p}>{user.biography}</p>
                    </div>
                </span>
            </div>
           
           <div className={styles.buttons}>
                <motion.div className={styles.span} whileHover={{ scale: [1, 1.1], transition: { duration: .25 } }}>
                    <button className={styles.inscrirebutton} onClick={() => router.push('/EditProfile')}>Edit Profil</button>
                </motion.div>
                <motion.div className={styles.span} whileHover={{ scale: [1, 1.1], transition: { duration: .25 } }}>
                    <button className={styles.inscrirebutton} onClick={() => router.push('/')}>Retour à l&apos;accueil</button>
                </motion.div>
           </div>
        </motion.div>
    )

}


export async function getServerSideProps(context) {


    const cookies = parse(context.req.headers.cookie || '');
    const token = cookies.tokenjwt;
  
    // 77-89 techniquement on a pas vraiment besoin de ce code mais ca aide dans la detection des erreurs . a revoir !!!
    const estAuthentifier = verifierAuthentication(context.req);
  
    // If user is not authenticated, redirect to login page
    if (!token || !estAuthentifier) {
      return {
        redirect: {
          destination: 'Connexion',
          permanent: false,
        },
      }
    }
  
    const user = await getUserByToken(token)
    user.dateOfBirth = user.dateOfBirth.toISOString();
    if (!user) {
      return {
        redirect: {
          destination: 'Connexion',
          permanent: false,
        },
      }
    }
  
  
    // If user is authenticated, return data for the page
    return {
      props: { user },
    }
  
  
  
  }