export const Button = ({ children, clickFunction }) => {
	return (
		<button
			onClick={() => clickFunction}
			className="p-2 bg-cyan rounded-md text-slate-100 font-semibold mobile:w-full max-mobile:w-full desktop:w-fit">
				{children}
		</button>
	)
}