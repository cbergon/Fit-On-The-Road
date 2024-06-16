import React from "react";

function Sidebar() {
  const [isFolded, setIsFolded] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <div className="flex justify-start h-full">
      {/* MOBILE MENU OPEN BUTTON */}
      <button
        type="button"
        className="block lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        H
      </button>
      <div
        className={`m-4 flex-col justify-center gap-4 ${
          isFolded ? "w-16" : "w-screen h-full lg:w-64"
        } ${isOpen ? "flex" : "hidden"}`}
      >
        {/* DESKTOP VERSION */}
        <div className="hidden lg:flex-wrap gap-2 lg:flex">
          <h1 className="heading-1 text-center">Logo</h1>
          <button
            type="button"
            className=""
            onClick={() => setIsFolded(!isFolded)}
          >
            T
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
