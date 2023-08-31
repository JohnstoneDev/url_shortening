import logo from '../../Assets/images/logo.svg'
import { NavButton } from '../Buttons/NavButton'

export const NavBar = () => {
	return (
		<nav className='m-3 flex gap-6 justify-between cursor-pointer p-6'>
			<section className='flex gap-6 items-center justify-between'>
				<img src={logo} alt="logo" />
				<div className='flex gap-6 mobile:hidden max-mobile:hidden'>
					<span>Features</span>
					<span>Pricing</span>
					<span>Resources</span>
				</div>
			</section>

				<div className='flex gap-6 items-center max-mobile:hidden mobile:hidden'>
					<span> Login </span>
					<NavButton>
						Sign Up
					</NavButton>
				</div>
		</nav>
	)
}