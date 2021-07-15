import Box from "../../components/Box";
import { AlurakutProfileSidebarMenuDefault } from "../../lib/AluraCommons";

const ProfileSidebar = (props) => {
  return (
    <Box as="aside">
      <img
        // Para adicionar dados dentro do react é utilizado as { } e dentro delas é escrito e  javaScript.
        src={`https://github.com/${props.gitHubUser}.png`}
      />
      <hr />
      <p>
        <a
          className={`boxLink`}
          href={`https://github.com/${props.gitHubUser}`}
        >
          @{props.gitHubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
};

export default ProfileSidebar;
