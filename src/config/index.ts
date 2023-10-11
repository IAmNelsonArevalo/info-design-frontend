import useInterceptors from "./interceptors";
import useStoreConfig from "./redux";

const useConfig = () => {
  return {
    useInterceptors,
    useStoreConfig
  };
}

export default useConfig;