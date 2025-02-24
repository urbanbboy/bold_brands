import { FC } from "react";

type IconProps = {
    color?: string;
    size?: string | number;
    width?: string;
    height?: string;
} & React.SVGAttributes<SVGElement>;


export const ServiceSmmIcon1: FC<IconProps> = ({
    ...attributes
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 md:w-[140px] md:h-[140px]"
            fill="none"
            viewBox="0 0 140 141"
            {...attributes}
        >
            <mask
                id="mask0_2115_6142"
                width="140"
                height="141"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "luminance" }}
            >
                <path fill="#fff" d="M0 .5h140v140H0z"></path>
            </mask>
            <g strokeMiterlimit="10" mask="url(#mask0_2115_6142)">
                <path
                    stroke="#FF2B44"
                    d="M86.406 21.008H53.594a8.203 8.203 0 1 1 0-16.406h32.812a8.203 8.203 0 1 1 0 16.406Z"
                ></path>
                <path
                    stroke="#000"
                    d="M36.914 70.773H4.102V54.367h32.812zM4.102 70.773v57.422h16.406M4.102 95.383h16.406M36.914 103.586H20.508V87.18h16.406z"
                ></path>
                <path stroke="#FF2B44" d="M36.914 136.398H20.508v-16.406h16.406z"></path>
                <path
                    stroke="#000"
                    d="M86.406 70.773H53.594V54.367h32.812zM53.594 70.773v57.422H70M53.594 95.383H70"
                ></path>
                <path stroke="#FF2B44" d="M86.406 103.586H70V87.18h16.406z"></path>
                <path
                    stroke="#000"
                    d="M86.406 136.398H70v-16.406h16.406zM135.898 70.773h-32.812V54.367h32.812zM103.086 70.773v57.422h16.406M103.086 95.383h16.406M135.898 103.586h-16.406V87.18h16.406z"
                ></path>
                <path
                    stroke="#FF2B44"
                    d="M135.898 136.398h-16.406v-16.406h16.406z"
                ></path>
                <path
                    stroke="#000"
                    d="M20.508 54.367V37.961h98.984v16.406M70 21.008v33.36"
                ></path>
            </g>
        </svg>
    );
};

export const ServiceSmmIcon2: FC<IconProps> = ({
    ...attributes
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 md:w-[140px] md:h-[140px]"
            fill="none"
            viewBox="0 0 140 141"
            {...attributes}
        >
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M54.356 116.297h31.661"
            ></path>
            <mask
                id="mask0_2115_5916"
                width="140"
                height="141"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "luminance" }}
            >
                <path fill="#fff" d="M0 .5h140v140H0z"></path>
            </mask>
            <g
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                mask="url(#mask0_2115_5916)"
            >
                <path
                    stroke="#000"
                    d="M30.899 32.034H15.283a4.79 4.79 0 0 0-4.789 4.79v44.712M129.506 81.339V36.823a4.79 4.79 0 0 0-4.789-4.79h-15.856M70 88.637 49.289 66.469a4.79 4.79 0 0 0-7 0L28.397 81.34"
                ></path>
                <path
                    stroke="#000"
                    d="M120.278 90.623 97.711 66.469a4.79 4.79 0 0 0-7 0L53.983 105.78"
                ></path>
                <path
                    stroke="#FF2B44"
                    d="M81.913 32.034c0 6.579-5.333 11.912-11.912 11.912s-11.913-5.333-11.913-11.912S63.42 20.12 70 20.12c6.579 0 11.912 5.334 11.912 11.913"
                ></path>
                <path
                    stroke="#FF2B44"
                    d="M99.484 33.918v-3.767c0-.48-.297-.91-.746-1.08l-6.824-2.576a1.17 1.17 0 0 1-.703-.766 22 22 0 0 0-1.76-4.244 1.14 1.14 0 0 1-.044-1.017l3.009-6.659a1.15 1.15 0 0 0-.235-1.29l-2.665-2.664a1.15 1.15 0 0 0-1.29-.236l-6.66 3.008a1.14 1.14 0 0 1-1.016-.043 22 22 0 0 0-4.244-1.76 1.17 1.17 0 0 1-.766-.703l-2.576-6.824c-.17-.449-.6-.746-1.08-.746h-3.767c-.48 0-.91.297-1.08.746l-2.576 6.824c-.13.343-.415.599-.766.703a22 22 0 0 0-4.243 1.76c-.316.17-.69.191-1.018.043L51.776 9.62a1.15 1.15 0 0 0-1.291.236l-2.664 2.664c-.34.339-.433.853-.236 1.29l3.009 6.659c.148.327.127.702-.044 1.017a22 22 0 0 0-1.76 4.244c-.104.35-.36.636-.702.766l-6.824 2.576c-.45.17-.746.6-.746 1.08v3.767c0 .48.297.91.746 1.08l6.824 2.576c.342.13.598.415.702.766a22 22 0 0 0 1.76 4.243c.171.315.192.69.044 1.018l-3.009 6.658c-.197.438-.104.952.236 1.291l2.664 2.664c.34.34.853.434 1.29.236l6.66-3.01a1.14 1.14 0 0 1 1.017.045 22 22 0 0 0 4.243 1.76c.351.104.637.36.766.703l2.576 6.823c.17.45.6.747 1.08.747h3.767c.48 0 .91-.298 1.08-.747l2.576-6.824c.13-.342.415-.598.766-.703a22 22 0 0 0 4.244-1.76c.315-.17.69-.19 1.017-.043l6.659 3.009c.437.197.95.104 1.29-.236l2.665-2.664c.339-.34.433-.853.235-1.29l-3.009-6.66a1.14 1.14 0 0 1 .044-1.017 22 22 0 0 0 1.76-4.243c.104-.351.36-.637.703-.766l6.824-2.577c.449-.17.746-.599.746-1.079"
                ></path>
                <path
                    stroke="#000"
                    d="M137.949 101.814v-5.722a5.47 5.47 0 0 0-5.469-5.47H91.486a5.47 5.47 0 0 0-5.468 5.47v36.888a5.47 5.47 0 0 0 5.468 5.469h40.994a5.47 5.47 0 0 0 5.469-5.469v-20.305M7.52 138.449h40.993a5.47 5.47 0 0 0 5.469-5.469V96.092a5.47 5.47 0 0 0-5.469-5.47H7.52a5.47 5.47 0 0 0-5.47 5.47v36.888a5.47 5.47 0 0 0 5.47 5.469"
                ></path>
                <path
                    stroke="#000"
                    d="m104.257 125.531 17.541-9.801a1.368 1.368 0 0 0 0-2.387l-17.541-9.801a1.366 1.366 0 0 0-2.034 1.193v19.603a1.366 1.366 0 0 0 2.034 1.193M13.734 104.669h28.564M13.734 114.536h28.564M13.734 124.403h28.564"
                ></path>
            </g>
        </svg>
    );
};

