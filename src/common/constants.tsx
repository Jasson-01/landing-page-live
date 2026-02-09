import type { ContactInformation, Media } from "../types/type";
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