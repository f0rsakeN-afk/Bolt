import { useEffect, useState } from "react";

export const useWebContainer = () => {
  const [webContainer, setWebContainer] = useState();
  async function main() {
    const webContainerInstance = await webContainer.boot();
    setWebContainer(webContainerInstance);
  }
  useEffect(() => {
    main();
  }, []);
  return webContainer;
};
