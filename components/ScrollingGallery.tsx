import { isWesternImage } from "@/lib/westernImages";
import { SafeImage } from "./SafeImage";

const row1 = [
  "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549961/ChatGPT_Image_Jun_15_2026_11_48_42_PM_zihev4.png",
  "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549955/ChatGPT_Image_Jun_15_2026_11_50_27_PM_tr4pd2.png",
  "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549959/ChatGPT_Image_Jun_15_2026_11_53_17_PM_jvxixp.png",
  "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549969/ChatGPT_Image_Jun_15_2026_11_56_49_PM_apd1xp.png",
  "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781889672/bkheaga3urzyappdbztz.jpg",
  "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781889662/qoqngnvisihvzto7gobj.png",
];

const row2 = [
  "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781887213/d8cbquomihnj3ye50otg.png",
  "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781751939/edgkygtvhsnposuxv5lf.png",
  "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781545040/F2EBE298-50CA-46BC-91B8-834AA8243A92_rfrxwn.jpg",
  "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1782230479/brian-wangenheim-Y4pcueOx8nE-unsplash_t27wxc.jpg",
  "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1782230497/apolo-photographer-g7Fdj8EDJng-unsplash_t8fqs7.jpg",
  "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1782230508/imana-IEakboWH0hk-unsplash_ofhn6o.jpg",
];

function ScrollRow({
  images,
  direction,
}: {
  images: string[];
  direction: "left" | "right";
}) {
  const doubled = [...images, ...images];

  return (
    <div className="gallery-row group/row overflow-hidden">
      <div
        className={`gallery-track flex gap-4 ${direction === "left" ? "gallery-scroll-left" : "gallery-scroll-right"}`}
      >
        {doubled.map((src, i) => {
          const western = isWesternImage(src);

          return (
            <div
              key={`${src}-${i}`}
              className={`gallery-card shrink-0 overflow-hidden rounded-2xl border border-transparent transition-colors duration-300 hover:border-gold ${
                western ? "bg-black" : ""
              }`}
              style={western ? { aspectRatio: "3 / 4", width: 220 } : undefined}
            >
              <SafeImage
                src={src}
                alt={`Flipsy Studio result ${(i % images.length) + 1}`}
                width={220}
                height={western ? 293 : 280}
                className={
                  western
                    ? "w-[220px] object-contain"
                    : "h-[280px] w-[220px] object-cover"
                }
                style={western ? { aspectRatio: "3 / 4" } : undefined}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ScrollingGallery() {
  return (
    <div className="flex flex-col gap-4">
      <ScrollRow images={row1} direction="left" />
      <ScrollRow images={row2} direction="right" />
    </div>
  );
}
