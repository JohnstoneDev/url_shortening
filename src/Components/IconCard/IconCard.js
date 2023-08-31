
export const IconCard = ({ icon, title, paragraph  }) => {
	return (
		<div className="rounded-lg p-4 bg-slate-100 space-y-6 shadow-xl max-mobile:text-lg mobile:text-lg">
			<img src={icon} alt="" className="p-6 rounded-full bg-very-dark-blue mt-[-50px]"/>
			<article className="flex flex-col text-left space-y-2 p-4">
				<h4 className="font-semibold text-2xl text-very-dark-blue">{title}</h4>
				<p className="font-light text-cyan">{paragraph}</p>
			</article>
		</div>
	)
}