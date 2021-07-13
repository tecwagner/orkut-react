import { v4 as uuid } from "uuid";

const PeolpeFavorite = (props) => {
  return (
    <li>
      <a href={`/users/${props.users}`} key={uuid}>
        <img src={`https://github.com/${props.foto}.png`} />
        <span>{props.name}</span>;
      </a>
    </li>
  );
};

export default PeolpeFavorite;
