import React,{useState, useEffect} from 'react'
import Axios from "axios"

export default function SnippetEditor(props) {

    const [editorTitle, setEditorTitle] = useState("")
    const [editorDescription,setEditorDescription] = useState("")
    const [editorCode, setEditorCode] = useState("")

    useEffect(() => {
        if(props.editSnippetData)
        {
            setEditorTitle(props.editSnippetData.title? props.editSnippetData.title:"")
            setEditorDescription(props.editSnippetData.description ? props.editSnippetData.description:"")
            setEditorCode(props.editSnippetData.code? props.editSnippetData.code:"")
        }
    }, [props.editSnippetData])

    async function saveSnippet(e){

        e.preventDefault()

        const snippetData = {
            title: editorTitle? editorTitle : undefined,
            description: editorDescription? editorDescription : undefined,
            code: editorCode? editorCode : undefined
        }

        if(!props.editSnippetData){
        await Axios.post("http://localhost:5000/snippet", snippetData)
        props.setEditSnippetData(null)
    }
        else {
        await Axios.put(`http://localhost:5000/snippet/${props.editSnippetData._id}`,snippetData) }

        props.getSnippet()
        closeEditor()   
    }
    function closeEditor(){
        props.setNewSnippetEditorOpen(false)
        console.log('hit by me')
        setEditorTitle("")
        setEditorDescription("")
        setEditorCode("")
        props.setEditSnippetData(null)

    }

    return (
        <div className="snippet-editor">
                  
                    <form onSubmit={saveSnippet}>
                        <label htmlFor="editor-title">Title</label>
                        <input id="editor-title" type="text"  value={editorTitle} onChange={(e)=> setEditorTitle(e.target.value)}/>

                        <label htmlFor="editor-description">Description</label>
                        <input id="editor-description" type="text"  value={editorDescription} onChange={(e)=>setEditorDescription(e.target.value)}/>

                        <label htmlFor="editor-code"  >Code</label>
                       <textarea id="editor-code" value={editorCode} onChange={(e)=> setEditorCode(e.target.value)}/>

                       <button type="submit">Submit</button>
                       <button type="button" onClick={closeEditor}>Cancel</button>
                    </form>
                   </div>
    )
}
