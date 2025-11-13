const arr = ["Головна", "Перевізникам", "Про нас", "Профіль перевізника"];
const Navigate = ({ className }) => {
  return (
    <ul
      className={`md:text-sm lg:text-[16px] gap-6 text-main font-semibold ${className}`}
    >
      {arr.map((elem, i) => (
        <li key={i} className="relative group hover:text-accent">
          {elem}
          <span className="absolute left-0 top-10 w-0 h-1 bg-accent transition-all group-hover:w-full"></span>
        </li>
      ))}
    </ul>
  );
};
export default Navigate;
