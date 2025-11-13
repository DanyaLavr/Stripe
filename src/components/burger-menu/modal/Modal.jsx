import HeaderButtons from "../../header-buttons/HeaderButtons";
import Navigate from "../../navigate/Navigate";

const Modal = () => {
  return (
    <div className="modal z-80 absolute left-0 top-0 right-0 bottom-0 bg-[#fff] px-10 py-30 ">
      <Navigate className="grid text-2xl gap-8" />
      <HeaderButtons className="flex mt-30 gap-10" />
    </div>
  );
};
export default Modal;
