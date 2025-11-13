import Logo from "../../assets/icons/logo.svg?react";
import BurgerMenu from "../../components/burger-menu/burger-menu/BurgerMenu";
import Container from "../../components/container/Container";
import HeaderButtons from "../../components/header-buttons/HeaderButtons";
import Navigate from "../../components/navigate/Navigate";
const Header = () => {
  return (
    <header className="px-5 py-4 desktop:px-0">
      <Container className="flex justify-between items-center">
        <Logo className="w-47 md:w-20 desktop:w-47" />
        <Navigate className="hidden ml-5 md:flex" />
        <HeaderButtons className="hidden md:flex gap-4 desktop:ml-42" />
        <BurgerMenu />
      </Container>
    </header>
  );
};
export default Header;
