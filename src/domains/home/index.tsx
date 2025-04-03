import dynamic from "next/dynamic";
import { getTranslations } from "next-intl/server";
import { getBanners } from "@/api/Banners";
import SingleSliderList from "@/components/organisms/single-slider-list";
import { getMarketingDepartment } from "@/api/Marketing";
import { getCompanyChallenges } from "@/api/Company";

const NewsBanner = dynamic(() => import("@/components/atoms/NewsBanne/NewsBanne"));
const MarketingDepartment = dynamic(() => import("@/components/organisms/marketing-department"));
const VideoAboutCompany = dynamic(() => import("@/components/organisms/video-about-company"));
const Advantages = dynamic(() => import("@/components/organisms/advantages/Advantages"));
const CompanyChallengeList = dynamic(() => import("@/components/organisms/company-challenge-list"));
const CompanyFeatures = dynamic(() => import("@/components/organisms/company-features"));
const CompanyPostList = dynamic(() => import("@/components/organisms/company-post-list"));
const BlogPostList = dynamic(() => import("@/components/organisms/blog-post-list"));
const Award = dynamic(() => import("@/components/organisms/award"));
const CompanyPartners = dynamic(() => import("@/components/organisms/company-partners"));
const PartnerReviewList = dynamic(() => import("@/components/organisms/partner-review-list"));
const ClientReviewList = dynamic(() => import("@/components/organisms/client-review-list"));
const FormLayout = dynamic(() => import("@/components/templates/form-layout"));
const FeedbackForm = dynamic(() => import("@/components/forms/feedback-form"));

export const revalidate = 60

const HomePage = async () => {
    const t = await getTranslations("HomePage");
    const banners = await getBanners();
    const MarketingDepartmentData = await getMarketingDepartment();
    const companyChallenges = await getCompanyChallenges();

    return (
        <>
            <NewsBanner banners={banners} />
            <SingleSliderList banners={banners} />
            <MarketingDepartment data={MarketingDepartmentData} />
            <VideoAboutCompany/>
            <Advantages />
            <CompanyChallengeList data={companyChallenges} />
            <CompanyFeatures />
            <CompanyPostList />
            <BlogPostList />
            <Award
                badgeTitle={t("section2.btn")}
                title={t("section2.title")}
                sub_title={t("section2.description")}
                image={"/images/main_page/diploma.jpg"}
            />
            <CompanyPartners />
            <PartnerReviewList />
            <ClientReviewList />
            <FormLayout
                title={"Получите бесплатную консультацию"}
                nestedForm={<FeedbackForm />}
            />
        </>
    );
};

export default HomePage;