const WESTERN_MARKERS = [
  "brian-wangenheim",
  "apolo-photographer",
  "imana-IEakbo",
  "senya-mitin",
  "v1782230479",
  "v1782230497",
  "v1782230508",
  "v1782230522",
];

export function isWesternImage(src: string): boolean {
  return WESTERN_MARKERS.some((marker) => src.includes(marker));
}
