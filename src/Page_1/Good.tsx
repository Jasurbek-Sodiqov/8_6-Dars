import { FC, useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Gd=styled.div`
    background: linear-gradient(180deg, #3333A3 5.09%, #121212 33.4%);
    max-width:1072px;
    min-height:100vh;
    padding:20px 41px;
    box-sizing:border-box;
`
const Naviget=styled.button`
    width: 40px;
    height: 40px;
    background: #0000008a;
    border:none;
    border-radius:999px;
`
const Nvs=styled.div`
    display:flex;
    gap:22px;
`

const H1=styled.h1`
font-family: Circular Std;
font-size: 39px;
font-weight: 700;
line-height: 49.33px;
letter-spacing: -0.01em;
text-align: left;
color:#fff;
margin-top:50px;
`
const Wf=styled.div`
    width: 479px;
    height: 82px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.1);
    display:flex;
    gap:21px;
    align-items:center;
`
const WfName=styled.h2`
font-family: Circular Std;
font-size: 20px;
font-weight: 700;
line-height: 25.3px;
letter-spacing: 0.01em;
text-align: left;
color: #fff;
`

const W=styled.div`
    display:flex;
    width:auto;
    gap:31px;
    flex-wrap:wrap;
    margin-top:29px;
`

const Hf=styled.div`
    width: 224px;
    height: 324px;
    padding:20px 21px 18px 21px;
    box-sizing:border-box;
    background: rgba(255, 255, 255, 0.04);
    border-radius:8px;
`
const H=styled.div`
    display:flex;
    gap:31px;
    flex-wrap:wrap;

`

const Hh3=styled.h3`
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.03em;
   margin:0;
    color:#fff;
    margin-top:25px;
    margin-bottom:8px;
`
const   Hp=styled.p`
    font-family: Circular Std;
    font-size: 18px;
    font-weight: 450;
    color: rgba(179, 179, 179, 1);
    margin:0;
`

const AlbomTuri=styled.h2`
font-family: sans-serif;
font-size: 30px;
font-weight: 700;
line-height: 37.95px;
letter-spacing: -0.03em;
text-align: left;
color:#fff;
margin-top:50px;
margin-bottom:26px;
`



const Good:FC=()=> {
    const navigat=useNavigate();
    const [dt4, setDt4]=useState<any>();
    const [albom, setAlbom]=useState<any>();



    const tken=useSelector((a:any)=>a.token);

    async function Dta1() {
        try{

            const d=await fetch('https://api.spotify.com/v1/browse/categories',
            {
                headers:{
                    'Authorization':`Bearer ${tken}`
                }
            }
        )
             
        const dj=await d.json();
        const newD =dj.categories.items.splice(0, 4);
        setDt4(newD)

        }
        catch(err){
            console.log(err, 'sodir bodi');
            
        }

        
        
    }



   

    async function Dta() {
        try{

            const d=await fetch('https://api.spotify.com/v1/browse/featured-playlists',
            {
                headers:{
                    'Authorization':`Bearer ${tken}`
                }
            }
        )
        console.log(d);
        
        const dj=await d.json();
       
        setAlbom(dj.playlists.items);
        

        }
        catch(err){
            console.log(err, 'sodir bodi');
            
        }

        
        
    }



    useEffect(()=>{
        Dta1();
        
        Dta();
    }, [])
    
  return (
    <Gd>
        <Nvs>
        <Naviget><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(250,245,245,1)"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg></Naviget>
        <Naviget><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></Naviget>
        </Nvs>
        <H1>Good afternoon</H1>
        <W>
            {
                dt4?.map((a:any)=>{
                    return(
                        <Wf key={a.id}>
                        <img src={a.icons[0].url} width={82} alt="" />
                        <WfName>{a.name}</WfName>
                    </Wf>
                    )
                })
            }
        </W>


        <AlbomTuri>Made for you</AlbomTuri>
        <H>
            {
                albom?.map((a:any)=>{
                    return(
                        <Hf  onClick={()=>navigat(`/plays/${a.id}`)}>
                        <img src={a.images[0].url} width={182} alt="" />
                        <Hh3>{a.name}</Hh3>
                        <Hp>{a.description}</Hp>
                    </Hf>
                    )
                })
            }
        </H>



        


    </Gd>
  )
}

export default Good