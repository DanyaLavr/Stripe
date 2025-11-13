import Container from "../../components/container/Container";

import Left from "../../assets/icons/hero/pattern-left.svg?react";
import Right from "../../assets/icons/hero/pattern-right.svg?react";
import Car from "../../assets/icons/hero/car.svg?react";
import City from "../../assets/icons/hero/city.svg?react";
import Country from "../../assets/icons/hero/country.svg?react";
import Fire from "../../assets/icons/hero/fire.svg?react";
import Tel from "../../assets/icons/hero/tel.svg?react";
import Web from "../../assets/icons/hero/web.svg?react";
import Passengers from "../../assets/icons/hero/passengers.svg?react";
import ListItem from "../../components/hero/list-item/ListItem";
import Section from "../../components/section/Section";

const company = {
  name: "Stripe",
  trips: "43 Поїздок",
  link: "https://stripe.com",
  tel: "+38 (073) 555 55 55",
  img: "../../../public/assets/images/hero/company-logo.png",
  started: "1306800000000",
  passengers: "4000+",
  cars: "8 бусів",
  countries: "8 країн",
  city: "Львів",
};

const Hero = () => {
  const date = new Date(+company.started);
  const options = { day: "numeric", month: "long", year: "numeric" };

  const correctDate = date
    .toLocaleDateString("uk-UA", options)
    .slice(0, -3)
    .replace(/\s*(\d{4})$/, ", $1");
  console.log(correctDate);
  const { name, trips, link, tel, img, passengers, cars, countries, city } =
    company;
  return (
    <Section className="relative bg-[#f8f8fd] overflow-hidden pt-10 pb-">
      <Left className="hidden absolute -top-20 desktop:block" />
      <Right className="absolute  right-0 bottom-0 desktop:-top-20" />
      <Container className="relative z-10">
        {/* //* Потеційно, тут треба використати NextJS, щоб навігувати юзера по */}
        {/* аккаунтам перевізників */}
        {/* <Link></Link> */}
        <p className="font-normal text-subtitles">
          Головна / Профіль перевізника /
          <span className="text-[#202430]">Stripe</span>
        </p>
        <div className="md:flex gap-6 mt-12.5">
          <img
            className=" w-37 h-37 desktop:w-43 desktop:h-43"
            src={img}
            alt=""
          />
          <div className="">
            <div className="">
              <h2 className={`font-extrabold text-5xl font-title `}>{name}</h2>
              <span className="relative -top-10 left-36 border border-accent py-1 px-3 text-accent">
                {trips}
              </span>
              <div className="flex gap-3 flex-wrap text-accent font-semibold mt-3 md:flex md:gap-8 ">
                <div className="flex gap-1">
                  <Web />
                  <a href={link} target="_blank">
                    {link}
                  </a>
                </div>
                <div className="flex gap-1">
                  <Tel />
                  <a href={`tel:${tel}`}>{tel}</a>
                </div>
              </div>
            </div>
            <ul className="flex flex-wrap gap-4 md:gap-6 desktop:gap-8 mt-6 ">
              <ListItem Icon={Fire} info="На ринку від:" data={correctDate} />
              <ListItem
                Icon={Passengers}
                info="Перевезених пасажирів"
                data={passengers}
              />
              <ListItem Icon={Car} info="Автопарк" data={cars} />
              <ListItem Icon={Country} info="Обслуговуємо" data={countries} />
              <ListItem Icon={City} info="Місто" data={city} />
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};
export default Hero;
