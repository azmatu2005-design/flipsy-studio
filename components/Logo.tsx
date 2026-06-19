export function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-8 w-8 text-sm" : "h-10 w-10 text-base";
  const text = size === "sm" ? "text-lg" : "text-xl";

  return (
    <div className="flex items-center gap-3">
      <div
        className={`${box} flex shrink-0 items-center justify-center rounded-lg bg-gold font-bold text-black`}
      >
        FS
      </div>
      <span className={`${text} font-semibold tracking-tight text-white`}>
        Flipsy Studio
      </span>
    </div>
  );
}
