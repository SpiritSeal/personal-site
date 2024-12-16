export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'Saketh Reddy',
  DESCRIPTION:
    "Saketh Reddy's personal site",
  EMAIL: 'yssaketh@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://saketh.red',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/SpiritSeal', label: 'GitHub' },
  // { href: 'https://twitter.com/enscry', label: 'Twitter' },
  { href: 'yssaketh@gmail.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
