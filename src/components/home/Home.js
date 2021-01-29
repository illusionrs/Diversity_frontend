import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import Snippet from './Snippet'

export default function Home() {
    
    const [snippet, setSnippet] = useState([])
    const [newSnippetEditorOpen, setNewSnippetEditorOpen ] = useState(false)

    useEffect(()=>{

        getSnippet()
    },[])

   async function getSnippet(){
       
    const snippetRes = await Axios.get('http://localhost:5000/snippet')
    console.log(snippetRes)
    setSnippet(snippetRes.data)

    }

    function readSnippet(){
       
      return  snippet.map((snippet)=>{
             return <Snippet snippet={snippet}/>
        })
        
    }

    return (
        <div>

             {!newSnippetEditorOpen && <button onClick={()=> setNewSnippetEditorOpen(true)}>Add Snippet</button>}
            {readSnippet()}
            
        </div>
    )
}
