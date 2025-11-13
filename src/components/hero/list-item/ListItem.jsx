import IconsBackground from "../icons-background/IconsBackground";

const ListItem = ({ Icon, info, data }) => (
  <li className="flex gap-4">
    <IconsBackground>
      <Icon />
    </IconsBackground>
    <div className="">
      <p className="text-main">{info}</p>
      <h4 className="font-semibold text-titles">{data}</h4>
    </div>
  </li>
);
export default ListItem;
