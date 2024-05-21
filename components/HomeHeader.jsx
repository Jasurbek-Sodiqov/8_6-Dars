import styled from "@emotion/styled";

function HomeHeader() {
  // styled
  const HomeWrapp = styled.div`
    padding: 20px;
  `;
  const Images = styled.div`
    display: flex;
    gap: 20px;
  `;
  const HeaderText = styled.div`
    font-size: 39px;
    font-weight: 700;
    line-height: 49.33px;
    letter-spacing: -0.01em;
    text-align: left;
    color: white;
    margin-bottom: 29px;
  `;

  const HeaderCardWrap = styled.div`
    margin-top: 30px;
  `;

  const UlWrapp = styled.ul`
    display: flex;
    gap: 20px;
  `;
  const LiWrapp = styled.li`
    width: 480px;
    height: 82px;
    background-color: #3d3d8c;
    border-radius: 10px;
  `;

  const CardWrapp = styled.li``;
  ("");
  return (
    <HomeWrapp>
      <Images>
        <img
          src="../Back.svg"
          alt=""
          width={40}
          height={40}
          className="cursor-pointer"
        />
        <img
          src="Forward.svg"
          alt=""
          width={40}
          height={40}
          className="cursor-pointer"
        />
      </Images>

      <HeaderCardWrap>
        <HeaderText>Good afternoon</HeaderText>

        <UlWrapp>
          <CardWrapp>
            <LiWrapp className="mb-6">
              <img src="Album Cover.svg" alt="" width={82} height={82} />
            </LiWrapp>
            <LiWrapp className="mb-6">
              <img src="Album Cover (1).svg" alt="" width={82} height={82} />
            </LiWrapp>{" "}
            <LiWrapp>
              <img src="Album Cover (2).svg" alt="" width={82} height={82} />
            </LiWrapp>
          </CardWrapp>
          <CardWrapp>
            <LiWrapp className="mb-6">
              <img src="Album Cover (3).svg" alt="" width={82} height={82} />
            </LiWrapp>
            <LiWrapp className="mb-6">
              <img src="Album Cover (4).svg" alt="" width={82} height={82} />
            </LiWrapp>{" "}
            <LiWrapp>
              <img src="Album Cover (5).svg" alt="" width={82} height={82} />
            </LiWrapp>
          </CardWrapp>
        </UlWrapp>
      </HeaderCardWrap>
    </HomeWrapp>
  );
}

export default HomeHeader;