export const ServiceSmmIcon3: FC<IconProps> = ({
    ...attributes
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 md:w-[140px] md:h-[140px]"
            fill="none"
            viewBox="0 0 138 137"
            {...attributes}
        >
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M38.012 105.258H8.597a7.547 7.547 0 0 1-7.546-7.547V37.539a7.547 7.547 0 0 1 7.546-7.547H28M132.34 30.585a7.55 7.55 0 0 1 4.609 6.953v60.173a7.546 7.546 0 0 1-7.547 7.546h-29.017M100.385 29.992h11.877"
            ></path>
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M15.968 29.992h-7.37A7.547 7.547 0 0 0 1.05 37.54V97.71a7.547 7.547 0 0 0 7.546 7.547h7.37zM127.287 62.689v17.406M127.287 55.154v.001M97.184 37.872H40.816a2.064 2.064 0 0 1-2.064-2.064v-7.464a5.31 5.31 0 0 1 5.308-5.308h49.88a5.31 5.31 0 0 1 5.308 5.308v7.464c0 1.14-.924 2.063-2.064 2.063"
            ></path>
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M79.035 23.037h-20.07v-5.522C58.965 11.973 63.458 7.48 69 7.48s10.035 4.493 10.035 10.035zM97.184 97.378H40.816c-1.14 0-2.064.924-2.064 2.064v7.463a5.31 5.31 0 0 0 5.308 5.308h49.88a5.31 5.31 0 0 0 5.308-5.308v-7.463c0-1.14-.924-2.064-2.064-2.064M58.965 112.213v22.094c0 .761.617 1.378 1.378 1.378h17.314c.76 0 1.378-.617 1.378-1.378v-13.25"
            ></path>
            <path
                stroke="#FF2B44"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="m124.061 16.196 3.402 5.166c.156.237.359.44.595.595l5.166 3.402a2.085 2.085 0 0 1 0 3.483l-5.166 3.402a2.1 2.1 0 0 0-.595.595l-3.402 5.166a2.085 2.085 0 0 1-3.483 0l-3.402-5.166a2.1 2.1 0 0 0-.595-.595l-5.166-3.402a2.085 2.085 0 0 1 0-3.483l5.166-3.402c.237-.156.439-.358.595-.595l3.402-5.166a2.085 2.085 0 0 1 3.483 0M111.224 45.398l2.715 4.122c.124.19.286.35.474.475l4.123 2.715a1.664 1.664 0 0 1 0 2.779l-4.123 2.715a1.7 1.7 0 0 0-.474.474l-2.715 4.122a1.664 1.664 0 0 1-2.779 0l-2.715-4.122a1.7 1.7 0 0 0-.474-.474l-4.122-2.715a1.663 1.663 0 0 1 0-2.78l4.122-2.714c.189-.124.35-.286.474-.474l2.715-4.123a1.664 1.664 0 0 1 2.779 0M100.357 1.913l2.168 3.292c.099.151.229.28.379.38l3.292 2.167a1.33 1.33 0 0 1 0 2.22l-3.292 2.168c-.15.099-.28.228-.379.378l-2.168 3.292a1.328 1.328 0 0 1-2.22 0l-2.167-3.292c-.1-.15-.228-.28-.379-.379L92.3 9.973a1.33 1.33 0 0 1 0-2.22l3.292-2.168c.15-.099.28-.228.38-.379l2.167-3.292a1.328 1.328 0 0 1 2.219 0M84.667 55.707l-1.702-4.382a3.07 3.07 0 0 0-2.861-1.958H57.896a3.07 3.07 0 0 0-2.861 1.958l-1.702 4.382a3.07 3.07 0 0 1-2.86 1.958h-1.786a3.07 3.07 0 0 0-3.07 3.07v22.064a3.07 3.07 0 0 0 3.07 3.07h40.626a3.07 3.07 0 0 0 3.07-3.07V60.734a3.07 3.07 0 0 0-3.07-3.07h-1.785a3.07 3.07 0 0 1-2.861-1.957"
            ></path>
            <path
                stroke="#FF2B44"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M69.706 78.666a9.329 9.329 0 1 0 0-18.657 9.329 9.329 0 0 0 0 18.657"
            ></path>
        </svg>
    );
};

