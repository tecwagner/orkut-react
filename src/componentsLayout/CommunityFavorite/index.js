const CommunityFavorite = (props) => {
  // console.log("comuni", props);
  return (
    <li key={props.id}>
      <a href={`/communities/${props.id}`}>
        <img src={props.image} />
        <span>{props.name}</span>;
      </a>
    </li>
  );
};

export default CommunityFavorite;
