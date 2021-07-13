import Box from "../../components/Box";

const ProfileSidebar = (props) => {
  return (
    <Box>
      <img
        // Para adicionar dados dentro do react é utilizado as { } e dentro delas é escrito e  javaScript.
        src={`https://github.com/${props.gitHubUser}.png`}
      />
    </Box>
  );
};

export default ProfileSidebar;
