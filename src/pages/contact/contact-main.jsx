import { FarmsContactUs } from "./farms"
import { FormContactUs } from "./form"
import { ContactsContactUs } from "./contacts"

export const ContactUsPage = () => {
  return (
    <div className="contactus_page">
        <ContactsContactUs/>
        <FarmsContactUs/>
        <FormContactUs/>
    </div>
  )
}
