interface FooterListItemProps {
    text: string;
}

export const FooterListItem = ({ text }: FooterListItemProps) => {
  return (
    
      <li><a className="hover:text-Teal-200" href="#">{text}</a></li>
   
  )
}

