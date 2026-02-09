import type { JSX } from "react";
import { ContactItem } from "./ContactItem";
import { FooterListItem } from "./FooterListItem";
import { FacebookIcon } from "./FacebookIcon";
import { XIcon } from "./X-Icon";
import { InstagramIcon } from "./InstagramIcon";

interface ContactInformation {
  text: string;
  iconUrl: string;
  alt?: string;
}

const contactInformation: ContactInformation[] = [
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

const pages: string[] = ["About us", "Jobs", "Press", "Blog"];

const conditions: string[] = ["Contact us", "Terms", "Privacy"];

interface Media {
  text: string;
  icon: JSX.Element;
}

const medias: Media[] = [
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

export const Footer = () => {
  return (
    <footer className="pt-[260px] pb-[60px] px-6">
      <img className="mb-10" src="/public/images/logo.svg" alt="logo" />

      <div className="flex flex-col gap-4 ">
        {contactInformation.map((contact: ContactInformation) => (
          <ContactItem key={contact.alt} {...contact} />
        ))}
      </div>

      <div className="flex flex-col gap-8 mt-16">
        <ul>
          {pages.map((page: string) => (
            <FooterListItem key={page} text={page} />
          ))}
        </ul>

        <ul>
          {conditions.map((condition: string) => (
            <FooterListItem key={condition} text={condition} />
          ))}
        </ul>

        <div className="flex justify-center gap-4">
          {medias.map((media: Media) => (
            <div
              key={media.text}
              className=" text-white hover:text-Teal-200 cursor-pointer border rounded-full size-[30px] p-0.5"
            >
              {media.icon}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
