import { useEffect, useState } from "react";

const useDevice = () => {
  const devices: RegExp[] = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];
  const [device, setDevice] = useState<"mobile" | "desktop" | undefined>();
  useEffect(() => {
    const browser = typeof window !== undefined;

    if (browser) {
      setDevice(
        devices?.some((toMatchItem) => {
          return navigator?.userAgent?.match(toMatchItem);
        })
          ? "mobile"
          : "desktop"
      );
    }
  }, []);

  return device;
};

export default useDevice;
