import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://bermu.dev",
    title: "~/bermudev/blog",
    description: "A personal blog of a software engineer",
    author: "Carlos Bermudez",
    profile: "https://www.linkedin.com/in/carlos-bdez/",
    ogImage: "social-card.png",
    lang: "en",
    timezone: "Europe/Madrid",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/bermudev" },
    { name: "linkedin", url: "https://www.linkedin.com/in/carlos-bdez/" },
    { name: "mail", url: "mailto:carlos.bdez.esc@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    {
      name: "pinterest",
      url: "https://pinterest.com/pin/create/button/?url=",
    },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