export const ServiceSmmIcon4: FC<IconProps> = ({
    ...attributes
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 md:w-[140px] md:h-[140px]"
            fill="none"
            viewBox="0 0 140 141"
            {...attributes}
        >
            <path
                stroke="#FF2B44"
                strokeMiterlimit="10"
                d="M20.508 82.805a8.203 8.203 0 1 1-16.406 0 8.203 8.203 0 0 1 16.406 0ZM20.508 17.18a8.203 8.203 0 1 1-16.407 0 8.203 8.203 0 0 1 16.407 0ZM135.898 82.805a8.203 8.203 0 1 1-16.406 0 8.203 8.203 0 0 1 16.406 0ZM135.898 17.18a8.203 8.203 0 1 1-16.406 0 8.203 8.203 0 0 1 16.406 0Z"
            ></path>
            <path
                stroke="#000"
                strokeMiterlimit="10"
                d="M127.695 74.602c0-28.929-21.664-52.86-49.492-56.84M61.797 17.761c-27.828 3.98-49.492 27.912-49.492 56.84"
            ></path>
            <path
                stroke="#FF2B44"
                strokeMiterlimit="10"
                d="M78.203 25.383H61.797V8.977h16.406z"
            ></path>
            <path
                stroke="#000"
                strokeMiterlimit="10"
                d="M20.508 17.18h41.289M78.203 17.18h41.289M78.203 115.617 94.61 82.805 70 41.789 45.39 82.805l16.407 32.812"
            ></path>
            <path
                stroke="#000"
                strokeMiterlimit="10"
                d="M94.61 132.023H45.39v-16.406h49.22zM70 41.79v45.116"
            ></path>
        </svg>
    );
};

export const ServiceSmmIcon5: FC<IconProps> = ({
    ...attributes
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 md:w-[140px] md:h-[140px]"
            fill="none"
            viewBox="0 0 140 141"
            {...attributes}
        >
            <mask
                id="mask0_2115_6054"
                width="140"
                height="141"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "luminance" }}
            >
                <path fill="#fff" d="M0 .5h140v140H0z"></path>
            </mask>
            <g
                strokeLinecap="round"
                strokeLinejoin="round"
                mask="url(#mask0_2115_6054)"
            >
                <path
                    stroke="#000"
                    strokeMiterlimit="22.926"
                    d="M134.133 18.104c1.857.967 3.133 2.912 3.133 5.14V110.1c0 3.185-2.606 5.791-5.79 5.791H8.525c-3.185 0-5.79-2.606-5.79-5.791V23.244c0-3.185 2.605-5.79 5.79-5.79h14.99M56.416 137.063l2.574-20.583m35.62 21.286H45.39m35.626-21.252 2.581 20.646M3.984 104.953h132.032M123.774 28.392h12.86m-132.6 0h21.19"
                ></path>
                <path
                    stroke="#000"
                    strokeMiterlimit="22.926"
                    d="M113.75 20.605V8.703c0-3.008-2.461-5.469-5.469-5.469H31.719c-3.008 0-5.469 2.462-5.469 5.47v95.155m87.5 0V38.604"
                ></path>
                <path
                    stroke="#FF2B44"
                    strokeMiterlimit="22.926"
                    d="M135.484 7.751c2.376 2.376 2.375 6.264 0 8.64L95.539 56.336l-12.96 4.32 4.32-12.96L126.842 7.75c2.376-2.376 6.264-2.376 8.641 0M120.695 15.427l7.112 7.112M91.043 44.927l7.265 7.264"
                ></path>
                <path
                    stroke="#000"
                    strokeMiterlimit="22.926"
                    d="M36.906 17.69h66.19M49.209 29.47h37.052M36.906 41.251h37.871M36.906 53.031h29.668M36.906 64.813h29.668M36.906 76.593h66.19M36.906 88.373h66.19"
                ></path>
                <path
                    stroke="#000"
                    strokeMiterlimit="2.613"
                    d="M36.902 29.47h.003"
                ></path>
            </g>
        </svg>
    );
};

