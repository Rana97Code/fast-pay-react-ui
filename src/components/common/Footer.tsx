import { FaYoutube, FaFacebook, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_SITE_SETTINGS_QUERY } from "../../graphql/queries/siteSetting.query";
import { footerMenuItems } from "../../data";
import Logo from "/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  const { data } = useQuery(GET_SITE_SETTINGS_QUERY);

  // Use backend data if available, otherwise use static defaults
  const siteSettings = data?.getSiteSettings?.[0] || {
    logo: Logo,
    footerText:
      "FastPay IT Company Limited is a premier software development firm delivering cutting-edge solutions that drive innovation and growth for businesses of all sizes.",
    footerSubText: "FastPay IT Company Limited",
    youtube: "https://www.youtube.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://x.com/",
  };

  return (
    <div className="relative bg-[#0A2540] text-white">
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          {/* Logo & Description */}
          <div className="md:max-w-md lg:col-span-2">
            <Link to="/" className="inline-block text-center">
              <img
                src={siteSettings.logo}
                alt="Company Logo"
                className="object-contain h-16"
              />
            </Link>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-deep-purple-50">{siteSettings.footerText}</p>
            </div>
          </div>

          {/* Footer Menu */}
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
            {footerMenuItems?.map((menu) => (
              <div key={menu.title}>
                <p className="font-semibold tracking-wide text-white text-teal-accent-400">
                  {menu.title}
                </p>
                <ul className="mt-2 space-y-2">
                  {menu.items?.map((item, idx) => (
                    <li key={idx} className="mt-6">
                      <Link
                        to={`/${item.link}`}
                        className="transition-colors duration-300 text-deep-purple-50 hover:text-[#68b0eb] hover:underline text-sm font-md"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright & Social Links */}
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-200 sm:flex-row">
          <p className="text-sm text-white">
            <span className="text-[18px] mb-2 font-bold">©</span> Copyright {year}{" "}
            <span className="text-[#3689ce] font-bold">{siteSettings.footerSubText}.</span>{" "}
            All rights reserved.
          </p>

          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            {siteSettings.youtube && (
              <a href={siteSettings.youtube} target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-2xl hover:text-gray-500" style={{ color: "#FF0000" }} />
              </a>
            )}
            {siteSettings.instagram && (
              <a href={siteSettings.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-gray-500" style={{ color: "#E1306C" }} />
              </a>
            )}
            {siteSettings.facebook && (
              <a href={siteSettings.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-gray-500" style={{ color: "#1877F2" }} />
              </a>
            )}
            {siteSettings.linkedin && (
              <a href={siteSettings.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-black" style={{ color: "#0077B5" }} />
              </a>
            )}
            {siteSettings.twitter && (
              <a href={siteSettings.twitter} target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="text-xl p-[2px] bg-black rounded-[3px] text-white hover:text-gray-500" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
