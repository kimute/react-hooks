export const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    //console.log(event);
    //console.log("Y", window.scrollY, "X", window.screenX);
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    // onScroll need event listener
    window.addEventListener("scroll", onScroll);
    //clean up down
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};
