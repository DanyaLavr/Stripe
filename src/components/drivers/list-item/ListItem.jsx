import Inst from "../../../assets/icons/instagram.svg?react";
import Linkedin from "../../../assets/icons/linkedin.svg?react";
const ListItem = ({ elem }) => (
  <li className="flex gap-3 content-center border border-opposite justify-items-center py-6 pl-2 md:pl-0 md:grid md:gap-0 md:text-center ">
    <img className="w-15 h-15 md:w-20 md:h-20" src={elem.photo} alt="" />

    <div className="">
      <div className="">
        <p className=" font-semibold text-title md:mt-4">{elem.name}</p>
        <p className=" text-subtitles md:mt-1">
          Досвід роботи: {elem.experience}
        </p>
      </div>

      <div className="flex  gap-3 md:mt-4 md:justify-center">
        <a href={elem.links.inst}>
          <Inst />
        </a>
        <a href={elem.links.linkedin}>
          <Linkedin />
        </a>
      </div>
    </div>
  </li>
);
export default ListItem;
