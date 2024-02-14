import { useEffect } from "react";

const useAppendScript = ({
  srcId = "",
  src = "",
  type = "",
  removeOnUnmount = false,
}) => {
  useEffect(() => {
    const scriptExist = document.getElementById(`${srcId}`);

    const script = document.createElement("script");
    if (!scriptExist) {
      script.id = `${srcId}`;
      script.src = `${src}`;
      script.type = `${type}`;

      document.body.appendChild(script);
    }

    return () => {
      if (removeOnUnmount) {
        document.body.removeChild(script);
      }
    };
  }, [srcId]);
};

export default useAppendScript;
