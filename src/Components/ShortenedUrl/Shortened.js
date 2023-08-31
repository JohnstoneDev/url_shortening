import {
	useState,
	useEffect
} from "react"

import { Button } from "../Buttons/Button"

const ShortenedUrl = ({ original, shortened }) => {
	const [ copy, setCopy ] = useState(shortened);
	const [ btnText, setBtnText ] = useState("Copy");

	function copyToClipBoard(e){
		e.preventDefault()

		navigator.clipboard.writeText(copy)

		setBtnText("Copied!")

		setTimeout(() => {
			setBtnText("Copy")
		},2500)
	}

	useEffect(() => {
		setCopy(shortened)
	},[shortened])

	return (
			<div
				className="flex mobile:flex-col max-mobile:flex-col bg-[#ffffff] rounded-md text-lg gap-2 text-left p-3
				desktop:flex-row desktop:w-4/5 desktop:justify-between desktop:p-2 desktop:items-center shadow-2xl max-mobile:text-sm mobile:text-sm">
				<p
					className="text-dark-violet mobile:border-b-2 mobile:border-cyan mobile:border-b-1 max-mobile:border-cyan desktop:border-b-0">
					{original.substring(0, 60)}...
				</p>
				<a className="text-cyan" href={shortened} target="_blank" rel="noreferrer">{shortened}</a>
				<Button clickFunction={copyToClipBoard}>{btnText}</Button>
			</div>
	)
}

export const ShortenedCards = ({ urls }) => {

	return (
		<div
			hidden={urls.length <= 0}
			className="mobile:flex mobile:flex-col max-mobile:flex max-mobile:flex-col space-y-8 gap-4
			items-center justify-between">
				{
					urls.map(url => <ShortenedUrl key={urls.indexOf(url)} {...url} /> )
				}
		</div>
	)
}