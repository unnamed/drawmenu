import {FaChevronDown, FaChevronUp} from "react-icons/all";
import {useState} from "react";

export default function Select({ name, options = ["None"] }) {
    const [ option, setOption ] = useState(options[0]);
    const [ open, setOpen ] = useState(false);

    return (
        <label className="flex flex-col px-4 text-sm">
            {name}

            <span
                onClick={() => setOpen(!open)}
                className="flex flex-row py-1 px-2 text-base bg-gray-300 items-center justify-between cursor-pointer">
                {option}
                {open ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            <div className="relative cursor-pointer">
                <div className={`${open ? 'block' : 'hidden'} flex flex-col absolute bg-gray-300 p-2 gap-2 w-full text-base`}>
                    {options.map(option => (
                        <div onClick={() => {
                            setOption(option);
                            setOpen(false);
                        }}>
                            {option}
                        </div>
                    ))}
                </div>
            </div>
        </label>
    );
}