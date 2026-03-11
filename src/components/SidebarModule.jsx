export default function SidebarModule({ eyebrow, title, children }) {
    return (
        <aside className="sidebar-module">
            {eyebrow ? <p className="sidebar-module__eyebrow">{eyebrow}</p> : null}
            <h2 className="sidebar-module__title">{title}</h2>
            <div className="sidebar-module__body">{children}</div>
        </aside>
    );
}
