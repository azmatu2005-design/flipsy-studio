const galleryImages = [
  "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549961/ChatGPT_Image_Jun_15_2026_11_48_42_PM_zihev4.png",
  "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549955/ChatGPT_Image_Jun_15_2026_11_50_27_PM_tr4pd2.png",
  "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549959/ChatGPT_Image_Jun_15_2026_11_53_17_PM_jvxixp.png",
  "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549969/ChatGPT_Image_Jun_15_2026_11_56_49_PM_apd1xp.png",
  "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781549957/ChatGPT_Image_Jun_15_2026_11_56_01_PM_q4lsgl.png",
  "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781889672/bkheaga3urzyappdbztz.jpg",
  "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781889662/qoqngnvisihvzto7gobj.png",
  "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781887213/d8cbquomihnj3ye50otg.png",
  "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781751939/edgkygtvhsnposuxv5lf.png",
  "https://res.cloudinary.com/dqj8t1xe9/image/upload/v1781545040/F2EBE298-50CA-46BC-91B8-834AA8243A92_rfrxwn.jpg",
];

function GalleryRow({
  images,
  direction,
}: {
  images: string[];
  direction: "left" | "right";
}) {
  const doubled = [...images, ...images];

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex w-max gap-4 ${direction === "left" ? "gallery-scroll-left" : "gallery-scroll-right"}`}
      >
        {doubled.map((src, i) => (
          <div key={`${src}-${i}`} className="relative h-[300px] shrink-0">
            <img
              src={src}
              alt={`Flipsy Studio result ${(i % images.length) + 1}`}
              className="h-[300px] w-auto rounded-2xl object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Gallery() {
  const row1 = galleryImages.slice(0, 5);
  const row2 = galleryImages.slice(5);

  return (
    <section className="overflow-hidden py-20">
      <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Real Results From Flipsy Studio
        </h2>
        <p className="mt-3 text-grey">See what our AI creates</p>
      </div>

      <div className="flex flex-col gap-4">
        <GalleryRow images={row1} direction="left" />
        <GalleryRow images={row2.length ? row2 : row1} direction="right" />
      </div>
    </section>
  );
}
