import { FaChevronDown } from "react-icons/all";

export default function Section({ children, name }) {
    return (
        <section className="flex flex-col py-4 gap-2">
            <div className="flex flex-row justify-between uppercase px-4">
                <span>{name}</span>
                <span><FaChevronDown /></span>
            </div>
            {children}
        </section>
    );
}