import { useState, useEffect } from "react";
import Card from "@/src/components/Card";
import Typography from "@/src/components/Typography";

import style from "./style.module.scss";
import Button from "@/src/components/Button";

export interface VenueExplanationProps {}

export default function VenueExplanation({
  language = "EN",
}: {
  language?: string;
}) {
  const [state, setState] = useState({
    lang: "EN",
  });
  useEffect(() => {
    setState({ ...state, lang: language });
  }, [state.lang, language]);
  const textDatas = {
    akad: {
      title: {
        en: "Wedding Ceremony",
        id: "Akad Nikah",
        icon: "",
      },
      hotel: {
        en: "InterContinental Bandung Dago Pakar Hotel",
        id: "Hotel InterContinental Bandung Dago Pakar",
        icon: "venue_hotel.svg",
      },
      time: {
        en: "11.00 - 14.00 WIB",
        id: "11.00 - 14.00 WIB",
        icon: "venue_clock.svg",
      },
      address: {
        en: "Jalan Resor Dago Pakar Raya 2B Resor Dago Pakar, Kota Bandung",
        id: "Jalan Resor Dago Pakar Raya 2B Resor Dago Pakar, Kota Bandung",
        icon: "venue_point.svg",
      },
    },
    resepsi: {
      title: {
        en: "Wedding Reception",
        id: "Resepsi",
        icon: "",
      },
      hotel: {
        en: "InterContinental Bandung Dago Pakar Hotel",
        id: "Hotel InterContinental Bandung Dago Pakar",
        icon: "venue_hotel.svg",
      },
      time: {
        en: "11.00 - 14.00 WIB",
        id: "11.00 - 14.00 WIB",
        icon: "venue_clock.svg",
      },
      address: {
        en: "Jalan Resor Dago Pakar Raya 2B Resor Dago Pakar, Kota Bandung",
        id: "Jalan Resor Dago Pakar Raya 2B Resor Dago Pakar, Kota Bandung",
        icon: "venue_point.svg",
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
        <div>
          {Object.keys(textDatas).map((key: any, index: number) => {
            return (
              <div
                key={`container-list-info-${index}`}
                className={style["container-list-info"]}
              >
                {Object.keys(textDatas[key]).map((keyAspect: any) => {
                  if (keyAspect !== "title") {
                    return (
                      <div
                        key={`venue-explanation-${keyAspect}`}
                        className={style["venue-list-explanation"]}
                      >
                        <img
                          src={`/desktop/venueandprotocol/venue/icons/${textDatas[key][keyAspect]["icon"]}`}
                        />
                        <Typography
                          family={"montserrat"}
                          variant={"body-2-medium"}
                          color={"cooper"}
                        >
                          {textDatas[key][keyAspect][state.lang.toLowerCase()]}
                        </Typography>
                      </div>
                    );
                  } else {
                    return (
                      <Typography
                        key={`venue-explanation-${key}`}
                        family={"montserrat"}
                        variant={"body-1-bold"}
                        color={"cooper"}
                      >
                        {textDatas[key]["title"][state.lang.toLowerCase()]}
                      </Typography>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>

        <div className={style["section-button"]}>
          <Button
            text={"Buka Maps"}
            variant={"primary"}
            onClick={handleLinkToGoogleMaps}
          />
          <Button
            text={"Live Streaming"}
            variant={"secondary"}
            onClick={handleLinkToYoutube}
          />
        </div>
      </div>
    </Card>
  );
}
