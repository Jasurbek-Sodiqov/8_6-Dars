import styled from "@emotion/styled";

function HomeHeader() {
  const HomeWrapp = styled.div`
    padding: 20px;
  `;
  const Images = styled.div`
    cursor: pointer;
    grid-container {
        gap: 50px;
      }
  `;''
  return (
    <HomeWrapp>
      <div>
        <img src="../Back.svg" alt="" />
        <img src="Forward.svg" alt="" />
      </div>
    </HomeWrapp>
  );
}

export default HomeHeader;
