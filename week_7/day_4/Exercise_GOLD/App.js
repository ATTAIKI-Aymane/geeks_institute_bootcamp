import React, { useState } from "react";
import Modal from "./Modal";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [errorInfo, setErrorInfo] = useState(null);

  return (
    <ErrorBoundary>
      {(occurError, hasError) => (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          
          <button
            onClick={() => {
              occurError();
              setShowModal(true);
              setErrorInfo("An error has occurred!");
            }}
          >
            Trigger Error
          </button>

          {showModal && hasError && (
            <Modal closeModal={() => setShowModal(false)} />
          )}
        </div>
      )}
    </ErrorBoundary>
  );
}

export default App;