import { CardTitle } from "../atoms/CardTitle";
import { Card } from "../molecules/Card";
import { ShowcaseTile } from "../molecules/ShowcaseTile";
import { StackedCard } from "../molecules/StackedCard";
import MainTemplate from "../templates/MainTemplate";
import { ShimmerEveTemplate } from "../templates/ShimmerEveTemplate";
import { ShimmerWalleeTemplate } from "../templates/ShimmerWalleTemplate";
import { TbLego } from "react-icons/tb";
import { FaAward, FaRegLightbulb } from "react-icons/fa";
import { BsLightbulb, BsRobot, BsTrophy } from "react-icons/bs";
import { TfiRulerPencil } from "react-icons/tfi";

const MainPage: React.FC = () => {
  return (
    <MainTemplate
      title={
        <>
          <FaRegLightbulb className="me-2 ms-10" />
          Transformando Ideias em Inovação
        </>
      }
      teamInfo={
        <>
          <TbLego className="mx-2" fontSize="1.8rem" />A equipe Wallee é
          Excelência em LEGO, Estrutura e Sensores
        </>
      }
      showcases={[
        <ShowcaseTile
          title={
            <>
              <h3>Wall-e</h3>
              <BsRobot />
            </>
          }
          alt="Robô Wall-e com animação andando"
          key="walle"
        >
          <ShimmerWalleeTemplate />
        </ShowcaseTile>,
        <ShowcaseTile
          title={
            <>
              <h3>Eve</h3>
              <BsRobot />
            </>
          }
          alt="Robô Eve com animação escaneando objetos"
          key="eve"
        >
          <ShimmerEveTemplate />
        </ShowcaseTile>,
      ]}
      cards={[
        <StackedCard key="demo1">
          <CardTitle>
            <img
              src={process.env.PUBLIC_URL + "/demo1.jpeg"}
              alt="Demonstração do robô lego"
              width={300}
              height={100}
            />
          </CardTitle>
        </StackedCard>,
        <StackedCard key="demo2">
          <CardTitle>
            <img
              src={process.env.PUBLIC_URL + "/demo2.jpeg"}
              alt="Demonstração do robô lego"
              width={300}
              height={100}
            />
          </CardTitle>
        </StackedCard>,
        <StackedCard key="demo3">
          <CardTitle>
            <img
              src={process.env.PUBLIC_URL + "/demo3.jpeg"}
              alt="Demonstração do robô lego"
              width={300}
              height={100}
            />
          </CardTitle>
        </StackedCard>,
      ]}
      sectionTitle={
        <>
          <FaAward className="mx-2" /> Nossas Conquistas:
        </>
      }
      achievements={[
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-start mx-5 mt-2 mb-10">
            <Card
              title={
                <>
                  <BsTrophy fontSize="1.85rem" className="mx-2" />
                  Vencedores da Competição Regional
                </>
              }
            ></Card>
            <Card
              title={
                <>
                  <BsLightbulb fontSize="1.55rem" className="mx-2" />
                  Inovação em Robótica
                </>
              }
            ></Card>
            <Card
              title={
                <>
                  <TfiRulerPencil fontSize="1.5rem" className="mx-2 mb-1" />O
                  Melhor Design de Máquina
                </>
              }
            ></Card>
          </div>

          <img
            src={process.env.PUBLIC_URL + "/time.jpeg"}
            alt="Demonstração do robô lego"
            width={1000}
            height={300}
            className="w-full"
          />
        </>,
      ]}
    />
  );
};

export default MainPage;
