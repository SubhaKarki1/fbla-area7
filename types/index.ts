export interface School {
  id: string
  name: string
  shortName: string
  city: string
  /** Omit to fall back to an initials monogram. */
  logo?: string
}

export interface Event {
  id: string
  title: string
  date: string
  dateShort: string
  location: string
  description: string
  learnMoreUrl?: string
}

export interface Officer {
  name: string
  title: string
  photo: string | null
  photoPosition?: string
}

export interface GalleryPhoto {
  src: string
  alt: string
  caption: string
}

export interface Sponsor {
  id: string
  name: string
  /** One line on who they are or what they supported. */
  blurb: string
  city: string
  url: string
  /** Omit to fall back to an initials monogram. */
  logo?: string
}
