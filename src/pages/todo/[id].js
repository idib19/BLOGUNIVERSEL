
import axios from "axios"


export default function Todo({data}) {
    return <div>
        <h1>
            Titre du Todo :   {data.title}
        </h1>

        <h2>    
        Id du Todo : {data.id}  
        </h2>

        <h2>    
        Nombre Aleatoire : {data.number}  
        </h2>


        <h2>    
        Nom : {data.name}  
        </h2>
  
    </div>
}

export async function getServerSideProps(context) {
    // recupere des data et le passe en prop au compnent
 const query = context.query
const {id}= query; //object destructuring 
 console.log(query)

   // ON fecth nos donnees sur les api
    const todoFromApi = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}` 
    )
    const testData = await axios.get(
        `http://localhost:3000/api/test` 
    )

// on les place dans des variables 
    const datasTodos = todoFromApi.data 
    const datasTest = testData.data

    // on passe en props les donnees que on a fetches sur le componetn 
    return {
      props: {data : { ...datasTest, ...datasTodos}}, // will be passed to the page component as props
    }
  }

  