import Header from './component/Header';

function App() {
    return (
        <div className="flex flex-col h-screen text-white-100">
            <Header/>
            <div className="flex flex-1 flex-row">
                <aside className="flex flex-col flex-2/5 bg-night-200">
                    A
                </aside>

                <main className="flex flex-col flex-1">
                    <div className="flex flex-row bg-night-200">
                        Toolbar
                    </div>
                    <div className="flex-1 bg-night-400">
                        Content
                    </div>
                </main>

                <aside className="flex flex-col flex-2/5 bg-night-200">
                    C
                </aside>
            </div>
        </div>
    );
}

export default App;
