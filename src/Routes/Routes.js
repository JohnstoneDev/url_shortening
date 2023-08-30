import { Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

function HomeComponent(){
	return (
		<motion.div>
			<AnimatePresence>
				<h1 
					className='text-4xl text-zinc-300 animate-pulse font-headings'> React Template Repository with the following packages Pre-installed :</h1>
					<ol className='pt-5'>
						<li>React Router</li>
						<li>Tailwind CSS </li>
						<li> Configuration to use a proxy server.</li>
					</ol>
			</AnimatePresence>
		</motion.div>
	)
}


export const Paths = () => {
	return (
		<motion.div>
			<Routes>
				<Route exact path='/' element={<HomeComponent />}/>
			</Routes>
		</motion.div>
	)
}