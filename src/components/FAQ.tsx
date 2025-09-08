import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_ALL_FAQ } from "../graphql/queries/about.queries";

interface ItemProps {
  title: string;
  children: React.ReactNode;
}

const Item = ({ title, children }: ItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        type="button"
        aria-label={isOpen ? "Collapse item" : "Expand item"}
        title={title}
        className="flex items-center justify-between w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <svg
          viewBox="0 0 24 24"
          className={`w-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="pb-5 pr-1 text-gray-600"
          data-aos="fade-in"
          data-aos-duration="400"
        >
          {children}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  // Fetching the FAQ data from GraphQL
  const { data, loading, error } = useQuery(GET_ALL_FAQ);

  if (loading) return <p>Loading FAQs...</p>;
  if (error) return <p>Error loading FAQs: {error.message}</p>;

  return (
    <section className="w-full px-4 py-20 bg-gray-50 lg:px-0">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h2
            className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Frequently Asked <span className="text-[#3689ce]">Questions</span>
          </h2>
          <p
            className="mt-4 text-lg text-gray-600"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Find clear answers to your most common questions about Nexorabyte IT
            Solution’s services, technologies, and support. We’re here to help.
          </p>
        </div>

        <div className="space-y-6">
          {/* Dynamically rendering the FAQ items */}
          {data?.getAllFqas?.map(
            (faq: { id: string; question: string; answer: string }) => (
              <Item key={faq.id} title={faq.question}>
                {faq.answer}
              </Item>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
