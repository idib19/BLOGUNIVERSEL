import styles from '../src/styles/FeedOptions.module.css'
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Options({userId}) {
    // Permet d'afficher un formulaire l'apuie de button POST
    const [showForm, setShowForm] = useState(false);
    const handlePost = () => {
        // Set the showForm state variable to true to display the form
        setShowForm(true);
    }


    // Permet de stater les variables title et content au formulaire 
    // handleSubmit gere la soumission du formulaire
    const [title, setTitle] = useState(''); 
    const [content, setContent] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios
            .post('/api/publications', { title, content, userId });
            console.log('Post created:', response.data);
            
            // vider les inputs
            setTitle('');
            setContent('');
          } catch (error) {
            console.error('Error creating post:', error);
          }
    };

    // impossible de faire le refresh dans ce component cette fonction ne marxhera pas ici
    // elle n'est pas a la bonne place
    const handlerefresh = async () => {
        const response = await axios.get('/api/publications')
        const donnee = response.data

        setdata(donnee)

    };




    return (
        <div className={styles.maincontainer}>
            <div className={styles.feedsort}>
                <button className={styles.feedbuttons} onClick={() => handlePost(1)}>POST</button>
                <button className={styles.feedbuttons}>REFRESH</button>
            </div>
            {showForm && (
                <div className={styles.formContainer}>
                    {/* Render the form here */}
                    <form onSubmit={handleSubmit} className={styles.formpost}>
                        <label >
                            Titre:
                        </label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

                        
                        <label>
                            Contenu:
                        </label>
                        <textarea value={content} onChange={(e) => setContent(e.target.value)} />

                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
}

// export async function getServerSideProps(context) {

//     const token = context.req.token.jwt;
//     let userId = null;
  
//     if (token) {
//       const { sub } = JSON.parse(atob(token.split('.')[1]));
//       userId = sub;
//     }
  
//     return {
//       props: {
//         userId
//       }
//     }
//   }
  