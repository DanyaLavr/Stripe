const Container = ({ className = "", children }) => {
  return <div className={`${className} xl:w-[1192px] mx-auto`}>{children}</div>;
};
export default Container;
