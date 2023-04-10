import { motion } from 'framer-motion'

import { useRouter } from 'next/router'

import styles from '../src/styles/Header.module.css'
import Image from 'next/image'
import logo from '../public/blogueUniverselLogo2.png'
import profilelogo from '../public/profileiconlogo.png'
import Menu from './Menu'


export default function Header() {

    const router = useRouter()

    return <>
        <motion.div onClick={() => router.push('/Bloguniversel/Accueil')} className={styles.container} whileHover={{ scale: [1, .9, 1.0], transition: { duration: .25 } }}>
            <Image src={logo} className={styles.blogunilogo} />
        </motion.div>

        <header className={styles.header}>

            <div className={styles.headercontainer}>
                <div className={styles.headercontainerlogo}>
                    <div className={style.avatarChoice} onClick={() => router.push('/Connexion')}  >
                        <Image src={profilelogo} className={styles.userlogo} />
                    </div>
                    <input className={styles.searchbarheader} type='search' placeholder='Rechercher' /> 
                </div>
            </div>
        </header>
    </>
}