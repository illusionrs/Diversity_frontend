import React ,{useState} from 'react'
import ReactDOM from 'react-dom'


function App(){



    const [formUsername, setUsername] = useState("")
    const [formPassword, setPassword] = useState("")


    function formHandle(e){
        
        e.preventDefault()

        setUsername("")
        setPassword("")
    }


    return <> 
         
     <form onSubmit={formHandle}>
         <input type="text" placeholder="username" value={formUsername} onChange={(e)=> setUsername(e.target.value)}/>
         <input type="password" placeholder="Password" value={formPassword} onChange={(e)=> setPassword(e.target.value)}/>
         <input type="submit" value="Log In"/>
     </form>
    
    </>

}

ReactDOM.render(<App/>, document.getElementById("root"))