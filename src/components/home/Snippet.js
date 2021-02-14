import React from 'react'
import Axios from 'axios'

export default function Snippet({snippet,getSnippet,editSnippet}) {

    async function deleteSnippet(){
     
        await Axios.delete(`http://localhost:5000/snippet/${snippet._id}`)

        getSnippet()

    }
    return (
        <div>

            { snippet.title && <h2>{snippet.title} </h2>}
            {snippet.description && <p>{snippet.description}</p>}
            {snippet.code && <pre>
                <code>
                    {snippet.code}
                    </code>
                    </pre>}



            <button onClick={()=>editSnippet(snippet)}>Edit</button>        

             <button onClick={deleteSnippet}>Delete</button>       


            
        </div>
    )
}
