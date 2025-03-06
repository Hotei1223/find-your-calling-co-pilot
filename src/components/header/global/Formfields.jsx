// components/form/Formfields.js
import Textarea from '@/components/global/Textarea';
import Textfield from '@/components/global/Textfield';

const Formfields = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="px-4 py-[25px] w-full bg-[#16171b]/75 rounded-[20px] border border-[#e1e5ea]/20 flex-col justify-start items-start gap-4 inline-flex">
      <div className="self-stretch text-white text-lg font-bold">{label} :</div>
      {type === "textarea" ? (
        <Textarea placeholder={placeholder} value={value} onChange={onChange} />
      ) : type === "textfield" ? (
        <Textfield placeholder={placeholder} value={value} onChange={onChange} />
      ) : (
        <span className="text-red-400">Missed Something: form type needed</span>
      )}
    </div>
  );
};

export default Formfields;
