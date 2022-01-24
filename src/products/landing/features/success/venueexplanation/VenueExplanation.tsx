import { useState, useEffect } from "react";
import Card from "@/src/components/Card";
import Typography from "@/src/components/Typography";

import style from "./style.module.scss";
import Button from "@/src/components/Button";

export interface VenueExplanationProps {}

export default function VenueExplanation({
  language = "ID",
}: {
  language?: string;
}) {
  const [state, setState] = useState({
    lang: "ID",
  });
  useEffect(() => {
    setState({ ...state, lang: language });
  }, [state.lang, language]);
  const textDatas = {
    datas: {
      akad: {
        title: {
          en: "Wedding Ceremony",
          id: "Akad Nikah",
          icon: "",
        },
        datas: [
          {
            en: "InterContinental Bandung Dago Pakar Hotel",
            id: "Hotel InterContinental Bandung Dago Pakar",
            icon: "venue_hotel.svg",
          },
          {
            en: "08.00 - 09.30 WIB",
            id: "08.00 - 09.30 WIB",
            icon: "venue_clock.svg",
          },
          {
            en: "Jalan Resor Dago Pakar Raya 2B Resor Dago Pakar, Kota Bandung",
            id: "Jalan Resor Dago Pakar Raya 2B Resor Dago Pakar, Kota Bandung",
            icon: "venue_point.svg",
          },
        ],
      },
      resepsi: {
        title: {
          en: "Wedding Reception",
          id: "Resepsi",
          icon: "",
        },
        datas: [
          {
            en: "InterContinental Bandung Dago Pakar Hotel",
            id: "Hotel InterContinental Bandung Dago Pakar",
            icon: "venue_hotel.svg",
          },
          {
            en: "10.30 - 13.30 WIB",
            id: "10.30 - 13.30 WIB",
            icon: "venue_clock.svg",
          },
          {
            en: "Jalan Resor Dago Pakar Raya 2B Resor Dago Pakar, Kota Bandung",
            id: "Jalan Resor Dago Pakar Raya 2B Resor Dago Pakar, Kota Bandung",
            icon: "venue_point.svg",
          },
        ],
      },
    },

    buttonText: {
      maps: {
        en: "Open Maps",
        id: "Buka Peta",
      },
      live: {
        en: "Live Streaming",
        id: "Siaran Langsung",
      },
    },
  };
  const latLng = {
    lat: -6.866577101840134,
    lng: 107.64194819735876,
  };
  const handleLinkToGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps/place/InterContinental+Bandung+Dago+Pakar,+an+IHG+Hotel/@-6.8668168,107.6397595,17z/data=!3m1!4b1!4m8!3m7!1s0x2e68e715a13ee277:0x5376a74da04505a1!5m2!4m1!1i2!8m2!3d-6.8668221!4d107.6419482`
    );
  };
  const handleLinkToYoutube = () => {
    window.open(`https://www.youtube.com`);
  };
  return (
    <Card>
      <div className={style["container-venue-explanation"]}>
        <div className={style["container-box-list-info"]}>
          <div className={style["container-list-info"]}>
            <Typography
              family={"montserrat"}
              variant={"body-1-bold"}
              color={"cooper"}
            >
              {textDatas.datas["akad"]["title"][state.lang.toLowerCase()]}
            </Typography>
            {textDatas.datas.akad.datas.map((item: any, index) => {
              return (
                <div
                  key={`venue-explanation-${index}`}
                  className={style["venue-list-explanation"]}
                >
                  <img
                    src={`/desktop/venueandprotocol/venue/icons/${item["icon"]}`}
                  />
                  <Typography
                    family={"montserrat"}
                    variant={"body-2-medium"}
                    color={"cooper"}
                  >
                    {item[state.lang.toLowerCase()]}
                  </Typography>
                </div>
              );
            })}
          </div>

          <div className={style["container-list-info"]}>
            <Typography
              family={"montserrat"}
              variant={"body-1-bold"}
              color={"cooper"}
            >
              {textDatas.datas["resepsi"]["title"][state.lang.toLowerCase()]}
            </Typography>
            {textDatas.datas.resepsi.datas.map((item: any, index) => {
              return (
                <div
                  key={`venue-explanation-${index}`}
                  className={style["venue-list-explanation"]}
                >
                  <img
                    src={`/desktop/venueandprotocol/venue/icons/${item["icon"]}`}
                  />
                  <Typography
                    family={"montserrat"}
                    variant={"body-2-medium"}
                    color={"cooper"}
                  >
                    {item[state.lang.toLowerCase()]}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>

        <div className={style["section-button"]}>
          <Button
            text={textDatas.buttonText.maps[state.lang.toLowerCase()]}
            variant={"primary"}
            onClick={handleLinkToGoogleMaps}
          />
          <Button
            text={textDatas.buttonText.live[state.lang.toLowerCase()]}
            variant={"secondary"}
            onClick={handleLinkToYoutube}
          />
        </div>
      </div>
    </Card>
  );
}
