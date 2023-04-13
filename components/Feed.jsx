import styles from '../src/styles/Feed.module.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';
import Post from './Posts';


export default function Feed(props) {

    const [showModal, setShowModal] = useState(false);

    // getting userID
    const Id = props
    const idUser = Id.props

    // Fetching all the  from the database 
    const [data, setdata] = useState([]);
    const fetchApi = async () => {
        const response = await axios.get('/api/publications')
        const donnee = response.data

        setdata(donnee)

    };

    //Fecthing at the rendering
    useEffect(() => {
        fetchApi();
    }, [])


    // STATE TITLE AND CONTENT AND SUBJECT FOR POST MODAL
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        let subjectId;

        switch (subject) {
            case 'Football':
                subjectId = "2";
                break;
            case 'Basketball':
                subjectId = "1";
                break;
            case 'Music':
                subjectId = "3";
                break;
            case 'Politics':
                subjectId = "4";
                break;
            default:
                subjectId = null;
                break;
        }

        try {
            console.log(subjectId)
            const response = await axios.post('/api/publications', {
                title,
                content,
                idUser,
                subjectId
            });

            console.log('Post created:', response.data);

            // vider les inputs
            setTitle('');
            setContent('');
            setSubject('');
            location.reload();
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };




    return (
        <>

            <div className={styles.maincontainer}>
                <motion.div className={styles.feedsort} whileHover={{ scale: [1, 1.15], transition: { duration: .25 } }}>
                    <button className={styles.feedbuttons} onClick={() => setShowModal(true)}>POSTER</button>
                </motion.div>

                {showModal && <Modal
                    onClose={() => setShowModal(false)}
                    show={showModal}
                >
                    <motion.div initial='hidden' animate='visible' variants={{ hidden: { scale: .8, opacity: 0 }, visible: { scale: [1, .9, 1], opacity: 1, transition: { delay: 0.2 } } }} className={styles.container}>

                        <div className={styles.formContainer}>

                            <form onSubmit={handleSubmit} className={styles.formpost}>


                                <motion.div className={styles.containerbuttons} whileHover={{ scale: [1, 1.15], transition: { duration: .25 } }}>
                                    <button onClick={() => setShowModal(false)} className={styles.buttonX}>X</button>

                                </motion.div>


                                <label className={styles.titleLabel} >
                                    Titre
                                </label>
                                <input className={styles.titleInput} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />


                                <label className={styles.subjectLabel}>
                                    Sujet
                                </label>
                                <select className={styles.subjectInput} value={subject} onChange={(e) => setSubject(e.target.value)}>
                                    <option value="">Select a subject</option>
                                    <option value="Football">Football</option>
                                    <option value="Basketball">Basketball</option>
                                    <option value="Music">Music</option>
                                    <option value="Politics">Politics</option>
                                </select>

                                <label className={styles.contentLabel}>
                                    Contenu
                                </label>
                                <textarea className={styles.contentInput} type='text' value={content} onChange={(e) => setContent(e.target.value)} />
                                <motion.div className={styles.containerbuttons} whileHover={{ scale: [1, 1.15], transition: { duration: .25 } }}>
                                    <button type="submit" className={styles.buttonSubmit}>Soummettre</button>
                                </motion.div>

                            </form>
                        </div>
                    </motion.div>
                </Modal>}
            </div>

            {data.map((post) => (
                <Post key={post.id} post={post} idUser={idUser} />
            ))}

        </>
    )

}

