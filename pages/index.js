import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import ProfileSidebar from "../src/componentsLayout/ProfileSidebar";
import PeolpeFavorite from "../src/componentsLayout/PeopleFavorit";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AluraCommons";

export default function Home() {
  const gitHubUser = "tecwagner";
  const peopleFavorite = [
    "juunegreiros",
    "omariosouto",
    "peas",
    "rafaballerini",
    "felipefialho",
    "ErickWendel",
  ];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className={`profileArea`} style={{ gridArea: "profileArea" }}>
          <ProfileSidebar gitHubUser={gitHubUser} />
        </div>
        <div className={`welcomeArea`} style={{ gridArea: "welcomeArea" }}>
          <Box className={`Title`}>
            Bem-vindo(a)
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div
          className={`PerfilRelationsArea`}
          style={{ gridArea: "PerfilRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className={`smallTitle`}>Amigos ({peopleFavorite.length})</h2>
            <ul>
              {peopleFavorite.map((itemAtual) => {
                return (
                  <PeolpeFavorite
                    users={itemAtual}
                    foto={itemAtual}
                    name={itemAtual}
                  />
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
