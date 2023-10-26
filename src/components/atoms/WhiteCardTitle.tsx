import React, { PropsWithChildren } from "react";

export const WhiteCardTitle: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <h2 className="text-xl font-semibold mb-4 text-white md:text-left text-center">
      {children}
    </h2>
  );
};
