import Card from "@/src/components/Card";
import Typography from "@/src/components/Typography";
import * as React from "react";
import style from "./style.module.scss";
import Button from "@/src/components/Button";

export interface VenueExplanationProps {}

export default function VenueExplanation(props: VenueExplanationProps) {
  const textDatas = {
    akad: {
      title: {
        en: "Wedding Ceremony",
        ina: "Akad Nikah",
        icon: "",
      },
      hotel: {
        en: "InterContinental Bandung Dago Pakar Hotel",
        ina: "Hotel InterContinental Bandung Dago Pakar",
        icon: "venue_hotel.svg",
      },
      time: {
        en: "11.00 - 14.00 WIB",
        ina: "11.00 - 14.00 WIB",
        icon: "venue_clock.svg",
      },
      address: {
        en: "Jalan Resor Dago Pakar Raya 2B Resor Dago Pakar, Kota Bandung",
        ina: "Jalan Resor Dago Pakar Raya 2B Resor Dago Pakar, Kota Bandung",
        icon: "venue_point.svg",
      },
    },
    resepsi: {
      title: {
        en: "Wedding Reception",
        ina: "Resepsi",
        icon: "",
      },
      hotel: {
        en: "InterContinental Bandung Dago Pakar Hotel",
        ina: "Hotel InterContinental Bandung Dago Pakar",
        icon: "venue_hotel.svg",
      },
      time: {
        en: "11.00 - 14.00 WIB",
        ina: "11.00 - 14.00 WIB",
        icon: "venue_clock.svg",
      },
      address: {
        en: "Jalan Resor Dago Pakar Raya 2B Resor Dago Pakar, Kota Bandung",
        ina: "Jalan Resor Dago Pakar Raya 2B Resor Dago Pakar, Kota Bandung",
        icon: "venue_point.svg",
      },
    },
  };
  return (
    <Card>
      <div className={style["container-venue-explanation"]}>
        <div>
          {Object.keys(textDatas).map((key: any) => {
            return (
              <div className={style["container-list-info"]}>
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
                          {textDatas[key][keyAspect]["ina"]}
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
                        {textDatas[key]["title"]["ina"]}
                      </Typography>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>

        <div className={style["section-button"]}>
          <Button text={"Buka Maps"} />
        </div>
      </div>
    </Card>
  );
}
