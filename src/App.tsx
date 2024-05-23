import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Good from "./Page_1/Good";
import Home from "./Home";
import UserActive from "./UserActive";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Reducer from "./Reducer";
import styled from "styled-components";
import Music from "./Page_2/Music";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Good />,
  },
  {
    path: "/plays/:id",
    element: <Music />,
  },
]);

const Ota = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`;

const Ab = styled.div`
  max-width: 1728px;
  width: 100%;
  height: 112px;
  background: rgba(24, 24, 24, 1);
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 48px;
`;
const Nms = styled.div`
  display: flex;
  flex-direction: column;
`;
const Mnom = styled.h3`
  font-family: Circular Std;
  font-size: 18px;
  font-weight: 450;
  line-height: 22.77px;
  text-align: left;
  color: #fff;
`;
const Artist = styled.p`
  font-family: Circular Std;
  font-size: 16px;
  font-weight: 450;
  line-height: 20.24px;
  letter-spacing: -0.05em;
  text-align: left;
  color: rgba(179, 179, 179, 1);
`;

function App() {
  const dispach = useDispatch();
  const D = useSelector((a: any) => a.musiqaUrl);

  async function Token() {
    const date = new Date();
    const dat1 =
      date.getFullYear() +
      "/" +
      date.getMonth() +
      "/" +
      date.getDay() +
      "/" +
      date.getHours();
    if (
      !localStorage.getItem("tk") ||
      !localStorage.getItem("vq") ||
      localStorage.getItem("vq") != dat1
    ) {
      const dt = await fetch(
        "https://accounts.spotify.com/api/token",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa(
              "5600412904044fa1bfb5e3f541c70a25" +
                ":" +
                "2e50a238ea094468b9be7c618f34c769"
            )}`,
          },
          body: "grant_type=client_credentials",
        }
      );
      const dtj = await dt.json();
      dispach(Reducer.actions.tk(dtj.access_token));
      localStorage.setItem("tk", dtj.access_token);
      const date = new Date();
      const dat =
        date.getFullYear() +
        "/" +
        date.getMonth() +
        "/" +
        date.getDay() +
        "/" +
        date.getHours();
      localStorage.setItem("vq", dat);
      console.log(dtj);
    }
  }

  useEffect(() => {
    Token();
    console.log(localStorage.getItem("tk"));
  }, []);

  return (
    <Ota>
      <Home />
      <RouterProvider router={router}></RouterProvider>
      <UserActive />
      <Ab>
        <Nms>
          <Mnom>Play</Mnom>
          <Artist>Juilya</Artist>
        </Nms>
        <audio src={D} controls autoPlay></audio>
        <div></div>
      </Ab>
    </Ota>
  );
}

export default App;
