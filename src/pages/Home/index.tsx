import Header from "../../components/Header";
import HeaderNav from "../../components/HeaderNav";
import TitlePage from "../../components/TitlePage";

import {
  BeDoneContent,
  BeDoneSection,
  BeDoneSectionTitle,
  BeDoneWrapperInfos,
  ButtonUp,
  Carrosel,
  Container,
  FirstSection,
  Gallery,
  HowWorkSection,
  HowWorkSectionTitle,
  IconBath,
  IconBed,
  IconKitchen,
  Icons,
  Info,
  InfoDetails,
  ThirtySection,
  VideoSection,
  VideoSectionTitle,
  WrapperImages,
} from "./styles";

import GalleryImg1 from "../../asssets/images/home2.png";
import GalleryImg2 from "../../asssets/images/home3.png";
import GalleryImg3 from "../../asssets/images/home4.png";
import GalleryImg4 from "../../asssets/images/home5.png";
import DoubleImg1 from "../../asssets/images/home6.png";
import DoubleImg2 from "../../asssets/images/home7.png";
import Carrosel1 from "../../asssets/images/home8.png";
import Carrosel2 from "../../asssets/images/home9.png";
import Carrosel3 from "../../asssets/images/home10.png";
import Video from "../../asssets/videos/home.mp4";

import FirstSectionImg from "../../asssets/images/home1.png";

import { useTheme } from "../../providers/Theme";
import { useEffect } from "react";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Draggable } from "gsap/Draggable";

