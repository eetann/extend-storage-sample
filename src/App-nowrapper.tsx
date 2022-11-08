import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const saveCount = () => {
    chrome.storage.local.set({ point: count });
  };

  const loadCount = () => {
    chrome.storage.local.get(["point"], function (result) {
      setCount(result.point);
    });
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
