import React,{useState} from 'react';
import Layout from "./../../components/layout/Layout";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import "./../../styles/AuthStyles.css"

const Register = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    const [answer,setAnswer] = useState("")
    const navigate = useNavigate ()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const res = await axios.post('/api/v1/auth/register', { 
                name, 
                email, 
                password, 
                phone, 
                address,
                answer
            }
            );
            if(res && res.data.success){
                toast.success(res.data.message)
                navigate('/login');
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    };
    // console.log(process.env.REACT_APP_API)
  return (
    <Layout title={"Register"}>
        <div className='form-container'>
            <h1>REGISTER</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control" 
                        id="exampleInputName" 
                        placeholder='Enter your name'
                        required/>
                </div>
                <div className="mb-3">
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control" 
                        id="exampleInputEmail"
                        placeholder='Email'
                        required />
                </div>
                <div className="mb-3">
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        className="form-control" 
                        id="exampleInputPassword1"
                        placeholder='Password'
                        required />
                </div>
                <div className="mb-3">
                    <input 
                        type="text"
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control" 
                        id="exampleInputPhone" 
                        placeholder='PhoneNo.'
                        required/>
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="form-control" 
                        id="exampleInputAddress" 
                        placeholder='Address'
                        required/>
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className="form-control" 
                        id="exampleInputAnswer" 
                        placeholder='what is your favourite sport?'
                        required/>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>

        </div>
    </Layout>
  )
}

export default Register