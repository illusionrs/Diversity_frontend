import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import Snippet from './Snippet'
import SnippetEditor from './SnippetEditor'

export default function Home() {
    
    const [snippet, setSnippet] = useState([])
    const [newSnippetEditorOpen, setNewSnippetEditorOpen ] = useState(false)
    const [editSnippetData, setEditSnippetData] = useState(null)




    useEffect(()=>{

        getSnippet()
    },[])

   async function getSnippet(){
       
    const snippetRes = await Axios.get('http://localhost:5000/snippet')
    console.log(snippetRes)
    setSnippet(snippetRes.data)

    }

   function editSnippet(editSnippetData){
        
      setEditSnippetData(editSnippetData)
      setNewSnippetEditorOpen(true)

   }

    

    function readSnippet(){

        let sortedSnippet = [...snippet]

        sortedSnippet.sort((a,b)=>{
            return new Date(b.createdAt)- new Date(a.createdAt)
        })
       
      return  sortedSnippet.map((snippet)=>{
             return <Snippet snippet={snippet} getSnippet={getSnippet} editSnippet={editSnippet}/>
        })
        
    }



    return (
        <div>

             {!newSnippetEditorOpen && <button onClick={()=> setNewSnippetEditorOpen(true)}>Add Snippet</button>}

             {newSnippetEditorOpen && 
                 <SnippetEditor setNewSnippetEditorOpen={setNewSnippetEditorOpen} getSnippet={getSnippet} editSnippetData={editSnippetData} setEditSnippetData={setEditSnippetData}/>
             }
            {readSnippet()}
            
        </div>
    )
}
