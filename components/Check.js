const Check = ({ text, onChange }) => {

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input onChange={(e) => onChange(e.target.checked)} type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-200  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-400 ">{text || "Toggle Me"}</span>
        </label>
    )
}

export default Check