import { useState, useEffect } from "react";
import style from "./style.module.scss";
import Typography from "@/src/components/Typography";
export interface MenuLandingProps {}

export default function MenuLanding({
  language = "ID",
}: {
  language?: string;
}) {
  const [state, setState] = useState({
    active: "bride-and-groom",
    lang: "ID",
  });
  useEffect(() => {
    setState({ ...state, lang: language });
  }, [state.lang, language]);
  const datas = {
    menu: {
      en: [
        {
          id: "bride-and-groom",
          title: "Couple",
          icon: "mempelai",
        },
        {
          id: "venue-maps-location",
          title: "Venue",
          icon: "lokasi",
        },
        {
          id: "health-protocol",
          title: "Protocol",
          icon: "protokol",
        },
        {
          id: "our-gallery",
          title: "Gallery",
          icon: "galeri",
        },
        {
          id: "wedding-gift",
          title: "Gift",
          icon: "gift",
        },
      ],
      id: [
        {
          id: "bride-and-groom",
          title: "Mempelai",
          icon: "mempelai",
        },

        {
          id: "venue-maps-location",
          title: "Lokasi",
          icon: "lokasi",
        },

        {
          id: "health-protocol",
          title: "Protokol",
          icon: "protokol",
        },

        {
          id: "our-gallery",
          title: "Galeri",
          icon: "galeri",
        },

        {
          id: "wedding-gift",
          title: "Gift",
          icon: "gift",
        },
      ],
    },
  };

  const handleScrollTo = (sectionId: string) => {
    const elementSection = document.getElementById(sectionId);
    const yOffset =
      sectionId === "health-protocol"
        ? -24
        : sectionId === "venue-maps-location"
        ? -24
        : -10;
    if (elementSection !== null && typeof window !== undefined) {
      const y =
        elementSection.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setState({ ...state, active: sectionId });
  };
  return (
    <div className={style["container-menu-landing"]}>
      {datas.menu[`${state.lang.toLowerCase()}`].map(
        (data: any, index: any) => {
          return (
            <div
              key={`container-menu-icon-${index}`}
              className={style["container-menu-icon"]}
              onClick={() => handleScrollTo(data.id)}
            >
              <div className={style["box-menu-icon"]}>
                <img
                  src={`/menu/icons/${
                    state.active === data.id ? "copper" : "gray"
                  }/${data.icon}_icon.svg`}
                  width={24}
                  height={24}
                />
                <Typography
                  family={"montserrat"}
                  variant={"caption-1-bold"}
                  color={
                    state.active === data.id ? "cooper" : "philipine-silver"
                  }
                >
                  {data.title}
                </Typography>
              </div>

              <div
                className={`${style["footer-menu"]} ${
                  state.active === data.id
                    ? style["footer-menu--active"]
                    : style["footer-menu--inactive"]
                }`}
              />
            </div>
          );
        }
      )}
    </div>
  );
}
