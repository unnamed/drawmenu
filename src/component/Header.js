export default function Header() {
    return (
        <header className="flex flex-row px-5 bg-night-300 justify-between">
            <div className="flex flex-row gap-4 items-center h-100">
                <h1 className="font-medium text-xl">drawmenu</h1>

                <p>File</p>
                <p>Edit</p>
                <p>View</p>
                <p>Help</p>
            </div>

            <div>
            </div>
        </header>
    );
}