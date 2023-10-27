import React, { PropsWithChildren } from "react";
import { CardContent } from "../atoms/CardContent";
import { WhiteCardTitle } from "../atoms/WhiteCardTitle";

interface CardProps {
  title: JSX.Element;
  widthClasses?: string;
}

const Card: React.FC<CardProps & PropsWithChildren> = ({
  title,
  children = null,
}) => {
  return (
    <div className="bg-gradient-to-r shadow-blue-400 shadow-xl from-purple-700 via-blue-800 to-indigo-500 shadow-lg rounded-lg sm:p-8 sm:m-5 my-5 py-8 mx-2 px-3 w-full sm:w-11/12 md:w-10/12 lg:w-auto">
      <WhiteCardTitle>{title}</WhiteCardTitle>
      {children && <CardContent>{children}</CardContent>}
    </div>
  );
};

export { Card };
