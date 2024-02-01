import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  const colorObj = {
    Red: "red",
    Green: "green",
    Yellow: "yellow",
    Olive: "olive",
    Black: "black",
    Orange: "orange",
    Indigo: "indigo",
    Blue: "blue",
  };
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            {Object.keys(colorObj).map((key) => (
              <button
                key={key}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{ backgroundColor: colorObj[key] }}
                onClick={() => setColor(colorObj[key])}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
