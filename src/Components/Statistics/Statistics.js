import { IconCard } from "../IconCard/IconCard"
import brand from "../../Assets/images/icon-brand-recognition.svg"
import detailed from '../../Assets/images/icon-detailed-records.svg'
import fullyCustomizable from "../../Assets/images/icon-fully-customizable.svg"

export const Statistics = () => {
	return (
		<div className="p-6 pt-12 flex flex-col items-center justify-center gap-6 space-y-3">
			<section className="space-y-6 pb-6">
				<h2 className="text-3xl font-semibold text-very-dark-blue">Advanced Statistics</h2>
				<p className="text-cyan">Track how your links are performing across the web with our advanced statistics dashboard</p>
			</section>

			<section className="desktop:grid desktop:grid-cols-3 mobile:flex mobile:flex-col max-mobile:flex max-mobile:flex-col gap-8 space-y-8">
				<IconCard
					icon={brand}
					title={"Brand Recognition"}
					paragraph={"Boost your brand recognition with each click. Generic links dont mean a thing. Branded links help install confidence in your content."}
					/>
				<IconCard
					icon={detailed}
					title={"Detailed Records"}
					paragraph={"Gain insighst into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."}
					/>
				<IconCard
					icon={fullyCustomizable}
					title={"Fully Customizable"}
					paragraph={"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement"}
					/>
			</section>
		</div>
	)
}