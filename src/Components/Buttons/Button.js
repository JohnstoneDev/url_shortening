export const Button = ({ children, clickFunction }) => {
	return (
		<button
			onClick={(e) => clickFunction(e)}
			className="p-2 bg-cyan rounded-md text-slate-100 font-semibold mobile:w-full max-mobile:w-full desktop:w-fit hover:bg-very-dark-violet">
				{children}
		</button>
	)
}