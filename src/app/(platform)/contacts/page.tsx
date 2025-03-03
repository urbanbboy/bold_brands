'use client';
import { FeedbackForm } from "@/components/forms/feedback-form";
import { FormLayout } from "@/components/templates/form-layout";
import { Map } from "./Map";


const ContactsPage = () => {
    return (
        <>
            <FormLayout
                           title={'Получите бесплатную консультацию'}
                           nestedForm={<FeedbackForm />}
            />
           <Map/>
        </>
    );
}
 
export default ContactsPage;