import styled from "styled-components";
import bacgroud from "./assets/netflixBacgroud.jpg"




export const ContBacgroud = styled.div`
    background: url("${bacgroud}");
    width: 100%;
    height: 86vh;
    background-size: cover ;
    z-index: -1;

`

export const Linear = styled.div`
    background: rgb(2,3,5);
    background: linear-gradient(85deg, rgba(2,3,5,0.7175391274673932) 0%, rgba(247,247,247,0) 100%);

    width: 100%;
    height:  86vh;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        height:  60vh;
    }
`

export const Linear2 = styled.div`
    background: rgb(2,3,5);
    background: linear-gradient(261deg, rgba(2,3,5,0.7175391274673932) 0%, rgba(247,247,247,0) 100%);

    width: 100%;
    height:  86vh;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        height:  60vh;
    }
`

export const Header = styled.div`
    width: 100%;
    padding: 2em 25em ;
    display: flex;
    justify-content: space-between;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        padding: 20px 25px;
    }
`

export const DivButton = styled.div`
    display: flex;
    gap: 2rem;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        gap: 11px;
    }
`


export const Select = styled.select`
    width: 11rem;
    height: 2rem;
    border: solid 1px rgb(94,95,95);
    padding: 0px 35px;
    border-radius: 3px;
    background: none;

    color: white;
    font-size: 18px;

    option {
        color: #000000;
    }

    @media screen and (orientation: portrait) and (max-width: 460px) {
        width: 0px;
        margin-left: 25px;
    }
`

export const ButtonEnter = styled.button`
    background-color: rgb(229,9,20);

    color: #ffffff;
    border: none;
    width: 5rem;
    height: 2rem;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;

    cursor: pointer;

    &:hover{
        opacity: 0.9;
    }

    &:active{
        opacity: 0.7;
    }


    @media screen and (orientation: portrait) and (max-width: 460px) {
        width: 4rem;
        font-size: 14px;
    }
`

export const ImgLogo = styled.img`
    width: 12%;
    height: 26%;
   

    @media screen and (orientation: portrait) and (max-width: 460px) {
        width: 26%;
    }
`

export const DivPortrait = styled.div`
    @media screen and (orientation: portrait) and (max-width: 460px) {
        width: 240px;
        display: block;
        margin: auto;
    }
`

export const H2 = styled.h2`
    font-size: 57px;
    color: #ffffff;
    font-weight: bolder;
    text-align: center;
    margin-top: 10rem;
    letter-spacing: -3px;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        font-size: 32px;
        letter-spacing: normal;
        margin-top: 4rem;
    }
`

export const P = styled.p`
     color: #ffffff;
     font-size: 25px;
     text-align: center;
     margin-top: 30px;
     font-weight: bolder;
     letter-spacing: -1px;

     @media screen and (orientation: portrait) and (max-width: 460px) {
        font-size: 18px;
        letter-spacing: normal;
        margin-top: 20px;
    }
`

export const AssideLogin = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        flex-wrap: wrap;
    }
`

export const InputEmail = styled.input`
    width: 23rem;
    height: 3.5rem;
    background-color: 	rgb(0,0,0, 0.5);
    padding: 20px;
    border: solid 1px rgb(94,95,95);
    border-radius: 3px;
    font-size: 18px;
    color: rgb(255,255,255);

    @media screen and (orientation: portrait) and (max-width: 460px) {
        width: auto;
        height: 1rem;
    }
`

export const Button = styled.button`
    background-color: rgb(229,9,20);

    color: #ffffff;
    border: none;
    width: 13rem;
    height: 3.5rem;
    border-radius: 5px;
    font-size: 23px;

    cursor: pointer;

    &:hover{
        opacity: 0.9;
    }

    &:active{
        opacity: 0.7;
    }

    @media screen and (orientation: portrait) and (max-width: 460px) {
        block-size: 48px;
        font-size: 18px;
        width: 138px;
    }
`

export const Linear3 = styled.div`
    background: rgb(251,63,67);
    background: radial-gradient(circle, 
        rgba(251,63,67,1) 13%, 
        rgba(12,32,129,0.9640377269071692) 67%, 
        rgba(0,0,0,1) 92%);
    width: 90%;
    height: 8rem;
    position: absolute;
    left: 5%;
    top: 78%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        top: 61%;
        block-size: 197px;
        padding: 10px 0 0 30px;
    }
