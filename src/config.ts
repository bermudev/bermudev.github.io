export const SITE = {
  website: "https://bermu.dev",
  author: "Carlos Bermudez",
  profile: "https://www.linkedin.com/in/carlos-bdez/",
  desc: "A personal blog of a software engineer",
  title: "~/bermudev/blog",
  ogImage: "social-card.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/bermudev/bermudev.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Madrid", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
