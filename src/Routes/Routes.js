import { Routes, Route } from 'react-router-dom'
import { HomeComponent } from '../Pages/Home/Home'


export const Paths = () => {
	return (
			<Routes>
				<Route exact path='/' element={<HomeComponent />}/>
			</Routes>
	)
}