function isModifiedEvent(event) {
    return event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
}

function isNavigableHref(href) {
    return typeof href === "string" && href.startsWith("/");
}

export default function RouteLink({ href, navigate, onClick, children, ...props }) {
    function handleClick(event) {
        onClick?.(event);

        if (
            event.defaultPrevented ||
            !href ||
            !navigate ||
            !isNavigableHref(href) ||
            props.target === "_blank" ||
            isModifiedEvent(event) ||
            event.button !== 0
        ) {
            return;
        }

        event.preventDefault();
        navigate(href);
    }

    return (
        <a href={href} onClick={handleClick} {...props}>
            {children}
        </a>
    );
}
