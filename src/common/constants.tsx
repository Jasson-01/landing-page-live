import type { ContactInformation, Media, Features, Testimonial } from "../types/type";
import { FacebookIcon } from "../components/footer/FacebookIcon";
import { XIcon } from "../components/footer/X-Icon";
import { InstagramIcon } from "../components/footer/InstagramIcon";


export const contactInformation: ContactInformation[] = [
  {
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam illum natus ratione labore officiis, recusandae rem ipsum, nihil rerum, at consequuntur ducimus vel. Consequatur sunt veniam nulla  doloribus, vel dolor.",
    iconUrl: "/public/images/icon-location.svg",
    alt: "location icon",
  },
  {
    text: "+1-543-123-4567",
    iconUrl: "/public/images/icon-phone.svg",
    alt: "phone icon",
  },
  {
    text: "example@fylo.com",
    iconUrl: "/public/images/icon-email.svg",
    alt: "email icon",
  },
];

export const pages: string[] = ["About us", "Jobs", "Press", "Blog"];

export const conditions: string[] = ["Contact us", "Terms", "Privacy"];


export const medias: Media[] = [
  {
    text: "Facebook",
    icon: <FacebookIcon />,
  },
  {
    text: "Twitter",
    icon: <XIcon />,
  },
  {
    text: "Instagram",
    icon: <InstagramIcon />,
  },
];


export const features: Features[] = [
    {
        title: "Access your files, anywhere",
        description: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
        iconUrl: "public/images/icon-access-anywhere.svg"
    },
    {
        title: "Security you can trust",
        description: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
        iconUrl: "public/images/icon-security.svg"
    },
    {
        title: "Real-time collaboration",
        description: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
        iconUrl: "public/images/icon-collaboration.svg"
    },
    {
        title: "Store any type of file",
        description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
        iconUrl: "public/images/icon-any-file.svg"
    }
]

export const testimonials: Testimonial[] = [
    {
        name: "Satish Patel",
        role: "Founder & CEO, Huddle",
        img: "/images/profile-1.jpg",
        quote: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
    },
    {
        name: "Bruce McKenzie",
        role: "Founder & CEO, Huddle",
        img: "/images/profile-2.jpg",
        quote: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
    },
    {
        name: "Iva Boyd",
        role: "Founder & CEO, Huddle",
        img: "/images/profile-3.jpg",
        quote: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
    }
]