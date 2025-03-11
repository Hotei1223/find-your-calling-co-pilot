
const Button = ({ type = "primary", name, onClick }) => {
  const buttonTypes = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
  };
  
  return (
    <button 
      className={`min-w-[70px] md:min-w-[120px] h-10 p-4 rounded-2xl ${buttonTypes[type] || "btn-primary"} cursor-pointer border-[1px] border-transparent inline-flex justify-center items-center text-white text-sm font-medium leading-[25px] gap-2.5`} 
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
