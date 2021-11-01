export default function Sidebar({ children }) {
    return (
        <aside className="flex flex-col flex-2/5 bg-night-200">
            {children}
        </aside>
    );
}