import { useState } from "react";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import ListItem from "../../components/drivers/list-item/ListItem";
import Section from "../../components/section/Section";

const drivers = [
  {
    name: "Олександр",
    experience: "5 років",
    links: {
      inst: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
    photo: "../../../public/assets/images/drivers/avatar.png",
  },
  {
    name: "Володимир",
    experience: "7 років",
    links: {
      inst: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
    photo: "../../../public/assets/images/drivers/avatar.png",
  },
  {
    name: "Ірина",
    experience: "1 рік",
    links: {
      inst: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
    photo: "../../../public/assets/images/drivers/avatar.png",
  },
  {
    name: "Михайло",
    experience: "1 рік",
    links: {
      inst: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
    photo: "../../../public/assets/images/drivers/avatar.png",
  },
  {
    name: "Юлія",
    experience: "2 роки",
    links: {
      inst: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
    photo: "../../../public/assets/images/drivers/Yulia.png",
  },
  {
    name: "Олена",
    experience: "9 років",
    links: {
      inst: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
    photo: "../../../public/assets/images/drivers/avatar.png",
  },
  {
    name: "Данило",
    experience: "5 років",
    links: {
      inst: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/in/danylo-lavrovskyi-23751a27a/",
    },
    photo: "../../../public/assets/images/drivers/Danylo.jpeg",
  },
];
const Drivers = () => {
  const [isShowingAll, setIsShowingAll] = useState(false);
  const filteredDrivers = isShowingAll ? drivers : drivers.slice(0, 5);

  return (
    <Section>
      <Container className="relative">
        <h2 className="title">Наші водії</h2>
        <Button
          className="absolute top-0 right-0"
          onClick={() => setIsShowingAll((prev) => !prev)}
          filling={false}
        >
          {isShowingAll ? "Згорнути" : `Усі водії (${drivers.length})`}
        </Button>
        <ul className="grid gap-4 mt-3 md:grid-cols-3 desktop:grid-cols-5 ">
          {filteredDrivers.map((elem, i) => (
            <ListItem key={i} elem={elem} />
          ))}
        </ul>
        <span className="absolute -bottom-18 block w-full h-0.5 bg-opposite"></span>
      </Container>
    </Section>
  );
};
export default Drivers;
