import React, { PropsWithChildren } from "react";

const SectionTitle: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <h1 className="text-3xl font-semibold mb-9 pb-1 md:text-left text-center">
      {children}
    </h1>
  );
};

export { SectionTitle };
