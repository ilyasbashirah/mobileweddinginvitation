import * as React from "react";
import style from "./style.module.scss";
import Typography from "@/src/components/Typography";
import { useRouter } from "next/router";
import VenueExplanation from "@/src/products/landing/features/success/venueexplanation";
import VenueMaps from "@/src/products/landing/features/success/venuemaps";
export interface MapsLocationProps {}

export default function MapsLocation(props: MapsLocationProps) {
  const textDatas = {
    title: {
      en: "Wedding Venue",
      ina: "Peta Lokasi",
    },
    doa: {
      en: "We’re Getting Hitched! And We’d Be Delighted If You Could Join Our Wedding!",
      ina: "Dengan memanjatkan puji syukur serta memohon ridho dan rahmat Allah SWT kami bermaksud menyelenggarakan Syukuran Pernikahan putra-putri kami pada:",
    },
    date: {
      en: "Tuesday, February 1st 2022",
      ina: "Selasa, 1 Februari 2022",
    },
  };
  const router = useRouter();

  const routePathname: string = router.pathname;
  const translate = routePathname.includes("en") ? "en" : "ina";
  const titleText: string = textDatas.title[translate];
  const prayText: string = textDatas.doa[translate];
  const dateText: string = textDatas.date[translate];
  return (
    <div className={style["section-maps-location-title"]}>
      <Typography
        variant={"heading-2-regular"}
        color={"cooper"}
        family={"greatvibes"}
        align={"center"}
      >
        {titleText}
      </Typography>
      <div className={style["section-maps-location-description"]} >
        <Typography
          variant={"body-1-medium"}
          color={"onyx"}
          family={"montserrat"}
          align={"center"}
        >
          {prayText}
        </Typography>
        <Typography
          variant={"subtitle-2-bold"}
          color={"cooper"}
          family={"montserrat"}
          align={"center"}
        >
          {dateText}
        </Typography>

        <div className={style["section-card-maps-location"]}>
          <VenueMaps />
          <VenueExplanation />
        </div>
      </div>
    </div>
  );
}
