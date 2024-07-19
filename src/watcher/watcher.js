const options = {
	root: null,
	rootMargin: '50px',
	threshold: 0.3
};

export function useWatcher(elementsQuery = [], handler, customOptions = {}) {
	if (!elementsQuery || !Array.isArray(elementsQuery)) {
		throw new Error('For correct work of class you should use array of strings with query');
	}
	const observer = new IntersectionObserver(handler, { ...options, ...customOptions });

	elementsQuery.forEach((el) => {
		observer.observe(document.querySelector(el));
	});
}
