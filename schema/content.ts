export const contentSchema = [
  {
    label: "",
    name: "rule",
    type: "string",
    ui: {
      component: "ruledTitle",
    },
  },
  {
    label: "Label",
    name: "label",
    type: "string",
  },
  {
    label: "Headline",
    name: "headline",
    type: "string",
  },
  {
    label: "Subhead",
    name: "subhead",
    type: "string",
  },
  {
    type: "rich-text",
    label: "Body",
    name: "body",
    templates: [
      {
        name: "SocialLinks",
        label: "Social Links",
        fields: [
          {
            name: "email",
            label: "Email Address",
            type: "string",
          },
          {
            name: "linkedin",
            label: "LinkedIn URL",
            type: "string",
          },
          {
            name: "twitter",
            label: "Twitter URL",
            type: "string",
          },
          {
            name: "youtube",
            label: "YouTube URL",
            type: "string",
          },
          {
            name: "iconSize",
            label: "Icon Size",
            type: "string",
            options: ["default", "small"],
          },
        ],
        ui: {
          defaultItem: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            iconSize: "default",
          },
        },
      }
    ],
    isBody: true,
  },
]
