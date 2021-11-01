import {FaChevronDown} from "react-icons/all";
import {useState} from "react";

export default function Select({ name, options = ["None"] }) {
    const [ option, setOption ] = useState(options[0]);
    return (
        <label className="flex flex-col px-4 text-sm">
            {name}
            <span className="flex flex-row py-1 px-2 text-base bg-gray-300 items-center justify-between">
                {option}
                <FaChevronDown />
            </span>
        </label>
    );
}