import { useState } from "react"
import { loadToken } from "../../utils/storage"
import axios from 'axios'
import { useHistory } from "react-router"

type Role = 'admin' | 'customer'

const Register = () => {

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [role, setRole] = useState<Role>('admin')
	const [money, setMoney] = useState('')

	const history = useHistory()

	const register = async () => {
		//9
		//- if password === confirmPassword : continue
		//- but if not matched return from function
		
		//10 (calling api)
		//- call /user/regis with register data
		// axios.post(URL, Body object, header object)
		//- if success 1. alert("Registered successfully") 2. reset form
		//- if failed, show error message
	}

	return (
		<div className='grid'>
			<span>Username</span>
			<input onChange={e => setUsername(e.target.value)} value={username}></input>
			<span>Password</span>
			<input type='password' onChange={e => setPassword(e.target.value)} value={password}></input>
			<span>Confirm Password</span>
			<input type='password' onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword}></input>

			<div className='flex my-2 space-x-2'>
				<span>Role</span>
				<div>
					<input type='radio' name='role' value='admin'
						onChange={e => setRole(e.target.value as Role)}
						checked={role === 'admin'}></input>
					<span>Admin</span>
				</div>
				<div>
					<input type='radio' name='role' value='customer'
						onChange={e => setRole(e.target.value as Role)}
						checked={role === 'customer'}></input>
					<span>Customer</span>
				</div>
			</div>

			{/* 8 show start money input when check customer role*/}
			<span>Starting Money</span>
			<input type='number' onChange={e => setMoney(e.target.value)} value={money}></input>

			<button className='mt-2' onClick={()=>register()}>Register</button>
		</div>
	)
}

export default Register