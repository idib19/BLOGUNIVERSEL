import styles from '../src/styles/SubjectProposal.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import basket from '/public/pastillesPics/basketball.png'
import football from '/public/pastillesPics/football.jpg'
import music from '/public/pastillesPics/music.jpg'
import politics from '/public/pastillesPics/politics.png'


export default function Topics () {
    return <div className={styles.imagecontainer}>

    <motion.div  whileHover={{scale: 1.2, transition: { duration: .2,} }}> 
        <Image src={basket} alt= 'basketball logo' className={styles.topcards}/>
    </motion.div>

    <motion.div whileHover={{ scale: 1.2, transition: { duration: .2 } }}>
        <Image src={football} alt= 'football logo' className={styles.topcards}/>
    </motion.div >
    
    <motion.div whileHover={{ scale: 1.2, transition: { duration: .2 } }}>        
        <Image src={music} alt= 'music logo' className={styles.topcards}/>
    </motion.div >
    
    <motion.div whileHover={{ scale: 1.2, transition: { duration: .2 } }}>        
        <Image src={politics} alt= 'politics logo' className={styles.topcards}/>
    </motion.div >

    </div>




}