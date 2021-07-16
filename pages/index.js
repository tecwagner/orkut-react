import React, { useState, useEffect } from "react";
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AluraCommons";
import CommunityFavorite from "../src/componentsLayout/CommunityFavorite";
import ProfileSidebar from "../src/componentsLayout/ProfileSidebar";
import PeopleFavorite from "../src/componentsLayout/PeopleFavorite";
import ProfileRelationBox from "../src/componentsLayout/ProfileRelationBox";
import nookies from "nookies";
import jwt from "jsonwebtoken";

const Home = (props) => {
  const name = props.githubUser;
  const [seguidores, setSeguidores] = useState([]);
  const [comunidades, setComunidades] = useState([]);
  const peopleFavorite = [
    "juunegreiros",
    "omariosouto",
    "peas",
    "rafaballerini",
    "felipefialho",
    "ErickWendel",
  ];

  const handlerCreateCommunity = (e) => {
    e.preventDefault();

    // Captura do dado do formulario
    const dadosDoForm = new FormData(e.target);

    const comunidade = {
      title: dadosDoForm.get("title"),
      imageUrl: dadosDoForm.get("image"),
      createSlug: name,
    };

    fetch("/api/comunidades", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comunidade),
    }).then(async (respComunidade) => {
      const dados = await respComunidade.json(comunidade);
      const comunidade = dados.registroCriado;

      // hooks que irão receber o estado atual em seguida cria um novo objeto e atualiza o estado
      const createComunidades = [...comunidades, comunidade];
      setComunidades(createComunidades);
    });
  };

  useEffect(() => {
    fetch("https://api.github.com/users/peas/followers").then(
      async (respServer) => {
        const resposta = await respServer.json();
        setSeguidores(resposta);
      }
    );

    // API GraphQL
    const token = "9226f916588bda80d0eb2161601910";
    fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: `query {
          allCommunities {
            id
            title
            imageUrl
            createSlug   
          }
        }`,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        const comunidadeAPI = res.data.allCommunities;
        setComunidades(comunidadeAPI);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <AlurakutMenu gitHubUser={name} />
      <MainGrid>
        <div className={`profileArea`} style={{ gridArea: "profileArea" }}>
          <ProfileSidebar gitHubUser={name} />
        </div>
        <div className={`welcomeArea`} style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className={`title`}>Bem-vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className={`subTitle`}>O que você deseja fazer?</h2>
            <form onSubmit={handlerCreateCommunity}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>
              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div
          className={`PerfilRelationsArea`}
          style={{ gridArea: "PerfilRelationsArea" }}
        >
          <ProfileRelationBox
            title="Seguidores"
            items={seguidores}
            // image={seguidores}
          />

          <ProfileRelationsBoxWrapper>
            <h2 className={`smallTitle`}>
              Minhas comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <CommunityFavorite
                    id={itemAtual.id}
                    title={itemAtual.title}
                    image={itemAtual.imageUrl}
                    name={itemAtual.title}
                  />
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className={`smallTitle`}>Amigos ({peopleFavorite.length})</h2>
            <ul>
              {peopleFavorite.map((itemAtual) => {
                return (
                  <PeopleFavorite
                    user={itemAtual}
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
};

export default Home;

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);

  const token = cookies.USER_TOKEN;

  const { isAuthenticated } = await fetch(
    "https://alurakut.vercel.app/api/auth",
    {
      headers: {
        Authorization: token,
      },
    }
  ).then((resp) => resp.json());
  console.log("auth", isAuthenticated);

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const { githubUser } = jwt.decode(token);
  return {
    props: { githubUser }, // will be passed to the page component as props
  };
  // console.log("pro", props);
}
