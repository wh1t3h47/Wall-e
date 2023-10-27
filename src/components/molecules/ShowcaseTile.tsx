import React, { PropsWithChildren } from "react";

interface ShowcaseTileProps {
  imageSrc?: string;
  title: JSX.Element;
  alt?: string;
}

export const ShowcaseTile = ({
  imageSrc,
  title,
  alt = "",
  children = null,
}: PropsWithChildren<ShowcaseTileProps>) => (
  <div className="bg-gradient-to-r from-purple-700 via-blue-800 to-indigo-500 p-4 rounded-lg shadow-lg mb-4 relative hover:shadow-2xl transform hover:scale-105">
    {imageSrc && (
      <img src={imageSrc} className="mb-2 rounded-lg" {...{ alt }} />
    )}
    <div className="text-lg font-semibold text-primary flex justify-between">
      {title}
    </div>
    {imageSrc && (
      <div className="absolute inset-0 border-b-2 border-r-2 border-dashed border-gradient-primary transition duration-300 ease-in-out opacity-95 hover:opacity-100"></div>
    )}
    {children}
  </div>
);
