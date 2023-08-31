import working from '../../Assets/images/illustration-working.svg'
import { NavButton } from '../Buttons/NavButton'

export const TopComponent = () => {
	return (
		<div className='mobile:flex mobile:flex-col-reverse max-mobile:flex max-mobile:flex-col-reverse
		items-center justify-evenly gap-8 desktop:grid desktop:grid-cols-2 p-6'>
			<section className='flex flex-col gap-6 desktop:items-start mobile:items-center max-mobile:items-center p-4'>
				<h1 className='text-5xl font-extrabold text-very-dark-blue desktop:text-8xl desktop:text-left max-mobile:text-3xl mobile:text-3xl'> More than just shorter links</h1>
					<p className='text-cyan desktop:text-2xl desktop:text-left max-mobile:text-sm mobile:text-sm'>
						Build Your brand's recognition and get detailed insights on how your links are performing
					</p>
					<NavButton>
						Get Started
					</NavButton>
			</section>

			<img src={working} alt="working illustration" className='pl-6 ml-32'/>
		</div>
	)
}