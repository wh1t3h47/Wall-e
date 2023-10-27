// MainTemplate.tsx
import React from "react";
import { CardTitle } from "../atoms/CardTitle";
import { SectionTitle } from "../atoms/SectionTitle";

interface MainTemplateProps {
  title: JSX.Element;
  teamInfo: JSX.Element;
  achievements: JSX.Element[];
  showcases: JSX.Element[];
  sectionTitle: JSX.Element;
  cards: JSX.Element[];
}

const MainTemplate: React.FC<MainTemplateProps> = ({
  title,
  teamInfo,
  achievements,
  showcases,
  sectionTitle,
  cards,
}) => {
  return (
    <div className="bg-gradient-to-b from-blue-800 to-purple-600 min-h-screen text-white pb-5">
      {/* <Navbar /> */}
      <header className="text-center pt-20">
        <h1 className="text-4xl font-bold mb-4 flex justify-center items-baseline mx-2">
          {title}
        </h1>
        <p className="text-xl mb-8 flex justify-center mx-2">{teamInfo}</p>
      </header>
      <section className="container mx-auto my-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{showcases}</div>
      </section>
      <section className="container mx-auto my-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{cards}</div>
      </section>
      <section className="container mx-auto my-16 px-4">
        <div className="flex justify-center">
          <SectionTitle>{sectionTitle}</SectionTitle>
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
