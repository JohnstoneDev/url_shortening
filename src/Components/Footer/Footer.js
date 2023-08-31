import boost from '../../Assets/images/bg-boost-desktop.svg'
import logo_copy from '../../Assets/images/logo copy.svg'

import facebook from "../../Assets/images/icon-facebook.svg"
import instagram from '../../Assets/images/icon-instagram.svg'
import twitter from '../../Assets/images/icon-twitter.svg'
import pinterest from '../../Assets/images/icon-pinterest.svg'

import { NavButton } from "../Buttons/NavButton"

const Boost = () => {
	return (
		<section
			style={{ backgroundImage : `url(${boost})`}}
			className='bg-dark-violet p-12 flex flex-col items-center gap-6'>
				<h3 className='text-neutral font-semibold text-3xl'>Boost your links today</h3>
				<NavButton>Get Started</NavButton>
		</section>
	)
}

const Social = () => {
	return (
		<div className='flex gap-8'>
			<img src={facebook} alt=""/>
			<img src={twitter} alt=""/>
			<img src={pinterest} alt=""/>
			<img src={instagram} alt=""/>
		</div>
	)
}


const ArticleWithContent = ({ title, contents }) => {
	return (
		<article className='flex flex-col gap-1.5'>
			<h2 className='font-semibold'>{title}</h2>
			<div className='flex flex-col'>
				{
					contents.map(c => <span className="cursor-pointer hover:text-grayish-violet" key={Math.random() * 500}>{c}</span>)
				}
			</div>
		</article>
	)
}

const Links = () => {
	return (
		<section className='bg-very-dark-violet text-slate-100 flex desktop:grid desktop:grid-cols-2 mobile:flex-col max-mobile:flex-col justify-center items-center p-12 desktop:text-left'>
			<img src={logo_copy} alt="" className='h-9 w-fit m-4'/>
			<section className='flex mobile:flex-col max-mobile:flex-col desktop:flex-row gap-8 items-center justify-evenly'>
				<ArticleWithContent title={"Features"} contents={['Link Shortening', 'Branded Links', 'Analytics']}/>
				<ArticleWithContent title={"Resources"} contents={['Blog', 'Developers', 'Support']}/>
				<ArticleWithContent title={"Company"} contents={['About', 'Our Teams', 'Careers']}/>
				<Social />
			</section>
		</section>
	)
}

export const Footer = () => {
	return (
		<footer>
			<Boost />
			<Links />
		</footer>
	)
}