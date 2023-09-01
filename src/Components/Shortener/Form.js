import {
	useCallback,
	useState,
} from 'react'

import { Button } from '../Buttons/Button'
import { useUrls } from '../../Contexts/URLContext/URLContext'
import bgShortenDesktop from '../../Assets/images/bg-boost-desktop.svg'

export const UrlForm = () => {
	const { urls, dispatch } = useUrls();

	const [ original, setOriginal ] = useState("")
	const [ short, setShort ] = useState("")

	const [ error, setError ] = useState("")
	const [ hide, setHide ] = useState(true)

	const [ urlObject, setUrlObject ] = useState({
		original : original,
		shortened : short
	})

	// endpoint for the url
	const shrtn = `https://api.shrtco.de/v2/shorten?url=${original}`

	// query the shrt api with the original link provided
	const query = useCallback(async () => {
		await fetch(shrtn)
		.then(r => r.json())
		.then(d => {
			if (d.ok) {
				console.log("SUCCESFUL REQUEST")
				setShort(d.result.short_link)
			} else {
				setHide(false)
				setError(d.error)

				setTimeout(() => {
					setHide(true)
					setError("")
				},5000)
			}
		})
		.catch(e => setError(e.message))
	},[shrtn])

	// Uses dispatch to add a url object to the urls array in localstorage
	const HandleAddUrl = (updatedObject) => {
		if (updatedObject.original.trim() !== '' && updatedObject.shortened.trim() !== '') {
			dispatch({ type: 'ADD_ITEM', payload: updatedObject });

			const updatedUrls = [ ...urls, updatedObject ];
			console.log(updatedUrls, "<= Dispatch has been called, adding the object to localstorage")

			localStorage.setItem('urls', JSON.stringify(updatedUrls))
			setUrlObject({ original: '', shortened: ''})
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (original === "") {
			setHide(false)
			setError("Please add a link")

			setTimeout(() => {
				setHide(true)
				setError("")
			},1500)

		} else {
				try {
					await query()
					const updatedObject = { ...urlObject, original: original, shortened: short }
					console.log(updatedObject, "<= updated Object")

					setUrlObject(updatedObject)
					// console.log(urlObject, "<= After setting with updatedObject")

					// setUrlObject({...urlObject, original: original, shortened: short })

					HandleAddUrl(updatedObject)
				} catch (e) {
					setError(e.message)
				}
			// console.log(urlObject, "<= before query")
			// query() // call the API
			// console.log(urlObject, "<= after query")
			// setUrlObject({...urlObject, original : original, shortened : short }) // update the url object
			// HandleAddUrl() // add the url object to localstorage
		}
	}

	return (
		<div className='p-8 mb-[-100px] relative'>
			<div className="bg-very-dark-blue p-6 rounded-lg" style={{ backgroundImage : `url(${bgShortenDesktop})`}}>
				<form
					onSubmit={(e) => handleSubmit(e)}
					className='p-4 gap-4 desktop:flex mobile:grid max-mobile:grid items-center justify-center'>
					<input
						type="text"
						name="original_url"
						className='p-2 mobile:w-full max-mobile:w-full rounded-md desktop:w-[800px] focus:outline-none placeholder:text-sm placeholder:p-2'
						value={original}
						onChange={(e) => { e.preventDefault(); setOriginal(e.target.value) }}
						placeholder='Shorten a link here ... "example.com"'/>
					<span hidden={hide} className='p-0.5 text-left text-red italic text-sm'>{error}</span>
					<Button clickFunction={() => handleSubmit}> Shorten it! </Button>
				</form>
			</div>

		</div>
	)
}