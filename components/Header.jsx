import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import styles from '../src/styles/Header.module.css'
import Image from 'next/image'
import logo from '../public/blogueUniverselLogo2.png'
import profilelogo from '../public/profileiconlogo.png'

import basket from '/public/pastillesPics/basketball.png'
import football from '/public/pastillesPics/football.jpg'
import music from '/public/pastillesPics/music.jpg'
import politics from '/public/pastillesPics/politics.png'
import { createRef } from 'react'


export default function Header() {

    const router = useRouter()

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
      if (searchInput.length > 0) {
          countries.filter((country) => {
          return country.name.match(searchInput);
      });
      }
      
    const searchbar = createRef();
    const search = searchbar.current;
    

    return <>
        <motion.div onClick={() => router.push('/Bloguniversel/Accueil')} className={styles.container} whileHover={{ scale: [1, .9, 1.0], transition: { duration: .25 } }}>
            <Image src={logo} className={styles.blogunilogo} />
        </motion.div>

        <header className={styles.header}>

            <div className={styles.headercontainer}>
                <div className={styles.headercontainerlogo}>
                    <div className={styles.avatarChoice} onClick={() => router.push('/Connexion')}  >
                        <Image src={profilelogo} className={styles.userlogo} />
                    </div>
                    <input className={styles.searchbarheader} type='search' placeholder='Rechercher' ref={searchbar} />
                </div>
            </div>

            <div className={styles.imagecontainer}>

                <ul>
                    <li>
                        <Image  src={basket} alt='basketball logo' className={styles.topcards} />

                    </li>
                    <li>
                        <Image src={football} alt='football logo' className={styles.topcards} />

                    </li>
                    <li>
                        <Image src={music} alt='music logo' className={styles.topcards} />

                    </li>
                    <li>
                        <Image src={politics} alt='politics logo' className={styles.topcards} />

                    </li>
                </ul>





            </div>

        </header>
    </>
}