const HomePage = () => {
  const [beBoneIndex, setBeBoneIndex] = useState(0);

  const { handleBackground } = useTheme();

  const ImageOne = useRef<HTMLImageElement>(null);
  const FirstSectionContent = useRef<HTMLDivElement>(null);

  const ImageTwo = useRef<HTMLImageElement>(null);
  const ImageThree = useRef<HTMLImageElement>(null);
  const ImageFour = useRef<HTMLImageElement>(null);
  const ImageFive = useRef<HTMLImageElement>(null);
  const ImageSix = useRef<HTMLImageElement>(null);
  const ImageSeven = useRef<HTMLImageElement>(null);

  const HowWorkTitle = useRef<HTMLHeadingElement>(null);
  const HowWorkSeparator = useRef<HTMLDivElement>(null);
  const HowWorkSubTitle = useRef<HTMLParagraphElement>(null);

  const BeDoneTitle = useRef<HTMLHeadingElement>(null);
  const BeDoneSeparator = useRef<HTMLDivElement>(null);
  const BeDoneCarrosel = useRef<HTMLDivElement>(null);
  const BeDoneIcons = useRef<HTMLDivElement>(null);
  const BeDoneText = useRef<HTMLDivElement>(null);

  const VideoElement = useRef<HTMLVideoElement>(null);
  const VideoTitle = useRef<HTMLHeadingElement>(null);

  const ArrowBackToTop = useRef<HTMLDivElement>(null);
  const ContainerPage = useRef<HTMLElement>(null);

  useEffect(() => {
    handleBackground(false);
    setInterval(() => {
      if (beBoneIndex <= 1) {
        setBeBoneIndex(beBoneIndex + 1);
      } else {
        setBeBoneIndex(0);
      }
    }, 6000);

    // gsap.timeline()
    gsap.registerPlugin(TextPlugin, ScrollTrigger, Draggable);

    gsap.from(ImageOne.current, {
      opacity: 0,
      translateX: -500,
    });
    gsap.from(FirstSectionContent.current, {
      opacity: 0,
      translateX: 300,
    });

    gsap.from(HowWorkTitle.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: HowWorkSeparator.current,
        start: "center 105%",
        scrub: 1,
        end: "center 50%",
      },
    });

    gsap.from(HowWorkSeparator.current, {
      opacity: 0,
      translateX: 100,
      scrollTrigger: {
        trigger: HowWorkSeparator.current,
        start: "center 100%",
        scrub: 1,
        end: "center 80%",
      },
    });

    gsap.from(BeDoneTitle.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: BeDoneSeparator.current,
        start: "center 105%",
        scrub: 1,
        end: "center 50%",
      },
    });

    gsap.from(BeDoneSeparator.current, {
      opacity: 0,
      translateX: -100,
      scrollTrigger: {
        trigger: BeDoneSeparator.current,
        start: "center 100%",
        scrub: 1,
        end: "center 80%",
      },
    });

    gsap.from(HowWorkSubTitle.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: HowWorkSubTitle.current,
        start: "center 100%",
        scrub: 1,
        end: "center 60%",
      },
    });

    gsap.from(ImageTwo.current, {
      opacity: 0,
      translateY: 400,
      scrollTrigger: {
        trigger: ImageTwo.current,
        scrub: 2,
        start: "top 110%",
        end: "top 90%",
      },
    });

    gsap.from(ImageThree.current, {
      opacity: 0,
      translateY: 400,
      scrollTrigger: {
        trigger: ImageThree.current,
        scrub: 3,
        start: "top 100%",
        end: "top 90%",
      },
    });

    gsap.from(ImageFour.current, {
      opacity: 0,
      translateY: 400,

      scrollTrigger: {
        trigger: ImageFour.current,
        scrub: 1,
        start: "top 150%",
        end: "top 110%",
      },
    });

    gsap.from(ImageFive.current, {
      opacity: 0,
      translateY: 400,

      scrollTrigger: {
        trigger: ImageFive.current,
        scrub: 1,
        start: "top 140%",
        end: "top 110%",
      },
    });

    gsap.from(ImageSix.current, {
      scale: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: ImageSix.current,
        scrub: 1,
        start: "top 90%",
        end: "top 70%",
      },
    });

    gsap.from(ImageSeven.current, {
      scale: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: ImageSeven.current,
        scrub: 2,
        start: "top 90%",
        end: "top 70%",
      },
    });
    gsap.from(BeDoneCarrosel.current, {
      opacity: 0,
      translateX: -200,
      scrollTrigger: {
        trigger: BeDoneCarrosel.current,
        scrub: 1,
        start: "top 90%",
        end: "top 50%",
      },
    });
    gsap.from(BeDoneIcons.current, {
      opacity: 0,
      translateX: -200,
      scrollTrigger: {
        trigger: BeDoneCarrosel.current,
        scrub: 2,
        start: "top 90%",
        end: "top 50%",
      },
    });
    gsap.from(BeDoneText.current, {
      opacity: 0,
      translateX: -200,
      scrollTrigger: {
        trigger: BeDoneCarrosel.current,
        scrub: 3,
        start: "top 90%",
        end: "top 50%",
      },
    });

    gsap.from(VideoElement.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: VideoElement.current,
        scrub: 3,
        start: "top 80%",
        end: "top 30%",
      },
    });

    gsap.from(VideoTitle.current, {
      opacity: 0,
      translateX: 300,
      delay: 1,
      scrollTrigger: {
        trigger: VideoTitle.current,
        scrub: 3,
        start: "top 90%",
        end: "bottom 90%",
      },
    });

    Draggable.create(ArrowBackToTop.current, {
      type: "x,y",
      edgeResistance: 0.65,
      bounds: { minX: 10, maxX: -150, minY: 10, maxY: -200 },
      onClick: () => {
        window.scrollTo(0, 0);
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TitlePage title="Home" />
      <Header>
        <HeaderNav />
      </Header>
      <Container ref={ContainerPage}>
        <FirstSection>
          <div ref={FirstSectionContent}>
            <h2>
              A limpeza conectada, <br />
              por uma vida mais conectada.
            </h2>
            <p>
              Encontre de forma r??pida e segura os melhores profissionais para o
              seu lar
            </p>
          </div>
          <img src={FirstSectionImg} alt="Cozinha limpa" ref={ImageOne} />
        </FirstSection>
        <HowWorkSection>
          <HowWorkSectionTitle>
            <h2 ref={HowWorkTitle}>Veja como funciona</h2>
            <div className="separator" ref={HowWorkSeparator}></div>
            <p ref={HowWorkSubTitle}>
              Tenha um servi??o de qualidade, de forma descomplicada e segura.
              Agende conosco sua limpeza!
            </p>
          </HowWorkSectionTitle>

          <Gallery>
            <div ref={ImageTwo}>
              <img src={GalleryImg1} alt="" />
              <div className="content">
                <h3>Escolha o servi??o do seu jeito</h3>
                <p>
                  Ao solicitar o servi??o, voc?? configura o servi??o do jeito que
                  precisar, escolhando quantidade horas e a quantidade de
                  c??modos a serem limpos.
                </p>
              </div>
            </div>
            <div ref={ImageThree}>
              <img src={GalleryImg2} alt="" />
              <div className="content">
                <h3>No endere??o e na data combinados</h3>
                <p>
                  Pode contratar o servi??o que quiser; na hora que quiser,
                  diretamente no nosso site. E no dia combinado, estaremos em
                  sua resid??ncia.
                </p>
              </div>
            </div>
            <div ref={ImageFour}>
              <img src={GalleryImg3} alt="" />
              <div className="content">
                <h3>Conectamos os melhores profissionais</h3>
                <p>
                  Somente os melhores prestadores continuam na nossa plataforma,
                  mediante as avalia????es de seus clientes.
                </p>
              </div>
            </div>
            <div ref={ImageFive}>
              <img src={GalleryImg4} alt="" />
              <div className="content">
                <h3>Sem dores de cabe??a</h3>
                <p>
                  N??o precisa perder tempo procurando indica????es, perguntando
                  por telefones de profissionais, fazendo entrevistas e pedindo
                  or??amentos. N??s fazemos tudo isso por voc??.
                </p>
              </div>
            </div>
          </Gallery>
        </HowWorkSection>
        <ThirtySection>
          <div>
            <h4>
              Por meio da tecnologia e da intelig??ncia do nosso time, te
              ajudamos a contratar profissionais que realizam limpezas
              residenciais e servi??o de passadoria.
            </h4>
          </div>
          <WrapperImages>
            <div ref={ImageSix}>
              <img src={DoubleImg1} alt="" />
            </div>
            <div ref={ImageSeven}>
              <img src={DoubleImg2} alt="" />
            </div>
          </WrapperImages>
        </ThirtySection>
        <BeDoneSection>
          <BeDoneSectionTitle>
            <h2 ref={BeDoneTitle}>Como iremos deixar seu lar</h2>
            <div className="separator" ref={BeDoneSeparator}></div>
          </BeDoneSectionTitle>
          <BeDoneContent>
            <BeDoneWrapperInfos>
              <Icons ref={BeDoneIcons}>
                <IconBed
                  active={beBoneIndex === 0}
                  onClick={() => setBeBoneIndex(0)}
                />
                <IconKitchen
                  active={beBoneIndex === 1}
                  onClick={() => setBeBoneIndex(1)}
                />
                <IconBath
                  active={beBoneIndex === 2}
                  onClick={() => setBeBoneIndex(2)}
                />
              </Icons>
              <Info index={beBoneIndex} ref={BeDoneText}>
                <div>
                  <InfoDetails active={beBoneIndex === 0}>
                    <h2>Quartos, sala de estar e ??reas comuns</h2>
                    <p>
                      Tirar o p??, varrer, limpar as superf??cies do piso,
                      espelhos, batentes, mov??is e retirar lixo.
                    </p>
                  </InfoDetails>

                  <InfoDetails active={beBoneIndex === 1}>
                    <h2>Cozinha</h2>
                    <p>
                      Lavar a lou??a, limpar o exterior do fog??o e da geladeira,
                      interior/exterior de microondas, limpar as superf??cies do
                      piso, mov??is, bancada e retirar lixo.
                    </p>
                  </InfoDetails>
                  <InfoDetails active={beBoneIndex === 2}>
                    <h2>Banheiro(s)</h2>
                    <p>
                      Lavar e sanitizar banheiro, chuveiro, pia, banheira,
                      retirar o p??, limpar as superf??cies de piso, espelhos,
                      batentes e retirar lixo.
                    </p>
                  </InfoDetails>
                </div>
              </Info>
            </BeDoneWrapperInfos>
            <Carrosel index={beBoneIndex} ref={BeDoneCarrosel}>
              <div>
                <img src={Carrosel1} alt="" />
                <img src={Carrosel2} alt="" />
                <img src={Carrosel3} alt="" />
              </div>
            </Carrosel>
          </BeDoneContent>
        </BeDoneSection>
        <VideoSection>
          <div>
            <video loop autoPlay muted ref={VideoElement}>
              <source src={Video} type="video/mp4" />
            </video>
          </div>
          <VideoSectionTitle>
            <h2 ref={VideoTitle}>Conte com a gente na sua pr??xima limpeza!</h2>
          </VideoSectionTitle>
        </VideoSection>
        <ButtonUp ref={ArrowBackToTop}>
          <FaAngleUp />
        </ButtonUp>
      </Container>
    </>
  );
};

export default HomePage;
