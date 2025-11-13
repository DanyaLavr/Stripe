import { useDispatch, useSelector } from "react-redux";
import { handleModal } from "../../../redux/modalSlice";

const BurgerMenu = ({}) => {
  const dispatch = useDispatch();
  const { isShowen } = useSelector((state) => state.modal);

  return (
    <div
      onClick={() => dispatch(handleModal(!isShowen))}
      className="z-90 md:hidden"
    >
      <span
        className={`relative transition-all -top-1 block bg-titles w-13 h-1 rounded-2xl ${
          isShowen && "-rotate-45 translate-y-2"
        }`}
      ></span>
      <span
        className={`relative transition-all block bg-titles w-13 h-1 rounded-2xl ${
          isShowen && "opacity-0"
        }`}
      ></span>
      <span
        className={`relative transition-all -bottom-1 block bg-titles w-13 h-1 rounded-2xl ${
          isShowen && "rotate-45 -translate-y-2"
        }`}
      ></span>
    </div>
  );
};
export default BurgerMenu;
