import useComponents from "./components";
import useScreens from "./screens";

const useViews = () => {
    return {
        useComponents,
        useScreens
    };
}

export default useViews;