root/
├── .next/                      # Next.js build directory (generated)
├── node_modules/               # Dependencies (generated)
├── public/                     # Public assets
│   ├── placeholder.svg
│   └── images/                 # Image assets
│       └── profile_image_1.jpeg
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout component
│   │   └── page.tsx           # Main page component
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Section.tsx
│   │   │   └── ClientLayout.tsx
│   │   ├── projects/
│   │   │   └── logos/
│   │   │       ├── index.ts
│   │   │       ├── One2TelLogo.tsx
│   │   │       └── UniversumLogo.tsx
│   │   ├── sections/
│   │   │   ├── About.tsx
│   │   │   ├── BlogSection.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Skills.tsx
│   │   └── ui/               # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── sheet.tsx
│   │       └── tabs.tsx
│   ├── content/
│   │   ├── blog/
│   │   │   └── posts/
│   │   │       ├── post-1.ts
│   │   │       ├── post-2.ts
│   │   │       └── post-3.ts
│   │   ├── locales/
│   │   │   ├── en.ts
│   │   │   └── sv.ts
│   │   └── index.ts
│   ├── hooks/
│   │   └── useLanguage.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── styles/
│   │   └── globals.css
│   └── types/
│       └── types.ts
├── .eslintrc.json
├── .gitignore
├── components.json            # shadcn/ui configuration
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json