`

export const ParagrafoBalde = styled.div`
    height: 7rem;
   
`


export const BaldePipoca = styled.img`
   white-space: 80px;
   height: 80px;
   background: none;

   @media screen and (orientation: portrait) and (max-width: 460px) {
    position: absolute;
    left: 26px;
    top: -36px;
    }
`


export const ParaValue = styled.p`
    color: #ffffff;
    font-size: 25px;
    margin-top: 10px;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        font-size: 20px;
        font-weight: 400;
        width: 60%;
    }
`

export const ParaValue2 = styled.p`
    color: #ffffff;
    font-size: 20px;
    margin: 5px 0;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        font-size: 16px;
        font-weight: 400;
        width: 60%;
    }
`

export const Link = styled.a`
    color: #448EF4;
    font-size: 25px;
    font-weight: bolder;
    margin-top: 20px;

    cursor: pointer;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        font-size: 22px;
        font-weight: 400;
    }
`



export const BacgroudTwo = styled.div`
    background-color: #000000;
    width: 100%;
    height: 40rem;
    display: flex;

    @media screen and (orientation: portrait) and (max-width: 460px) {
       flex-direction: column;
    }
`


export const DivBacgtwo = styled.div`
    width: 48%;
    padding-top: 10rem;
    padding-left: 16rem;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        padding: 11rem 0 0;
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 100%;
    }
`

export const H3 = styled.h3`
    font-size: 57px;
    color: #ffffff;
    font-weight: bolder;
    letter-spacing: -3px;
    margin-bottom: 20px;

    
    @media screen and (orientation: portrait) and (max-width: 460px) {
        font-size: 32px;
        margin-top: 50px;
        letter-spacing: normal;
        text-align: center;
    }
`

export const PBackgtwo = styled.p`
    font-size: 25px;
    color: #ffffff;
    font-weight: bolder;
    margin-top: 10px;
    width: 80%;


    @media screen and (orientation: portrait) and (max-width: 460px) {
        font-size: 18px;
        width: 90%;
        display: block;
        margin: 0 auto;
        text-align: center;
    }
`


export const Div2Bacgtwo = styled.div`
    width: 50%;
    padding-top: 4rem;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        width: 100%;
        padding: 0;
        display: flex;
        justify-content: center;
    }
`

export const TvMovie = styled.img`
    position: absolute;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        width: 350px;
    }
` 

export const VideoTv = styled.video`
    margin: 6rem 0 0 5rem;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        width: 340px;
        margin: 37px 0;
    }
`



export const BacgroudTree = styled.div`
    background-color: #000000;
    width: 100%;
    height: 40rem;
    border-top: solid 4px rgb(94,95,95);


    @media screen and (orientation: portrait) and (max-width: 460px) {
        display: flex;
        flex-direction: column;
    }

`

export const Div1Bacgtree = styled.div`
    width: 50%;
    padding-top: 4rem;
    position: absolute;
    right: 50%;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        padding: 0;
        right: 0;
        top: 90rem;
        width: 100%;
        display: flex;
        justify-content: center;
    }
`


export const TvNetflix = styled.img`
    position: absolute;
    right: 0;
    z-index: 2;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        width: 350px;
        right: auto;
    }
`


export const VideoTvSmart = styled.video`
    width: 26rem;
    position: absolute;
    right: 7rem;
    z-index: 1;
    top: 7rem;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        width: 223px;
        position: static;
        margin-top: 20px;
    }
`

export const DivPBacTree = styled.div`
    width: 49%;
    position: absolute;
    right: 0px;
    padding-top: 14rem;


    @media screen and (orientation: portrait) and (max-width: 460px) {
        position: static;
        padding: 0;
        width: 100%;
    }
`




export const BacgroudFor = styled.div`
    background-color: #000000;
    width: 100%;
    height: 40rem;
    border-top: solid 4px rgb(94,95,95);;
    display: flex;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        flex-direction: column;
        height: 35rem;
    }
`

export const Div1BackFor = styled.div`
    width: 30%;
    padding-top: 14rem;
    margin-left: 20%;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        width: 100%;
        padding: 0;
        margin: 0;
    }
