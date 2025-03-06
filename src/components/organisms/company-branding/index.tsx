import { useGetCompanyBrandingQuery } from "@/api/Company";
import { Heading } from "@/components/atoms/heading";
import { CompanyBrandingItem } from "@/components/molecules/company-branding-item";
import { motion } from "framer-motion";
import { fadeIn, staggerTransition, viewportConfig } from "@/lib/motion";

export const CompanyBranding = () => {
  const { data } = useGetCompanyBrandingQuery();

  return (
    <>
      <div className="flex flex-col text-center justify-center items-center gap-y-2 m-auto pt-10 md:pt-20 lg:pt-32 max-w-[1280px]">
        <Heading
          as="h4"
          className="font-normal uppercase text-sm md:text-xl text-gray2"
        >
          {data?.sub_title}
        </Heading>
        <Heading as="h2">{data?.title}</Heading>
        <p className="text-gray2 text-sm md:text-lg max-w-2xl">
          {data?.sub_title_2}
        </p>
      </div>

      <div className="relative flex overflow-hidden group my-8 md:my-14 lg:mb-28">
        <div className="relative w-full h-60 overflow-hidden">
          <motion.div
            className="flex gap-x-5 whitespace-nowrap"
            initial={{ x: "0" }}
            animate={{ x: "-350%" }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...(data?.items || []), ...(data?.items || [])].map(
              (branding, idx) => (
                <motion.div key={idx} className="flex-shrink-0">
                  <CompanyBrandingItem image={branding.image} />
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};
