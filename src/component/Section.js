import {FaChevronDown, FaChevronUp} from "react-icons/all";
import {useState} from "react";

export default function Section({ children, name }) {
    const [ visible, setVisible ] = useState(true);
    return (
        <section className="flex flex-col py-4 gap-2">
            <div className="flex flex-row justify-between uppercase px-4 cursor-pointer" onClick={() => setVisible(!visible)}>
                <span>{name}</span>
                <span>{visible ? <FaChevronDown /> : <FaChevronUp />}</span>
            </div>
            <div className={`flex flex-col gap-2 ${visible ? 'block' : 'hidden'}`}>
                {children}
            </div>
        </section>
    );
}