`

export const Div2BackFor = styled.div`
    width: 50%;
    padding-top: 9rem;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        width: 100%;
        padding: 0;
        display: flex;
        justify-content: center;
        margin-top: 59px;
    }
`

export const Boy = styled.img`
      @media screen and (orientation: portrait) and (max-width: 460px) {
        width: 370px;
    }
`


export const BacgroudFive = styled.div`
    background-color: #000000;
    width: 100%;
    height: 40rem;
    border-top: solid 4px rgb(94,95,95);;
    display: flex;   

    @media screen and (orientation: portrait) and (max-width: 460px) {
        justify-content: center;
        height: 35rem;
    }
`

export const Div1BackFive = styled.div`
    width: 50%;
    padding-top: 5rem;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        width: 100%;
        position: absolute;
        top: 157rem;
        display: flex;
        justify-content: center;
    }
`

export const ImgMobile = styled.img`
    position: absolute;
    right: 50%;

    @media screen and (orientation: portrait) and (max-width: 460px) {
       position: static;
       width: 370px;
    }
`

export const Div2BackFive = styled.div`
    width: 50%;
    padding-top: 14rem;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        width: 100%;
        padding: 0;
    }
`


export const BacgroudSix = styled.div`
    background-color: #000000;
    width: 100%;
    border-top: solid 4px rgb(94,95,95);;
    display: flex;
    align-items: center;
    padding: 6rem;
    flex-direction: column;
    gap: 9px;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        padding: 0;
        gap: 5px;
        height: 44rem;
    }
`

export const ButtonPergun = styled.button`
    width: 64%;
    height: 5.5rem;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    color: #ffffff;
    background-color: #2D2D2D;
    border: none;
    font-size: 27px;

    cursor: pointer;

    spam {
        font-size: 50px;
    }

    &:hover{
        background-color: #414141;
    }

    @media screen and (orientation: portrait) and (max-width: 460px) {
        width: 69%;
        height: 3rem;
        font-size: 12px;

        spam {
            font-size: 27px;
    }
    }
`

export const H4 = styled.h4`
    font-size: 24px;
    color: #ffffff;
    font-weight: bolder;
    margin: 30px 0 -6px;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        font-size: 20px;
        width: 293px;
        text-align: center;
        font-weight: 200;
    }
   
`

export const Footer = styled.div`
    background-color: #000000;
    width: 100%;
    border-top: solid 4px rgb(94,95,95);
    padding: 6rem 25rem 6rem 20rem;


    @media screen and (orientation: portrait) and (max-width: 460px) {
        padding: 10px 0;
    }
`

export const PFooter = styled.p`
    color: #ffffff;
    font-size: 17px;
    font-weight: bolder;
    letter-spacing: 1px;
    display: inline;

    @media screen and (orientation: portrait) and (max-width: 460px) {
       font-weight: 200;
       letter-spacing: normal;
       margin-left: 20px;
    }
`

export const TellFooter = styled.a`
    color: #ffffff;
    font-size: 15px;
    font-weight: bolder;
    letter-spacing: 1px;
    margin-left: 15px;
    margin-right: 53%;
    text-decoration: underline;
    cursor: pointer;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        margin-right: 0 ;
    }
`

export const DivFooter = styled.div`
    width: 100%;
    margin-top: 20px;
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 30px;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        padding: 12px 35px;
    }
`

export const AFooter = styled.a`
    color: #B3B3B3;
    font-size: 15px;
    font-weight: bolder;
    letter-spacing: 1px;
    margin-top: 10px;
    text-decoration: underline;
    width: 250px;
    cursor: pointer;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        width: 144px;
        font-size: 12px;
    }
`

export const PAssinatura = styled.p`
    color: #B3B3B3;
    font-size: 15px;
    margin-top: 20px;

    @media screen and (orientation: portrait) and (max-width: 460px) {
        margin-left: 25px;
    }
`

export const Quest = styled.div`
    width: 64%;
    text-align: left;
    display: none;
    justify-content: space-between;
    align-items: center;
    padding: 11px 30px;
    color: #ffffff;
    background-color: #2D2D2D;
    border: none;
    font-size: 27px;

    cursor: pointer;

    &:hover{
        background-color: #414141;
    }

    @media screen and (orientation: portrait) and (max-width: 460px) {
        width: 69%;
        font-size: 12px;
    }
`
