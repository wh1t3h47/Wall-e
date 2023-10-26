import React, { Suspense, lazy } from "react";

const Eve = lazy(() => import("../organisms/Eve"));

export const ShimmerEveTemplate: React.FC = () => (
  <Suspense
    fallback={
      <div className="flex justify-center h-full">
        <div className="animate-pulse bg-gray-400 w-eveWidth h-350 rounded-lg shadow-lg mb-8"></div>
      </div>
    }
  >
    <Eve />
  </Suspense>
);
