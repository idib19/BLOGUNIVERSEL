import styles from '../src/styles/Feed.module.css'
import { useRef, useState } from 'react';
import axios from 'axios';
import profilelogo from '../public/profileiconlogo.png'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';



export default function Post({ post, idUser }) {

    const [showModal, setShowModal] = useState(false);


    // handlelike button
    const [likeCount, setLikeCount] = useState(post.likes); //state 
    const [Liked, setIsLiked] = useState(false);
    
    const handleLike = async (postId) => {
        if (Liked) {
            setLikeCount(likeCount - 1);

            try {
                // API CALL TO API/like decrement 
                const response = await axios.put('/api/like', { postId })
                console.log('new like !', response.data);
                setIsLiked(!Liked);
            }
            catch (e) {
                console.log('une erreur est survenue like')
            }
           

        } else {
            setLikeCount(likeCount + 1);

            try {
                // API CALL TO API/like increment 
                const response = await axios.post('/api/like', { postId })
                console.log('new like !', response.data);
                setIsLiked(!Liked);
            }
            catch (e) {
                console.log('une erreur est survenue like')
            }
             
        }
    
    
    }
    

    // AJOUT D'UN NOUVEAU COMMENT
    const commentaire = useRef(null);
    //Fonction de soumission de commentaire sur le serveur
    const SubmitCommentServer = async (postId) => {
        const commentValue = commentaire.current.value;

        try {

            const response = await axios
                .post('/api/comments', { commentValue, idUser, postId })

            console.log('New Comment', response.data)

            commentaire.current.value = '';
            console.log('le id du post est :' + { postId })
        } catch (error) {
            console.error('Erreur lors de creation du comment')
        }
    };
    //State qui permet d'afficher la section commentaire
    const [commentSection, commentSectionection] = useState(false);

    //Fontion qui permet de change le valeur du state True => False / False => true
    const toggleComments = () => {
        commentSectionection(!commentSection);
    };

    return (
        <div key={post.id}>


            <div className={styles.card}>

                <h2 className={styles.mainsubject}>{post.subject.name}</h2>

                <div className={styles.datepublished}>
                    <span className={styles.datepublished}> {post.dateOfPublication.slice(0, 10)}</span>
                </div>

                <h5 className={styles.postinfo}>

                    <Image src={post.user.avatar} alt={post.user.name} className={styles.userlogo} width={25} height={25} />

                    {post.user.name}

                </h5>

                <div className={styles.contentbackground}>

                    <div className={styles.contentDetails}>
                        <p>
                            {post.content}
                        </p>

                    </div>

                </div>

                {/*<div className={styles.likeSingleComment}>
                    <p className={styles.commentsContainer}>Most recent comment.</p>
                    {/*<input className={styles.likebutton} type="button" value="LIKE" />}
                </div>*/}


                {/* <p className={styles.comments}>Comment that got the most upvotes.</p> */}

                <div>
                    <motion.div className={styles.feedsort} whileHover={{ scale: [1, 1.05], transition: { duration: .25 } }}>
                        <button className={styles.commentBanner} onClick={() => setShowModal(true)}>View Comments</button>
                    </motion.div>

                    {showModal && <Modal
                        onClose={() => setShowModal(false)}
                        show={showModal}
                    >
                        <motion.div initial='hidden' animate='visible' variants={{ hidden: { scale: .8, opacity: 0 }, visible: { scale: [1, .9, 1], opacity: 1, transition: { delay: 0.2 } } }} className={styles.container}>
                            <button onClick={() => setShowModal(false)} className={styles.buttonX}>X</button>

                            <div className={styles.commentsContainer}>
                                <ul className={styles.ul}>
                                    {post.comments.map((comment) => (
                                        <li key={comment.id} className={styles.li} >
                                            <div>
                                                <span><Image src={comment.user.avatar} alt={comment.user.name} className={styles.userlogoInComments} width={25} height={25} />{comment.user.name}</span>
                                            </div>
                                            <div>
                                                <span className={styles.commentMade}>{comment.content}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </Modal>}
                </div>

                <div className={styles.likeCommentsection}>


                    <button className={styles.likebutton} onClick={() => handleLike(post.id)} >

                        <span className={styles.likeicon}>

                            <Image src="/upvote.png" alt='like button' height={25} width={25} ></Image>

                        </span>

                        <span className={styles.likecount}> {likeCount}</span>

                    </button>


                    <div className={styles.commentInputSection}>
                        <input
                            type="text"
                            placeholder="Make a comment here"
                            className={styles.userComment}
                            ref={commentaire}
                        />
                    </div>

                    <button className={styles.subCommentBtn} onClick={() => SubmitCommentServer(post.id)}>POST</button>

                </div>




            </div>


        </div>
    );
}