import { useEffect } from "react";

// close modal on click outside
const ModalClickOutside = (ref, currentState, updater) => {
  useEffect(() => {
    const handler = (e) => {
      if (currentState && !ref.current.contains(e.target)) {
        // if modal is open and click is outside modal
        updater();
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [ref, currentState, updater]);
};

export default ModalClickOutside;
