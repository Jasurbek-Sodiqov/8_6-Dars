import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Reducer from "../Reducer";

const Contner = styled.div`
  background: linear-gradient(180deg, #def628 5.09%, #121212 43.28%);

  width: 1072px;
  min-height: 100vh;
  padding: 20px 41px;
  box-sizing: border-box;
`;
const Naviget = styled.button`
  width: 40px;
  height: 40px;
  background: #0000008a;
  border: none;
  border-radius: 999px;
`;
const Nvs = styled.div`
  display: flex;
  gap: 22px;
`;
const Hero = styled.div`
  padding-top: 28px;
  width: auto;
  display: flex;
  margin-top: 20px;
`;
const Dv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 69px;
  padding-left: 32px;
`;
const Type = styled.h3`
  font-family: Circular Std;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #fff;
`;
const Name = styled.h1`
  font-family: Circular Std;
  font-size: 122px;
  font-weight: 900;
  line-height: 154.33px;
  letter-spacing: -0.06em;
  text-align: left;
  color: #fff;
`;
const Dect = styled.p`
  font-family: Circular Std;
  font-size: 20px;
  font-weight: 450;
  line-height: 25.3px;
  text-align: left;
  color: #fff;
`;

const Ms = styled.h3`
  width: 62px;
  height: 20px;
  top: 14px;
  color: rgba(179, 179, 179, 1);
  display: flex;
  width: 200px;
`;
const MsC = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(102, 102, 102, 1);

  padding: 14px 20px;
`;

const Muzc = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;
const NameA = styled.div`
  display: flex;
  flex-direction: column;
  width: 227px;
  margin-left: 21px;
`;
const AlbomName = styled.p`
  width: 207px;
  height: 23px;
  top: 24px;
  color: rgba(179, 179, 179, 1);
  margin: 0 auto;
`;
const Nm = styled.h3`
  font-family: Circular Std;
  font-size: 20px;
  font-weight: 450;
  line-height: 25.3px;
  color: #fff;
`;
const ArrtistName = styled.p`
  font-family: Circular Std;
  font-size: 18px;
  font-weight: 450;
  line-height: 22.77px;
  text-align: left;
  color: rgba(179, 179, 179, 1);
`;
const Clock = styled.p`
  font-family: Circular Std;
  font-size: 20px;
  font-weight: 450;
  line-height: 25.3px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #fff;
`;
const Index = styled.p`
  font-family: Circular Std;
  font-size: 22px;
  font-weight: 450;
  line-height: 27.83px;
  letter-spacing: 0.02em;
  text-align: right;
  color: rgba(179, 179, 179, 1);
  margin-right: 23px;
`;

function Qoshiqlar() {
  const dispach = useDispatch();
  const params = useParams();
  const [malumot, setMalumot] = useState<any>();

  const tken = useSelector((a: any) => a.token);

  async function Dta() {
    try {
      const d = await fetch(
        `https://api.spotify.com/v1/playlists/${params.id}?additional_types=10`,
        {
          headers: {
            Authorization: `Bearer ${tken}`,
          },
        }
      );
      console.log(d);

      const dj = await d.json();
      console.log(dj);
      setMalumot(dj);
    } catch (err) {
      console.log(err, "sodir bodi");
    }
  }

  useEffect(() => {
    Dta();
  }, []);

  return (
    <Contner>
      <Nvs>
        <Naviget>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="rgba(250,245,245,1)"
          >
            <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
          </svg>
        </Naviget>
        <Naviget>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="rgba(255,255,255,1)"
          >
            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
          </svg>
        </Naviget>
      </Nvs>

      <Hero>
        <img src={malumot?.images[0].url} width={297} height={297} alt="" />
        <Dv>
          <Type>{malumot?.type}</Type>
          <Name>{malumot?.name}</Name>
          <Dect>{malumot?.description}</Dect>
        </Dv>
      </Hero>

      <div style={{ background: "#fff" }}>
        <div>
          <img style={{ background: "red" }} src="./Search_S.png" alt="aa" />
        </div>
      </div>

      <MsC>
        <Ms>
          <span style={{ marginRight: "15px" }}>#</span> TITLE
        </Ms>
        <Ms>ALBUM</Ms>
        <Ms>DATE ADDED</Ms>
        <img src="./Clock_XS.svg" alt="" />
      </MsC>

      {malumot?.tracks.items.map((a: any, index: any): any => {
        return (
          <Muzc
            onClick={() => dispach(Reducer.actions.url(a.track.preview_url))}
          >
            <Index>{index + 1}</Index>
            <img src={a.track.album.images[2].url} width={52} alt="" />
            <NameA>
              <Nm>{a.track.name}</Nm>
              <ArrtistName>{a.track.artists[0].name}</ArrtistName>
            </NameA>
            <AlbomName>{a.track.album.name}</AlbomName>
            <div style={{ width: "100px" }}></div>
            <Clock>2:12</Clock>
          </Muzc>
        );
      })}
    </Contner>
  );
}

export default Qoshiqlar;
