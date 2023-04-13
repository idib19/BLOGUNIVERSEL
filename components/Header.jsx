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
import { useState } from 'react'

export default function Header() {
    const router = useRouter()
    const [searchInput, setSearchInput] = useState("")
    // ICI le tableau images , on va la recuperer sur la database et on pourra appliiquer la fonction 
    //de filtering sur la terminaison API. for exemple on va fetcher sur api/getsubjects
    const images = [
        { id: 1, src: basket, alt: 'basketball logo' },
        { id: 2, src: football, alt: 'football logo' },
        { id: 3, src: music, alt: 'music logo' },
        { id: 4, src: politics, alt: 'politics logo' },
    ]

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    // Cette fonction permet de filtrer les subject en fonction de la valeur entree dans searchinput
    const filteredImages = images.filter((image) => {
        return image.alt.toLowerCase().includes(searchInput.toLowerCase())
    })

    return (
        <>
            <motion.div
                onClick={() => router.push('/Bloguniversel/Accueil')}
                className={styles.container}
                whileHover={{ scale: [1, 0.9, 1.0], transition: { duration: 0.25 } }}
            >
                <Image src={logo} className={styles.blogunilogo} />
            </motion.div>

            <header className={styles.header}>
                <div className={styles.headercontainer}>
                    <div className={styles.headercontainerlogo}>
                        <div
                            className={styles.avatarChoice}
                            onClick={() => router.push('/Connexion')}
                        >
                            <Image src={profilelogo} className={styles.userlogo} />
                        </div>

                        <input
                            className={styles.searchbarheader}
                            type='search'
                            placeholder='Rechercher'
                            onChange={handleChange}
                            value={searchInput}
                        />
                    </div>
                </div>

                <div className={styles.imagecontainer}>
                    <ul>
                        {filteredImages.map((image) => (
                            <li key={image.id} >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    className={styles.topcards}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </>
    )
}
