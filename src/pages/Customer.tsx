import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { loadToken, loadUsername } from "../utils/storage"
import axios from 'axios'

type UserRoleResp = {
	role: 'admin' | 'customer',
	username: string
}

const Customer = () => {
	const [username, setUsername] = useState('')
	const [money, setMoney] = useState<number | null>(null)
	const [loading, setLoading] = useState(true)
	const history = useHistory()

	useEffect(() => {
		const fn = async () => {
			//2 
			// - check role if user is "customer"
			// - if resp is 401 (redirect to index route "/")

			//load username and show
			const loadedUsername = loadUsername()
			if (loadedUsername)
				setUsername(loadedUsername)

			//fetch money
			//3
			//- call api : 'https://lab-09-finished-261207.herokuapp.com/money' (get customer money)
			//- render in browser

			//4
			//show loading when checking user role & fetching money
			//show username & money if loading is finished
		}

		fn()
	})

	//5 Implement logout button
	//- remove token
	//- redirect to index "/"
	const logout = () => {
	}

	return (
		<div className='text-center'>
			<p>Hi <span className="font-bold">{username}</span></p>
			<p>You have <span className="font-bold">{money?.toLocaleString()}</span> bath</p>
			<a onClick={logout}>Logout</a>
		</div>
	)
}

export default Customer