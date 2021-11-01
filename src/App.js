import Header from './component/Header';
import Sidebar from './component/Sidebar';

function App() {
    return (
        <div className="flex flex-col h-screen text-white-100">
            <Header/>
            <div className="flex flex-1 flex-row">

                <Sidebar>
                    A
                </Sidebar>

                <main className="flex flex-col flex-1">
                    <div className="flex flex-row bg-night-200">
                        Toolbar
                    </div>
                    <div className="flex-1 bg-night-400">
                        Content
                    </div>
                </main>

                <Sidebar>
                    C
                </Sidebar>
            </div>
        </div>
    );
}

export default App;
