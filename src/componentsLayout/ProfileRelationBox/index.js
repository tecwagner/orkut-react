import { ProfileRelationsBoxWrapper } from "../../components/ProfileRelations";

const ProfileRelationBox = (props) => {
  // console.log("Profile", props);
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className={`smallTitle`}>
        {props.title} ({props.items.length})
      </h2>
      {/* <ul>
        {props.items.map(({ id, title, image, name }) => {
          return (
            <li key={props.id}>
              <a href={`/users/${props.title}`}>
                <img src={props.image} />
                <span>{props.name}</span>;
              </a>
            </li>
          );
        })}
      </ul> */}
    </ProfileRelationsBoxWrapper>
  );
};

export default ProfileRelationBox;
