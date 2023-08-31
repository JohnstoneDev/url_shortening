
export const NavButton = ( { children }) => {
	return (
		<button
		className="bg-cyan desktop:p-2 tablet:p-2 rounded-3xl text-slate-100 font-semibold max-h-fit w-[200px] mobile:p-3 max-mobile:p-3">
			{ children}
		</button>
	)
}