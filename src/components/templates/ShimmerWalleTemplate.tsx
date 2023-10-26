import React, { Suspense, lazy } from "react";

const Walle = lazy(() => import("../organisms/Walle"));

export const ShimmerWalleeTemplate: React.FC = () => (
  <Suspense
    fallback={
      <div className="flex justify-center h-full">
        <div className="animate-pulse bg-gray-400 w-walleSize h-walleSize h-350 rounded-lg shadow-lg mb-8"></div>
      </div>
    }
  >
    <Walle />
  </Suspense>
);
