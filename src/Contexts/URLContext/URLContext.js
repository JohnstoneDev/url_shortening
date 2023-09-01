import {
	useEffect,
	useContext,
	useReducer,
	createContext,
} from "react"


const UrlContext = createContext([]);

const UrlReducer = (state, action) => {
	switch (action.type) {
		case 'INITIALIZE' :
			console.log("INITIALIZED")
			return action.payload
		case 'ADD_URL' :
			console.log("APPEND ITEM TO LOCAL STORAGE")
			return [...state, action.payload]
		default :
			return state
	}
}

export const UrlProvider = ({ children }) => {
	const [ urls, dispatch ] = useReducer(UrlReducer, [])

	useEffect(() => {
		const storedUrls = JSON.parse(localStorage.getItem('urls')) || []
		dispatch({ type: 'INITIALIZE', payload: storedUrls })
	}, [])

	return (
		<UrlContext.Provider value={{ urls, dispatch }}>
			{children}
		</UrlContext.Provider>
	)
}

export const useUrls = () => {
	return useContext(UrlContext)
}