import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://aminaba.com", // replace this with your deployed domain
  author: "Amina Ba",
  profile: "https://github.com/XAmiBa",
  desc: "Backend Software Engineer",
  title: "Amina Ba",
  ogImage: "main-about-me.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/baamina/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.linkedin.com/in/baamina/",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "Facebook",
    href: "https://www.linkedin.com/in/baamina/",
    linkTitle: `${SITE.title} on LinkFacebookedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:abaaminaba@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  }
];
