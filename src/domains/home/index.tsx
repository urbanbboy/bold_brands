import { Award } from "@/components/organisms/award";
import { CompanyChallengeList } from "@/components/organisms/company-challenge-list";
import { CompanyFeatures } from "@/components/organisms/company-features";
import { CompanyPartners } from "@/components/organisms/company-partners";
import { CompanyPostList } from "@/components/organisms/company-post-list";
import { MarketingDepartment } from "@/components/organisms/marketing-department";
import { SingleSliderList } from "@/components/organisms/single-slider-list";
import { FeedbackForm } from "@/components/forms/feedback-form";
import { FormLayout } from "@/components/templates/form-layout";
import { PartnerReviewList } from "@/components/organisms/partner-review-list";
import { Advantages } from "@/components/organisms/advantages/Advantages";
import NewsBanner from '@/components/atoms/NewsBanne/NewsBanne';
import { VideoAboutCompany } from "@/components/organisms/video-about-company";
import { getTranslations } from "next-intl/server";
// import dynamic from "next/dynamic";

const HomePage = async () => {
    const t = await getTranslations("HomePage");
    // const t = useTranslations("HomePage");
    // const { data: reviews } = useGetCompanyVideoReviewsQuery();
    // const FloatingWhatsapp = dynamic(() => import("@/components/atoms/floating-whatsapp"));
    return (
        <>
            <NewsBanner />
            <SingleSliderList />
            {/* <FloatingWhatsapp /> */}
            <MarketingDepartment />
            <VideoAboutCompany />
            <Advantages />
            <CompanyChallengeList />
            <CompanyFeatures />
            <CompanyPostList />
            <Award
                badgeTitle={t("section2.btn")}
                title={t("section2.title")}
                sub_title={t("section2.description")}
                image={"/images/main_page/diploma.jpg"}
            />
            <CompanyPartners />
            <PartnerReviewList />
            {/* {reviews &&
                <ClientReviewList
                    title={reviews[1].title}
                    sub_title={reviews[1].sub_title}
                    reviews={reviews[1].items}
                />
            } */}
            <FormLayout
                title={"Получите бесплатную консультацию"}
                nestedForm={<FeedbackForm />}
            />
        </>
    );
};

export default HomePage;