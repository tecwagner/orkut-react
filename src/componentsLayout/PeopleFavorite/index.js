import { v4 as uuid } from "uuid";

const PeolpeFavorite = (props) => {
  return (
    <li key={uuid}>
      <a href={`/users/${props.users}`}>
        <img src={`https://github.com/${props.foto}.png`} />
        <span>{props.name}</span>;
      </a>
    </li>
  );
};

export default PeolpeFavorite;
