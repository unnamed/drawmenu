export default function Input({ name, placeholder = "" }) {
    return (
        <label className="flex flex-col px-4 text-sm">
            {name}
            <input type="text" placeholder={placeholder} className="py-1 px-2 text-base bg-gray-300 outline-none border-none" />
        </label>
    );
}