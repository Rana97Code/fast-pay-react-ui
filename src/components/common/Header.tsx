import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks as staticNavLinks } from "../../data";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { useQuery } from "@apollo/client";
import { GET_ALL_COMPANIES } from "../../graphql/queries/companies.queries";
import { GET_SITE_SETTINGS_QUERY } from "../../graphql/queries/siteSetting.query";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data, loading, error } = useQuery(GET_ALL_COMPANIES);
  console.log(loading, error)
  const companies = data?.getAllCompanies || [];

  const { data: siteData, loading: siteLoading } = useQuery(GET_SITE_SETTINGS_QUERY);
  const siteSettings = siteData?.getSiteSettings?.[0]; 

  const navLinks = staticNavLinks.map((link) =>
    link.title === "Our Companies"
      ? {
          ...link,
          children: companies.map((c: any, index: number) => ({
            id: `5${String.fromCharCode(97 + index)}`,
            title: c.title,
            href: c.href,
          })),
        }
      : link
  );

  return (
    <div className="sticky top-0 z-20 py-2 px-4 sm:px-8 bg-[#111E40] font-inter">
      <div className="relative flex items-center justify-between max-w-screen-xl mx-auto 2xl:max-w-screen-2xl">
        {/* Logo */}
        <NavLink to="/" className="inline-block text-center">
          <img
            src={siteLoading ? "/logo.png" : siteSettings?.logo || "/logo.png"}
            alt={siteSettings?.footerText || "FastPay IT Company Limited"}
            className="object-contain h-16 sm:h-20"
          />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden space-x-8 lg:flex relative">
          {navLinks.map((link) => (
            <li key={link.id} className="relative group">
              {/* Normal Links */}
              {link.href && !link.children && !link.megaMenu && (
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `font-semibold tracking-wide transition-colors duration-200 text-lg ${
                      isActive
                        ? "text-[#458FCD] border-b-2 border-[#458FCD] pb-1"
                        : "text-white hover:text-[#458FCD]"
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              )}

              

              {/* Dropdown */}
              {link.children && !link.megaMenu && (
                <>
              <span className="relative cursor-pointer px-3 py-2 rounded-md font-semibold text-white hover:bg-[#1E2B5B] hover:text-white text-lg">
                  {link.title}
                </span>
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[300px] bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {link.children.map((child: any) =>
                    child.href.startsWith("http") ? (
                      <a
                        key={child.id}
                        href={child.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        {child.title}
                      </a>
                    ) : (
                      <NavLink
                        key={child.id}
                        to={child.href}
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        {child.title}
                      </NavLink>
                    )
                  )}
                </div>

                </>
              )}

              {/* Mega Menu */}
              {link.megaMenu && (
                <>
                  <span className="cursor-pointer font-semibold text-white hover:text-[#458FCD] text-lg">
                    {link.title}
                  </span>
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[1000px] bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-6 grid grid-cols-4 gap-6">
                    {link.columns.map((col, colIndex) => (
                      <div key={colIndex}>
                        <h4 className="font-semibold mb-2">{col.heading}</h4>
                        <ul className="space-y-1">
                          {col.links.map((item, i) => (
                            <li key={i}>
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-2 py-1 hover:bg-gray-100 rounded"
                              >
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                        {col.extraHeading && (
                          <>
                            <h4 className="font-semibold mt-4 mb-2">{col.extraHeading}</h4>
                            <ul className="space-y-1">
                              {col.extraLinks.map((extra, j) => (
                                <li key={j}>
                                  <a
                                    href={extra.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-2 py-1 hover:bg-gray-100 rounded"
                                  >
                                    {extra.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiBars3CenterLeft className="text-4xl text-white font-thin scale-x-[-1]" />
          </button>

          {isMenuOpen && (
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-8 bg-gray-900 bg-opacity-95">
              <button
                aria-label="Close Menu"
                title="Close Menu"
                className="absolute p-2 text-3xl text-white transition duration-200 rounded-full top-6 right-6 hover:bg-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                ✕
              </button>

              <nav className="w-full text-center">
                <ul className="space-y-6">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      {link.megaMenu ? (
                        <details>
                          <summary className="cursor-pointer py-2 px-6 text-2xl font-bold text-white">
                            {link.title}
                          </summary>
                          {link.columns.map((col, idx) => (
                            <div key={idx} className="mt-2 space-y-1">
                              <h4 className="text-lg font-semibold text-gray-200">{col.heading}</h4>
                              {col.links.map((item, i) => (
                                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-white">
                                  {item.title}
                                </a>
                              ))}
                              {col.extraHeading && (
                                <>
                                  <h4 className="mt-2 text-lg font-semibold text-gray-200">{col.extraHeading}</h4>
                                  {col.extraLinks.map((extra, j) => (
                                    <a key={j} href={extra.href} target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-white">
                                      {extra.title}
                                    </a>
                                  ))}
                                </>
                              )}
                            </div>
                          ))}
                        </details>
                      ) : link.children ? (
                        <details>
                          <summary className="cursor-pointer py-2 px-6 text-2xl font-bold text-white">{link.title}</summary>
                          <ul className="pl-6 space-y-2 mt-2">
                            {link.children.map((child: any) => (
                              <li key={child.id}>
                                <a href={child.href} target="_blank" rel="noopener noreferrer" className="block text-lg text-gray-300 hover:text-white">
                                  {child.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </details>
                      ) : link.href ? (
                        <NavLink
                          to={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-2 px-6 text-2xl font-bold text-white hover:text-[#458FCD]"
                        >
                          {link.title}
                        </NavLink>
                      ) : (
                        <span className="block py-2 px-6 text-2xl font-bold text-white cursor-default">{link.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
