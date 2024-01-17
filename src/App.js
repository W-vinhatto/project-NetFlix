import React from "react";
import Logo from "./assets/netflix-logo.png"
import BaldPipoca from "./assets/pipoca-balde.png"
import Tv from "./assets/tv.png"
import Video from "./assets/video-tv-0819.m4v"
import TvNetflixImg from "./assets/tv-netflix.png"
import TvNetflixSmart from "./assets/video-devices.m4v"
import BoyImg from "./assets/img-boy-netflix.png"
import MobileImg from "./assets/mobile-img-nrtflix.jpg"

import {
    ContBacgroud,
    Linear,
    Linear2,
    Header,
    ImgLogo,
    DivButton,
    Select,
    ButtonEnter,
    H2,
    P,
    AssideLogin,
    InputEmail,
    Button,
    Linear3,
    BacgroudTwo,
    BaldePipoca,
    ParagrafoBalde,
    ParaValue,
    ParaValue2,
    Link,
    BacgroudTree,
    H3,
    PBackgtwo,
    DivBacgtwo,
    Div2Bacgtwo,
    TvMovie,
    VideoTv,
    Div1Bacgtree,
    TvNetflix,
    VideoTvSmart,
    DivPBacTree,
    BacgroudFor,
    Div1BackFor,
    Div2BackFor,
    Boy,
    BacgroudFive,
    Div1BackFive,
    ImgMobile,
    Div2BackFive,
    BacgroudSix,
    ButtonPergun,
    H4,
    Footer,
    PFooter,
    AFooter,
    TellFooter,
    DivFooter,
    PAssinatura,
    DivPortrait,
    Quest
} from "./style"

const Quest1 = document.querySelectorAll("#one")

