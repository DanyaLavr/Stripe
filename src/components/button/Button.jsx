const Button = ({ filling = true, rounding, onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        filling
          ? "bg-accent text-[#FFF] hover:bg-blue-400"
          : "text-accent hover:text-blue-400"
      } ${
        rounding
          ? "rounded-md px-7 py-3"
          : "px-3 py-1.5 desktop:px-6 desktop:py-3"
      } cursor-pointer font-bold font-main text-sm desktop:text-[16px] ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
