import { useState } from "react";
import { getBucket } from "@extend-chrome/storage";

interface Store {
  point: number;
  person: string;
  color: string;
  name: string;
}

const store = getBucket<Store>("store");

function App() {
  const [count, setCount] = useState(0);

  const saveCount = () => {
    store.set({ point: count, person: "eetann", color: "green" });
  };

  const loadCount = async () => {
    const value = await store.get();
    setCount(value.point);
  };

  return (
    <div className="App">
      <h2>@extend-chrome/storage Example</h2>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <button onClick={saveCount}>Save point</button>
        <button onClick={loadCount}>Load point</button>
      </div>
    </div>
  );
}

export default App;
