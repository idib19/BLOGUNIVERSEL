import Image from 'next/image';
import styles from 'src/styles/Avartars.module.css'



export default function Avatars() {

    return <>

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

        </div>
    </>

}