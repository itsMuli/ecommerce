import React,{useState} from 'react';
import Layout from "./../../components/layout/Layout";
import { toast } from 'react-toastify';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    const navigate = useNavigate ()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const res = await axios.post(
                `${process.env.REACT_APP_API}/api/v1/auth/register`,
                { name, email, password, phone, address}
            );
            if(res.data.success){
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

  return (
    <Layout title={"Register"}>
        <div className='register'>
            <h1>Register</h1>
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
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    </Layout>
  )
}

export default Register