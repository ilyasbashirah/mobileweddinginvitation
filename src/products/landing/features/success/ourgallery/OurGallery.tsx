import { useState, useEffect } from "react";
import style from "./style.module.scss";
import Banner from "@/src/components/Banner";
import Typography from "@/src/components/Typography";
import { useRouter } from "next/router";
import Section from "@/src/components/Section";

export interface OurGalleryProps {}

export default function OurGallery({
  language = "ID",
  seeMoreGallery = false,
  seeMoreDispatch,
}: {
  language?: string;
  seeMore?: boolean;
  seeMoreDispatch?: () => void;
  seeMoreGallery?: boolean;
}) {
  const [state, setState] = useState({
    lang: "ID",
    seeMore: false,
  });

  useEffect(() => {
    setState({ ...state, lang: language });
  }, [state.lang, language]);
  useEffect(() => {
    setState({ ...state, seeMore: seeMoreGallery });
  }, [state.seeMore, seeMoreGallery]);

  const textDatas = {
    title: {
      en: "Our Gallery",
      id: "Galeri Foto",
    },
    description: {
      en: "We would like to share our beautiful memories to you",
      id: "Kami ingin membagikan momen bahagia yang tidak pernah terlupakan",
    },
    moreText: {
      en: "More",
      id: "Lihat Selengkapnya",
    },
  };

  const translate = state.lang.toLowerCase().includes("en") ? "en" : "id";
  const titleText: string = textDatas.title[translate];
  const descriptionText: string = textDatas.description[translate];
  const handleSeeMore = () => {
    seeMoreDispatch();
  };
  return (
    <Banner
      id={"our-gallery"}
      height={"our-gallery"}
      align={"flex-start"}
      background={"/desktop/gallery/gallery_background.svg"}
    >
      <Section gap={36} align={"flex-start"} justify={"center"}>
        <div className={style["padding-title-our-gallery"]}>
          <Typography
            variant={"heading-1-regular"}
            color={"cooper"}
            family={"greatvibes"}
            align={"center"}
          >
            {titleText}
          </Typography>
        </div>

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
              backgroundImage: `url("/desktop/gallery/photos/photos_top_1.png")`,
            }}
          />

          <div className={style["container-box-photos-small"]}>
            <div
              className={style["box-photos"]}
              style={{
                backgroundImage: `url("/desktop/gallery/photos/photos_left_1.png")`,
              }}
            />
            <div
              className={style["box-photos"]}
              style={{
                backgroundImage: `url("/desktop/gallery/photos/photos_right_1.png")`,
              }}
            />
          </div>

          <div className={style["container-box-photos-small"]}>
            <div
              className={style["box-photos"]}
              style={{
                backgroundImage: `url("/desktop/gallery/photos/photos_left_2.png")`,
              }}
            />
            <div
              className={style["box-photos"]}
              style={{
                backgroundImage: `url("/desktop/gallery/photos/photos_right_2.png")`,
              }}
              onClick={handleSeeMore}
            >
              <Typography
                variant={"body-1-semibold"}
                color={"white"}
                family={"montserrat"}
                align={"center"}
              >
                {textDatas.moreText[state.lang.toLowerCase()]}
              </Typography>
            </div>
          </div>
        </div>
      </Section>
    </Banner>
  );
}