function quest1() {
   Quest1.styled.Quest.display = "none"
}


   
function App() {


    return (
        <ContBacgroud>
            <Linear>
                <Linear2>
                    <Header>
                        <ImgLogo alt="logo-netflix" src={Logo} />
                        <DivButton>
                            <Select>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-white absolute top-[10px] mx-3" data-name="Languages" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg>
                                <option lang="pt-br">Português</option>
                                <option lang="en">English</option>
                            </Select>

                            <a  href="https://www.netflix.com/br/login"><ButtonEnter>Entrar</ButtonEnter></a>
                        </DivButton>
                    </Header>

                    <DivPortrait>

                        <H2>Filmes, séries e muito mais, sem limites</H2>

                        <P>Assista onde quiser. Cancele quando quiser.</P>
                        <P>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</P>


                        <AssideLogin>
                            <InputEmail placeholder="Email"></InputEmail>
                            <a href="https://www.netflix.com/signup/password?locale=pt-BR"><Button>Vamos lá   &#62;</Button></a>
                        </AssideLogin>

                    </DivPortrait>
                </Linear2>
            </Linear>
            <Linear3>
                <BaldePipoca alt="balde-piopca" src={BaldPipoca} />

                <ParagrafoBalde>
                    <ParaValue>A Netflix que você adora por apenas R$ 18,90</ParaValue>
                    <ParaValue2>Assine o plano Padrão com anúncios.</ParaValue2>
                    <Link href="https://www.netflix.com/signup">Saiba mais   &#62;</Link>
                </ParagrafoBalde>
            </Linear3>

            <BacgroudTwo>

                <DivBacgtwo>
                    <H3>Aproveite na TV</H3>
                    <PBackgtwo>
                        Assista em Smart TVs,
                        PlayStation, Xbox, Chromecast,
                        Apple TV, aparelhos de Blu-ray e
                        outros dispositivos.
                    </PBackgtwo>

                </DivBacgtwo>

                <Div2Bacgtwo>
                    <TvMovie src={Tv} />

                    <VideoTv autoPlay muted loop>
                        <source src={Video} type="video/mp4" />
                    </VideoTv>
                </Div2Bacgtwo>

            </BacgroudTwo>

            <BacgroudTree>
                <Div1Bacgtree>
                    <TvNetflix src={TvNetflixImg} />

                    <VideoTvSmart autoPlay muted loop>
                        <source src={TvNetflixSmart} type="video/mp4" />
                    </VideoTvSmart>
                </Div1Bacgtree>

                <DivPBacTree>
                    <H3>Assista onde quiser</H3>
                    <PBackgtwo>
                        Assista a quantos filmes e séries
                        quiser no celular, tablet, laptop e TV.
                    </PBackgtwo>

                </DivPBacTree>
            </BacgroudTree>

            <BacgroudFor>
                <Div1BackFor>
                    <H3>Crie perfis para crianças</H3>

                    <PBackgtwo>
                        Deixe as crianças se aventurarem com seus
                        personagens favoritos em um espaço feito só para elas,
                        sem pagar a mais por isso.
                    </PBackgtwo>
                </Div1BackFor>

                <Div2BackFor>
                    <Boy src={BoyImg} />
                </Div2BackFor>

            </BacgroudFor>

            <BacgroudFive>
                <Div1BackFive>
                    <ImgMobile src={MobileImg} />

                </Div1BackFive>

                <Div2BackFive>
                    <H3>Baixe séries para assistir offline</H3>
                    <PBackgtwo>
                        Assista em um avião, trem ou submarino...
                    </PBackgtwo>
                </Div2BackFive>

            </BacgroudFive>

            <BacgroudSix>
                <H3>Perguntas frequentes</H3>

                <ButtonPergun onClick={quest1} >O que é a Netflix?<spam><p>+</p></spam></ButtonPergun>
                <Quest id="one">A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários 
                premiados em milhares de aparelhos conectados à internet.<br/><br/>Você pode assistir a quantos filmes e 
                séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. 
                A cada semana, adicionamos novas séries e filmes.</Quest>
                
                <ButtonPergun>Quanto custa a Netflix?<spam><p>+</p></spam></ButtonPergun>
                <ButtonPergun>Onde posso assistir?<spam><p>+</p></spam></ButtonPergun>
                <ButtonPergun>Como faço para cancelar?<spam><p>+</p></spam></ButtonPergun>
                <ButtonPergun>O que eu posso assistir na Netflix?<spam><p>+</p></spam></ButtonPergun>
                <ButtonPergun>A Netflix é adequada para crianças?<spam><p>+</p></spam></ButtonPergun>

                <H4>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</H4>
                
                <DivPortrait>
                
                <AssideLogin>
                    <InputEmail placeholder="Email"></InputEmail>
                    <a href="https://www.netflix.com/signup/password?locale=pt-BR"><Button>Vamos lá   &#62;</Button></a>
                </AssideLogin>

                </DivPortrait>
            </BacgroudSix>

            <Footer>

                <PFooter>Dúvidas? Ligue</PFooter><TellFooter type="tel">0800 591 2876</TellFooter>

                <DivFooter>
                    <AFooter href="https://help.netflix.com/en/node/412">Perguntas frequentes</AFooter>
                    <AFooter href="https://help.netflix.com/en/">Central de Ajuda</AFooter>
                    <AFooter href="https://www.netflix.com/br-en/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount">Conta</AFooter>
                    <AFooter href="https://media.netflix.com/en/">Media Center</AFooter>
                    <AFooter href="https://ir.netflix.net/ir-overview/profile/default.aspx">Relações com investidores</AFooter>
                    <AFooter href="https://jobs.netflix.com/">Carreiras</AFooter>
                    <AFooter href="https://www.netflix.com/br-en/redeem">Resgatar cartão pré-pago</AFooter>
                    <AFooter href="https://www.netflix.com/gift-cards">Comprar cartão pré-pago</AFooter>
                    <AFooter href="https://devices.netflix.com/en/">Formas de assistir</AFooter>
                    <AFooter href="https://help.netflix.com/legal/termsofuse">Termos de Uso</AFooter>
                    <AFooter href="https://help.netflix.com/legal/privacy">Privacidade</AFooter>
                    <AFooter href="https://www.netflix.com/br/">Preferências de cookies</AFooter>
                    <AFooter href="https://help.netflix.com/legal/corpinfo">Informações corporativas</AFooter>
                    <AFooter href="https://help.netflix.com/en/contactus">Entre em contato</AFooter>
                    <AFooter href="https://fast.com/">Teste de velocidade</AFooter>
                    <AFooter href="https://help.netflix.com/legal/notices">Avisos legais</AFooter>
                    <AFooter href="https://www.netflix.com/br/browse/genre/839338">Só na Netflix</AFooter>
                </DivFooter>
                <Select>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-white absolute top-[10px] mx-3" data-name="Languages" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg>
                    <option lang="pt-br">Português</option>
                    <option lang="en">English</option>
                </Select>
                <PAssinatura>Netflix Brasil</PAssinatura>
            </Footer>
        </ContBacgroud>
    )
}

export default App