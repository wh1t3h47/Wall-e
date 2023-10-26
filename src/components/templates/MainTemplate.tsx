// MainTemplate.tsx
import React from "react";
import { CardTitle } from "../atoms/CardTitle";
import { SectionTitle } from "../atoms/SectionTitle";

interface MainTemplateProps {
  teamInfo: string;
  achievements: JSX.Element[];
  showcase: JSX.Element[];
  cards: JSX.Element[];
}

const MainTemplate: React.FC<MainTemplateProps> = ({
  teamInfo,
  achievements,
  showcase,
  cards,
}) => {
  return (
    <div className="bg-gradient-to-b from-blue-800 to-purple-600 min-h-screen text-white pb-5">
      {/* <Navbar /> */}
      <header className="text-center pt-20">
        <h1 className="text-4xl font-bold mb-4">
          Transformando Ideias em Inovação
        </h1>
        <p className="text-xl mb-8">{teamInfo}</p>
      </header>
      <section className="container mx-auto my-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{showcase}</div>
      </section>
      <section className="container mx-auto my-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{cards}</div>
      </section>
      <section className="container mx-auto my-16 px-4">
        <div className="flex justify-center">
          <SectionTitle>Nossas Conquistas:</SectionTitle>
        </div>
        <div className="grid">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-200 p-4 rounded-lg shadow-lg mb-4"
            >
              <CardTitle>{achievement}</CardTitle>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainTemplate;
