import styled from "styled-components";

const MainGrid = styled.main`
  display: grid;
  grid-gap: 10px;
  padding: 16px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 16px;
  .profileArea {
    display: none;
    @media (min-width: 860px) {
      display: block;
    }
  }
  @media (min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: "profileArea welcomeArea PerfilRelationsArea";
    /* grid-template-columns: 160px 618px 312px; 1fr representa fração do que resta de espaço em tela */
    grid-template-columns: 160px 1fr 312px;
  }
`;

export default MainGrid;
