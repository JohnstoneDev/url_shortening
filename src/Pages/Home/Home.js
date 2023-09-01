import { NavBar } from "../../Components/Navigation/NavBar"
import { UrlForm } from "../../Components/Shortener/Form"
import { TopComponent } from "../../Components/TopComponent/TopComponen"
import { ShortenedCards } from "../../Components/ShortenedUrl/Shortened"
import { Statistics } from "../../Components/Statistics/Statistics"
import { Footer } from "../../Components/Footer/Footer"

import { useUrls } from "../../Contexts/URLContext/URLContext"

export const  HomeComponent = () => {
	const { urls } = useUrls();

	return (
		<div className="gap-4 space-y-8">
				<div className="">
					<NavBar />
					<TopComponent />
					<UrlForm />
				<div className="p-6 bg-neutral pt-24">
					<ShortenedCards urls={urls}/>
					<Statistics />
				</div>

				<Footer />
			</div>
		</div>
	)
}
