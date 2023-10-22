import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-full">
          <button
            className="outline-none px-4 py-1 shadow-sm text-white rounded-full "
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("Red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 shadow-sm text-white rounded-full "
            style={{ backgroundColor: "Green" }}
            onClick={() => setColor("Green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 shadow-sm text-white rounded-full "
            style={{ backgroundColor: "Blue" }}
            onClick={() => setColor("Blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 shadow-sm text-white rounded-full "
            style={{ backgroundColor: "Violet" }}
            onClick={() => setColor("Violet")}
          >
            Violet
          </button>
          <button
            className="outline-none px-4 py-1 shadow-sm text-white rounded-full "
            style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          >
            Olive
          </button>
          <button
            className="outline-none px-4 py-1 shadow-sm text-white rounded-full "
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
