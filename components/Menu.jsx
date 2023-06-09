import styles from '../src/styles/Menu.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
 
export default function Menu() {
    const router = useRouter()

    const [visible, setVisible] = useState(true);

    const toggler = () => {
        setVisible(!visible);
    }

    return <>

        {visible &&

            <aside className={styles.sidebar}  >

                <h3 className={styles.menuText}>Menu</h3>

                <ul className={styles.menu}>
                    <li><a href="#" className={styles.item + ' ' + styles.menuhome} onClick={() => router.push('/')}> Accueil</a></li>
                    <li><a href="#" className={styles.item} onClick={() => router.push('/ViewProfile')}>Profil</a></li>
                    <li><a href="#" className={styles.item} onClick={() => router.push('/Inscription')}>Inscription</a></li>
                    <li><a href="#" className={styles.item} onClick={() => router.push('/Connexion')}>Deconnexion</a></li>
                </ul>

            </aside>

        }


    </>
}