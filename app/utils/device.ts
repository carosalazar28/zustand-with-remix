function getMediaQuery(query: string): boolean {
  let mediaQueryList
  if (typeof window !== "undefined") {
    mediaQueryList = window.matchMedia(query);
    return mediaQueryList.matches;
  }
  return true
}

export const isMobile = () => getMediaQuery('(max-width: 768px)');