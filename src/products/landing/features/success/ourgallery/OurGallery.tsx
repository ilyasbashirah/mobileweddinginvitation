import * as React from "react";
import style from "./style.module.scss";
import Banner from "@/src/components/Banner";
import Typography from "@/src/components/Typography";
import { useRouter } from "next/router";
import Section from "@/src/components/Section";

export interface OurGalleryProps {}

export default function OurGallery(props: OurGalleryProps) {
  const textDatas = {
    title: {
      en: "Our Gallery",
      ina: "Galeri Foto",
    },
    description: {
      en: "We would like to share our beautiful memories to you",
      ina: "Kami ingin membagikan momen bahagia yang tidak pernah terlupakan",
    },
  };
  const router = useRouter();
  const routePathname: string = router.pathname;
  const translate = routePathname.includes("en") ? "en" : "ina";
  const titleText: string = textDatas.title[translate];
  const descriptionText: string = textDatas.description[translate];
  return (
    <Banner
      height={"our-gallery"}
      align={"flex-start"}
      background={"/desktop/gallery/gallery_background.svg"}
    >
      <Section gap={36} align={"flex-start"} justify={"center"}>
        <Typography
          variant={"heading-1-regular"}
          color={"cooper"}
          family={"greatvibes"}
          align={"center"}
        >
          {titleText}
        </Typography>
        <Typography
          variant={"body-2-medium"}
          color={"onyx"}
          family={"montserrat"}
          align={"center"}
        >
          {descriptionText}
        </Typography>

        <div className={style["container-box-photos-small-large"]}>
          <div
            className={style["box-large-photos"]}
            style={{
              backgroundImage: `url("/desktop/gallery/photos/photos_top_1.svg")`,
            }}
          />

          <div className={style["container-box-photos-small"]}>
            <div
              className={style["box-photos"]}
              style={{
                backgroundImage: `url("/desktop/gallery/photos/photos_left_1.svg")`,
              }}
            />
            <div
              className={style["box-photos"]}
              style={{
                backgroundImage: `url("/desktop/gallery/photos/photos_right_1.svg")`,
              }}
            />
          </div>

          <div className={style["container-box-photos-small"]}>
            <div
              className={style["box-photos"]}
              style={{
                backgroundImage: `url("/desktop/gallery/photos/photos_left_2.svg")`,
              }}
            />
            <div
              className={style["box-photos"]}
              style={{
                backgroundImage: `url("/desktop/gallery/photos/photos_right_2.svg")`,
              }}
            >
              <Typography
                variant={"body-1-semibold"}
                color={"white"}
                family={"montserrat"}
                align={"center"}
              >
                {"Lihat Selengkapnya"}
              </Typography>
            </div>
          </div>
        </div>
      </Section>
    </Banner>
  );
}
