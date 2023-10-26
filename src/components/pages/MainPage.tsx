import { CardTitle } from "../atoms/CardTitle";
import { Card } from "../molecules/Card";
import { ShowcaseTile } from "../molecules/ShowcaseTile";
import { StackedCard } from "../molecules/StackedCard";
import MainTemplate from "../templates/MainTemplate";
import { ShimmerEveTemplate } from "../templates/ShimmerEveTemplate";
import { ShimmerWalleeTemplate } from "../templates/ShimmerWalleTemplate";

const MainPage: React.FC = () => {
  return (
    <MainTemplate
      teamInfo="A equipe Wallee: Excelência em LEGO, Estrutura e Sensores"
      showcase={[
        <ShowcaseTile title="Wall-e" key="walle">
          <ShimmerWalleeTemplate />
        </ShowcaseTile>,
        <ShowcaseTile title="Eve" key="eve">
          <ShimmerEveTemplate />
        </ShowcaseTile>,
      ]}
      cards={[
        <StackedCard>
          <CardTitle>
            <img
              src={process.env.PUBLIC_URL + "/demo1.jpeg"}
              alt="Demonstração do robô lego"
              width={300}
              height={100}
            />
          </CardTitle>
        </StackedCard>,
        <StackedCard>
          <CardTitle>
            <img
              src={process.env.PUBLIC_URL + "/demo2.jpeg"}
              alt="Demonstração do robô lego"
              width={300}
              height={100}
            />
          </CardTitle>
        </StackedCard>,
        <StackedCard>
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
      achievements={[
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-start mx-5 mt-2 mb-10">
            <Card
              title="Vencedores da Competição Regional"
              isLoading={false}
            ></Card>
            <Card title="Inovação em Robótica" isLoading={false}></Card>
            <Card title="Melhor Design de Máquina" isLoading={false}></Card>
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
