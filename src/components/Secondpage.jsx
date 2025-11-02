import React, { lazy, Suspense, memo } from "react";

// 💤 Lazy-load big components for faster initial paint
const Sidebar = lazy(() => import("./Sidebar"));
const Aboutpage = lazy(() => import("./Aboutpage"));

const Secondpage = () => {
  return (
    <div className="relative">
      {/* ⚡ Sidebar - stays sticky for smoother scroll */}
      <div
        className="SideBarMenu sticky md:top-10"
        style={{ zIndex: 1, willChange: "transform" }}
      >
        <Suspense fallback={null}>
          <Sidebar />
        </Suspense>
      </div>

      {/* ⚡ About Section */}
      <div id="about">
        <Suspense fallback={null}>
          <Aboutpage />
        </Suspense>
      </div>
    </div>
  );
};

export default memo(Secondpage);
