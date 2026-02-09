interface ContactItemProps {
    text: string;
    iconUrl: string;
    alt?: string;
}


export const ContactItem = ({ text, iconUrl, alt }: ContactItemProps) => {
  return (
   
    <div className="flex items-start gap-6">
            <img className="mt-1" src={iconUrl} alt={alt || "contact icon"} />
            <p>{text}</p>
    </div>
   
  )
}


