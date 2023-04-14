import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import styles from 'src/styles/Accueil.module.css'
import Topics from 'components/SubjectProposal'
import Feed from 'components/Feed'
import Menu from 'components/Menu'
import Image from 'next/image'
import logo from 'public/blogueUniverselLogo.png'
import profilelogo from 'public/profileiconlogo.png'
import { verifierAuthentication } from 'modele/verifierAuth'
import { parse } from 'cookie';
import { getUserByToken } from 'modele/getUser'

// ACORRIGER : LES SUBJECTS DOIVENT ETRE FETCHER DEPUIS LA BD
import basket from '/public/pastillesPics/basketball.png'
import football from '/public/pastillesPics/football.jpg'
import music from '/public/pastillesPics/music.jpg'
import politics from '/public/pastillesPics/politics.png'
import { useState } from 'react'


export default function Home({ user }) {
  const router = useRouter()

  const [searchInput, setSearchInput] = useState("")
  // ICI le tableau images , on va la recuperer sur la database et on pourra appliiquer la fonction 
  //de filtering sur la terminaison API. for exemple on va fetcher sur api/getsubjects
  const images = [
    { id: 1, src: basket, alt: 'Basketball logo' },
    { id: 2, src: football, alt: 'football logo' },
    { id: 3, src: music, alt: 'music logo' },
    { id: 4, src: politics, alt: 'politics logo' },
  ]

  const handleSearch = (e) => {
    setSearchInput(e.target.value)
  }

  // Cette fonction permet de filtrer les subject en fonction de la valeur entree dans searchinput
  const filteredImages = images.filter((image) => {
    return image.alt.toLowerCase().includes(searchInput.toLowerCase())
  })


  const [filter, setFilter] = useState("")

  const filterbySubject = (value) => {
    setFilter(value);
  }

  return <>
    <div className={styles.acceuil}>

      <div className={styles.entete}>

        {/* <h3>{user.name} Est connecte</h3> */}

        <div className={styles.logotop}>
          <motion.div onClick={() => router.push('/')} className={styles.container} whileHover={{ scale: [1, .9, 1.15], transition: { duration: .25 } }}>
            <Image src={logo} alt='logo de bloguni' className={styles.blogunilogo} />
          </motion.div>
        </div>


        <header className={styles.header}>



          <div className={styles.headercontainerlogo}>

            <motion.div className={styles.avatarSpacer} onClick={() => router.push('/ViewProfile')} whileHover={{ scale: [1, .9, 1.08], transition: { duration: .25 } }}>
              <Image src={user.avatar} alt='User profil' className={styles.userlogo} width={50} height={50} />
            </motion.div>

            <input
              className={styles.searchbarheader}
              type='search'
              placeholder='Rechercher'
              onChange={handleSearch}
              value={searchInput}
            />

            <div className={styles.menuSpacer}>
              <Menu />
            </div>


          </div>


        </header>

      </div>



      <main className={styles.main}>
        <motion.div initial='hidden' animate='visible' variants={{ hidden: { scale: .8, opacity: 0 }, visible: { scale: [.9, 1], opacity: 1, transition: { delay: .3 } } }} >

          <div className={styles.imagecontainer}>
            <ul>
              {filteredImages.map((image) => (
                <li key={image.id} >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className={styles.topcards}
                    onClick={() => filterbySubject(image.id)}
                  />
                </li>
              ))}
            </ul>
          </div>

          <Feed userId={user.id} filter={filter} />

        </motion.div>
      </main>


    </div>
  </>
}

// ici on doit faire un fecth sur le serveurs (getserversideprops)pour verifier que le user est bien authentifier avant de render la page Acceuil
// Si il est authentifier, nous passons son id comme prop a la page d'acceuil.
// Sinon on le regirige vers la page de login


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


