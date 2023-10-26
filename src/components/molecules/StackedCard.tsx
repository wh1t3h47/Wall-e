import { PropsWithChildren } from "react";

export const StackedCard = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="relative">
      <div className="absolute top-8 left-3 w-full h-[95%] rounded-lg bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 z-10"></div>
      <div className="relative bg-white rounded-lg shadow-lg p-6 my-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl z-20 flex justify-center">
        {children}
      </div>
    </div>
  );
};
