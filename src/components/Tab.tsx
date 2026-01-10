const Tab = ({ label, active = false }: { label: string; active?: boolean }) => (
    <button
        className={`
      pb-4 border-b-2 transition
      ${active ? "border-black text-black" : "border-transparent text-gray-500"}
    `}
    >
        {label}
    </button>
);


export default Tab