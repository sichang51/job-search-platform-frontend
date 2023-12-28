import { Header } from "./Header";
import { Content } from "./Content";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [sideNavVisible, setSideNavVisible] = useState(false);

  return (
    <div>
      <BrowserRouter className="row">
        <Header show={sideNavVisible} className="col flex-grow-1" />
        <button
          type="button"
          id="sidebarCollapse"
          className="btn btn-info"
          onClick={() => setSideNavVisible(!sideNavVisible)}
        >
          <i class="fas fa-align-left"></i>
          <span>Toggle Sidebar</span>
        </button>
        <div id="main" className="col flex-grow-1">
          <Content />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
