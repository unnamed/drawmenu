import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Section from './component/Section';
import {FaCamera, FaSyncAlt} from "react-icons/all";
import Input from "./component/Input";
import Select from "./component/Select";

function App() {
    return (
        <div className="flex flex-col h-screen text-white-100">
            <Header/>
            <div className="flex flex-1 flex-row">

                <Sidebar>
                    <Section name="Menu">
                        <Input name="Title" placeholder="Title" />
                        <Select name="Layout" options={["Chest"]}/>
                    </Section>
                    <Section name="Background">
                    </Section>
                </Sidebar>

                <main className="flex flex-col flex-1">
                    <div className="flex flex-row bg-night-200 gap-2 p-1">
                        <span><FaCamera /></span>
                        <span><FaSyncAlt /></span>
                    </div>
                    <div className="flex-1 bg-night-400">
                    </div>
                </main>

                <Sidebar>
                    <Section name="Element">
                        <Input name="Display Name" placeholder="Item Display Name" />
                    </Section>
                    <Section name="Outliner">

                    </Section>
                </Sidebar>
            </div>
        </div>
    );
}

export default App;
