import Button from "../button/Button";

const HeaderButtons = ({ className }) => (
  <div className={className}>
    <Button filling={false}>Створити профіль</Button>
    <span className="block h-12 w-0.5 bg-opposite"></span>
    <Button>Увійти</Button>
  </div>
);
export default HeaderButtons;
