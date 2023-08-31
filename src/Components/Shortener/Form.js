import { useState } from 'react'

import bgShortenDesktop from '../../Assets/images/bg-boost-desktop.svg'
import { Button } from '../Buttons/Button'

export const UrlForm = () => {
	const [ error, setError ] = useState("")
	const [ url, setUrl ] = useState("")
	const [ hide, setHide ] = useState(true)

	const handleChange = (e) => {
		e.preventDefault()
		setUrl(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (url === "") {
			setHide(false)
			setError("Please add a link")

			setTimeout(() => {
				setHide(true)
				setError("")
			},3500)
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
						className='p-2 mobile:w-full max-mobile:w-full rounded-md desktop:w-[800px] focus:outline-none placeholder:text-sm placeholder:p-2'
						value={url}
						onChange={(e) => handleChange(e)}
						placeholder='Shorten a link here ...'/>
					<span hidden={hide} className='p-0.5 text-left text-red italic text-sm'>{error}</span>
					<Button clickFunction={handleSubmit}> Shorten it! </Button>
				</form>
			</div>

		</div>
	)
}