export default function Input({ name, placeholders = []}) {
    return (
        <label className="flex flex-col px-4 text-sm">
            {name}
            <div className="flex flex-row gap-2">
                {placeholders.map(placeholder => (
                    <input type="text" placeholder={placeholder} className="py-1 px-2 text-base bg-gray-300 outline-none border-none flex-1" />
                ))}
            </div>
        </label>
    );
}