const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
};

export function useWatcher(elementsQuery = [], handler) {
    if (!elementsQuery || !Array.isArray(elementsQuery)) {
        throw new Error('For correct work of class you should use array of strings with query');
    }
    const observer = new IntersectionObserver(handler, options);

    elementsQuery.forEach(el => {
        observer.observe(document.querySelector(el));
    });
}
