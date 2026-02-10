import type { JSX } from "react";

export interface ContactInformation {
  text: string;
  iconUrl: string;
  alt?: string;
}


export interface Media {
  text: string;
  icon: JSX.Element;
}

export interface Features {
    title: string;
    description: string;
    iconUrl: string;
}

export interface Testimonial {
   name: string;
   role: string;
   img: string;
   quote: string;
}