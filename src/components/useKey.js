import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      //Listening to esc key press

      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
