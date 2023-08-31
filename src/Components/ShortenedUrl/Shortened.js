import { Button } from "../Buttons/Button"


const ShortenedUrl = ({ original, shortened }) => {
	return (
		<div
			className="flex mobile:flex-col max-mobile:flex-col bg-[#ffffff] rounded-md text-lg gap-2 text-left text-[14px] p-2
			desktop:flex-row desktop:w-4/5 desktop:justify-between desktop:p-2 desktop:items-center">
			<p
				className="text-dark-violet mobile:border-b-2 mobile:border-cyan mobile:border-b-1 max-mobile:border-cyan desktop:border-b-0">
				{original.substring(0, 60)}...
			</p>
			<a className="text-cyan" href={shortened} target="_blank" rel="noreferrer">{shortened}</a>
			<Button>Copy</Button>
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