export const ServiceSmmIcon6: FC<IconProps> = ({
    ...attributes
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 md:w-[140px] md:h-[140px]"
            fill="none"
            viewBox="0 0 140 141"
            {...attributes}
        >
            <g
                strokeLinecap="round"
                strokeLinejoin="round"
                clipPath="url(#clip0_2115_6093)"
            >
                <path
                    stroke="#000"
                    strokeMiterlimit="22.926"
                    d="M36.402 136.677c.56-8.78 7.86-15.728 16.781-15.728 8.905 0 16.192 6.92 16.779 15.676m.09-.186c.676-8.667 7.923-15.49 16.764-15.49 8.933 0 16.239 6.965 16.784 15.76m.076-.167c.627-8.716 7.897-15.593 16.773-15.593 9.288 0 16.816 7.529 16.817 16.817H2.734c0-9.288 7.53-16.817 16.817-16.817 8.927 0 16.218 6.952 16.781 15.723"
                ></path>
                <path
                    stroke="#000"
                    strokeMiterlimit="22.926"
                    d="M19.55 99.997c4.625 0 8.409 3.784 8.409 8.408v2.735c0 4.624-3.784 8.408-8.408 8.408-4.625 0-8.408-3.784-8.408-8.408v-2.735c0-4.624 3.783-8.408 8.408-8.408M53.184 99.997c4.624 0 8.408 3.784 8.408 8.408v2.735c0 4.624-3.784 8.408-8.408 8.408-4.625 0-8.409-3.784-8.409-8.408v-2.735c0-4.624 3.784-8.408 8.409-8.408M86.816 99.997c4.625 0 8.409 3.784 8.409 8.408v2.735c0 4.624-3.784 8.408-8.409 8.408-4.624 0-8.408-3.784-8.408-8.408v-2.735c0-4.624 3.784-8.408 8.408-8.408M120.449 99.997c4.625 0 8.408 3.784 8.408 8.408v2.735c0 4.624-3.783 8.408-8.408 8.408-4.624 0-8.408-3.784-8.408-8.408v-2.735c0-4.624 3.784-8.408 8.408-8.408"
                    clipRule="evenodd"
                ></path>
                <path
                    stroke="#000"
                    strokeMiterlimit="22.926"
                    d="M97.067 77.274c14.95-14.95 14.95-39.188 0-54.137-14.95-14.95-39.188-14.95-54.137 0-14.95 14.95-14.95 39.187 0 54.137s39.188 14.95 54.137 0"
                ></path>
                <path
                    stroke="#000"
                    strokeMiterlimit="22.926"
                    d="M62.144 25.439A26 26 0 0 1 70 24.229c14.347 0 25.977 11.63 25.977 25.976 0 14.347-11.63 25.977-25.977 25.977s-25.977-11.63-25.977-25.977c0-2.738.425-5.376 1.21-7.854"
                ></path>
                <path
                    stroke="#FF2B44"
                    strokeMiterlimit="22.926"
                    d="M73.142 63.504c7.348-1.735 11.899-9.099 10.164-16.447-1.736-7.348-9.1-11.899-16.448-10.164-7.348 1.736-11.899 9.1-10.164 16.448 1.736 7.348 9.1 11.899 16.448 10.163"
                ></path>
                <path
                    stroke="#FF2B44"
                    strokeMiterlimit="22.926"
                    d="m105.369 3.234 2.9 8.701 8.7 2.9-11.2 11.2-8.7-2.9-2.901-8.7z"
                    clipRule="evenodd"
                ></path>
                <path
                    stroke="#FF2B44"
                    strokeMiterlimit="22.926"
                    d="M97.069 23.136 70 50.205"
                ></path>
                <path
                    stroke="#000"
                    strokeMiterlimit="2.613"
                    d="m51.63 31.839.003-.002"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_2115_6093">
                    <path fill="#fff" d="M0 .5h140v140H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
};