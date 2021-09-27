import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router"
import { loadToken } from "../../utils/storage"

const Topup = () => {
	const history = useHistory()
	const [username, setUsername] = useState('')
	const [amount, setAmount] = useState('')

	const topup = async () => {
		//11 (calling api)
		//- call /money/topup with topup data
		// axios.put(URL, Body object, header object)
		//- if success alert("topup successfully")
		//- if failed, show error message
	}

	return (
		<div className='grid'>
			<span>Customer Username</span>
			<input
				onChange={e => setUsername(e.target.value)}
				value={username}>
			</input>
			<span>Topup Amount</span>
			<input type='number'
				onChange={e => setAmount(e.target.value)}
				value={amount}
			></input>
			<button className='mt-3' onClick={()=>topup()}>Topup</button>
		</div>
	)
}

export default Topup