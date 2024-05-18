import HomeHero from "../components/HomeHero";
import styled from "@emotion/styled";
function Home() {
  const HomeWrapp = styled.div`
    width: 66%;
    background-color: #;
    background: linear-gradient(180deg, #3333a3 5.09%, #121212 55.4%);

  `;

  return (
    <HomeWrapp>
      <HomeHero />
    </HomeWrapp>
  );
}

export default Home;
