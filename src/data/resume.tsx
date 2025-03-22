import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ahmad Hussain",
  initials: "DV",
  url: "",
  location: "Multan, PAK",
  locationLink: "",
  description:
    "SEO Expert turned Entrepreneur. Passionate about optimizing, creating, and helping businesses grow.",
  summary:
    "I specialize in driving organic growth through effective SEO strategies. From mastering keyword research and on-page optimization to building authoritative links and analyzing performance data, I help businesses boost their online visibility and achieve measurable results.",
  avatarUrl: "/1.png",
  skills: [
    "Keyword Research",
    "On-Page Optimization",
    "Technical SEO",
    "Content Strategy",
    "Link Building",
    "Local SEO",
    "SEO Analytics",
    "Mobile SEO",
    "Competitor Analysis",
    "Schema Markup",
    "Google Search Console",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ahmad-hussain-a45692287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        icon: Icons.linkedin,

        navbar: true,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/qr/YNXXAFLHBPKKL1",
        icon: Icons.whatsapp,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "NDF Digital",
      href: "https://www.ndfdigital.co.uk/",
      badges: [],
      location: "Remote",
      title: "SEO Specialist",
      logoUrl: "/ndf.jpeg", // You'll need to add this logo image
      start: "NOV 2024",
      end: "Present",
      description:
        "Leading SEO optimization and digital presence enhancement for multiple UK-based businesses. Successfully improved online visibility and search rankings for clients including Woking Travel Centre, Mrs Her's Ice Cream, HP Heating, and Surrey Tax Accountants through comprehensive SEO strategies and website optimization.",
    },
    {
      company: "Hexions LLC",
      href: "https://hexions.co/",
      badges: [],
      location: "On-Site",
      title: "SEO Executive",
      logoUrl: "/hex.jpeg",
      start: "DEC 2022",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "Pilot Secondary School",
      href: "https://web.facebook.com/GPSSM/?_rdc=1&_rdr",
      degree: "Pre-Engineering",
      logoUrl: "",
      start: "2017",
      end: "2018",
    },
    {
      school: "Nishtar College of Commerce",
      href: "https://web.facebook.com/p/Nishtar-College-of-Commerce-Multan-100063483056913/?_rdc=1&_rdr#",
      degree: "D.com",
      logoUrl: "",
      start: "2019",
      end: "2020",
    },
    {
      school: "BZU University",
      href: "https://bzu.edu.pk/",
      degree: "Bachelor's Degree of Entrepreneurship",
      logoUrl: "/2.png",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Woking Travel Centre",
      href: "https://www.wokingtravelcentre.co.uk/",
      dates: "NOV 2024 - Present",
      active: true,
      description:
        "Enhanced online presence and SEO optimization for a leading UK travel agency, improving search visibility and customer engagement through comprehensive SEO strategies.",
      technologies: [
        "Keyword Research",
        "On-Page SEO",
        "Content Optimization",
        "Google Search Console",
        "Google Analytics",
        "Local SEO",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.wokingtravelcentre.co.uk/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      color: "bg-blue-500",
      video: "",
    },
    {
      title: "Mrs Her's Ice Cream",
      href: "https://www.mrshersicecream.co.uk/",
      dates: "NOV 2024 - Present",
      active: true,
      description:
        "Implemented comprehensive SEO strategies for a premium ice cream business, enhancing local visibility and customer reach through targeted optimization.",
      technologies: [
        "Keyword Research",
        "On-Page SEO",
        "Local SEO",
        "Content Strategy",
        "Google Analytics",
        "Technical SEO",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.mrshersicecream.co.uk/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      color: "bg-pink-500",
      video: "",
    },
    {
      title: "HP Heating",
      href: "https://www.hpheating.com/",
      dates: "NOV 2024 - Present",
      active: true,
      description:
        "Optimized digital presence for a heating services company, focusing on local SEO and technical optimization to improve search rankings and customer acquisition.",
      technologies: [
        "Local SEO",
        "Technical SEO",
        "Content Optimization",
        "Google Search Console",
        "Google Analytics",
        "Schema Markup",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.hpheating.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      color: "bg-orange-500",
      video: "",
    },
    {
      title: "Surrey Tax Accountants",
      href: "https://www.surreytaxaccountants.co.uk/",
      dates: "NOV 2024 - Present",
      active: true,
      description:
        "Developed and executed SEO strategies for an accounting firm, improving online visibility and generating qualified leads through targeted optimization.",
      technologies: [
        "Keyword Research",
        "Content Strategy",
        "On-Page SEO",
        "Local SEO",
        "Google Analytics",
        "Technical SEO",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.surreytaxaccountants.co.uk/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      color: "bg-green-500",
      video: "",
    },
    {
      title: "NDF Digital",
      href: "https://www.ndfdigital.co.uk/",
      dates: "NOV 2024 - Present",
      active: true,
      description:
        "Contributed to the digital marketing agency's own online presence, implementing cutting-edge SEO strategies and best practices.",
      technologies: [
        "SEO Strategy",
        "Content Marketing",
        "Technical SEO",
        "Analytics",
        "Digital Marketing",
        "Website Optimization",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.ndfdigital.co.uk/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      color: "bg-purple-500",
      video: "",
    },
    {
      title: "FeetFinder",
      href: "https://feetfinder.co",
      dates: "June 2023 - Feb 2024",
      active: true,
      description:
        "I did SEO and Keyword search and also did content optimization and blog post.",
      technologies: [
        "Keyword Research",
        "On-Page SEO",
        "Content Optimization",
        "Google Search Console",
        "Google Analytics",
        "Semrush",
      ],
      links: [
        {
          type: "Website",
          href: "https://feetfinder.co",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/3.png",
      video: "",
    },
    {
      title: "Tricksehow",
      href: "https://www.tricksehow.com/",
      dates: "June 2023 - April 2024",
      active: true,
      description: "Website dedicated to providing how to guide and tutorials",
      technologies: [
        "Keyword Research",
        "On-Page SEO",
        "Content Optimization",
        "Google Search Console",
        "Google Analytics",
        "Semrush",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.tricksehow.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/5.png",
      video: "",
    },
    {
      title: "HBFIORELLAA",
      href: "https://www.hbfiorellaa.com/",
      dates: "Sept 2024 - Sept 2024",
      active: true,
      description: "I have build a (E-commerce Shopify) store.",
      technologies: ["Shopify", "Google Search Console"],
      links: [
        {
          type: "Website",
          href: "https://www.hbfiorellaa.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/6.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Capstone: Applying Project Management in the Real World",
      dates: "April 8th - 2024",
      location: "Online",
      description:
        "Develop a comprehensive chartered using research and relevant documentation.",
      image: "./cert.png",
      mlh: "",
      links: [
        {
          type: "Certificate",
          href: "https://www.coursera.org/account/accomplishments/verify/SZ7NH279LVVP?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
} as const;
