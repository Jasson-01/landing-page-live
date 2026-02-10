interface ContactItemProps {
    text: string;
    iconUrl: string;
    alt?: string;
    styles?: string;
}


export const ContactItem = ({ text, iconUrl, alt, styles="" }: ContactItemProps) => {
  return (
   
    <div className={`flex items-start gap-6 ${styles}`}>
            <img className="mt-1" src={iconUrl} alt={alt || "contact icon"} />
            <p>{text}</p>
    </div>
   
  )
}


