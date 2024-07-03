import { useState, useEffect } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function NavPicker() {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowDimensions.width > 800) {
    return <Nav />;
  } else {
    return <MobileNav />;
  }

  // console.log(windowDimensions)
}
