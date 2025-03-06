// components/global/Textfield.js
const Textfield = ({ value, onChange, placeholder, color = "text-white" }) => {
  return (
    <div className="w-full h-full">
      <input
        className={`min-h-10 px-4 py-2.5 h-full w-full ${color} text-sm font-normal bg-black/40 rounded-lg border border-[#e1e5ea]/20 justify-start items-center gap-2.5 inline-flex required invalid:border-red-500 invalid:text-red-500 focus-visible:outline-none focus:border focus-visible:border-white`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Textfield;
