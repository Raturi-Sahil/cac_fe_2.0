import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    
    {/* so we use the useContext hook and provide it the context that we have created i.e. UserContext. It's as the name say use Context of what we pass as argument which is the UserContext in our case. similary we'll create LoginContext and other typeof context throughout our projects and it's gonna be similar. */}
    const { setUser } = useContext(UserContext);


    {/*We have used e at handleSubmit and onChange at both the places e represents the event of submit or change in input field.*/}
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

    return (
        <div>
            <h1>Login form</h1>
            <input type="text" value = {username}  onChange = {(e) => setusername(e.target.value)}placeholder="username"/>
            <input type="text" value = {password}  onChange = {(e) => setpassword(e.target.value)}placeholder="password"/>
            <button onClick={handleSubmit}>Submit</button>
            
        </div>
    )
}

export default Login