// components/global/Textarea.js
const Textarea = ({ placeholder, value, onChange, area }) => {
    return (
      <div className={`w-full ${area}`}>
        <textarea 
          className="px-4 py-2.5 h-full w-full text-white text-sm font-normal bg-black/40 rounded-lg border border-[#e1e5ea]/20 justify-start items-center gap-2.5 inline-flex required invalid:border-red-500 invalid:text-red-500 focus-visible:outline-none focus:border focus-visible:border-white text-justify hyphens-auto" 
          placeholder={placeholder} 
          value={value} // Controlled component, binding value to parent state
          onChange={onChange} // Updating parent state on change
        />
      </div>
    );
  }
  
  export default Textarea;
  