import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            token =
              "ajlsdfjoweiutnwoeirwoifmsodf.ejasldfiumoiuasdoifuamosifunaosdiI0LTAyLTA4IDA0OjIzOjU1IFBNIiwidHJksdlfksdlfksdlfksdlkfsdlkfsdlkflsdkflsdkflsdkflsdkflsdkflkflsdkfsdlfklsdkflsdkflsdfkldfksdlfksdlfklsdkflsdkflsdfkNiZS1iaXJyLXBsdXMtcGF5wourweouirweoruweoruwoeiruweoiuweoiruweoruweoruiweoiubW91bnQiOiI1NzAwIiwiZXhwIjoxNzExMDM0NjQ1fQ.uJ_8Zi-zvpnqmzjlGpa3yPkk5AhKWbzJakJql5XfRFQ";
            console.log(`<appToken>${token}`);
            window.myJsChannel.postMessage(token);
          }}
        >
          pay {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
