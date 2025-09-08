import {
  FaProjectDiagram,
  FaUsers,
  FaCalendarAlt,
  FaRegSmile,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaLaptopCode,
  FaMobileAlt,
  FaHandsHelping,
  FaChartLine,
  FaPaintBrush,
  FaRobot,
  FaRocket,
  FaCogs,
  FaChartBar,
  FaTools,
  FaClock,
  FaCloud,
  FaRegHandshake,
  FaCoffee,
  FaMoneyBillAlt,
} from "react-icons/fa";
import {
  FaAndroid,
  FaApple,
  FaBriefcase,
  FaBug,
  FaEthereum,
  FaFlask,
  FaGamepad,
  FaHospital,
  FaLifeRing,
} from "react-icons/fa6";

import { HiOutlineBookOpen } from "react-icons/hi2";

import { MdRealEstateAgent, MdRestaurantMenu } from "react-icons/md";
import design from "./assets/videos/design.mp4";
import development from "./assets/videos/development.mp4";
import software from "./assets/videos/app.mp4";
import digital from "./assets/videos/digital.mp4";
import apps from "./assets/videos/apps.mp4";
import { FiFileText, FiShield } from "react-icons/fi";
import { IoAlertCircleOutline, IoKeyOutline } from "react-icons/io5";

export const navLinks = [
  { id: 1, title: "Home", href: "/" },
  {
    id: 2,
    title: "About Us",
    children: [
      { id: "2a", title: "Company Chairman", href: "/chairman" },
      { id: "2b", title: "Company Managing Directors", href: "/managing-director" },
      { id: "2c", title: "Others Stake Holders", href: "/stakeholders" },
      { id: "2d", title: "Expert Team Members", href: "/expert-team" },
    ],
  },
  { id: 3, title: "Our Projects", href: "/projects" },


  {
    id: 4,
    title: "Our Services",
    megaMenu: true, 
    columns: [
      {
        heading: "Web Design & Development",
        links: [
          { title: "Web Design & Development", href: "https://mysoftheaven.com/service/website-design-development" },
          { title: "Web Application Development", href: "https://mysoftheaven.com/service/web-application-development" },
          { title: "E-Commerce Solution", href: "https://mysoftheaven.com/service/e-commerce-solution" },
          { title: "CMS Development", href: "https://mysoftheaven.com/service/content-management-system-development" },
        ],
        extraHeading: "Custom Software Development",
        extraLinks: [
          { title: "ERP", href: "https://mysoftheaven.com/service/enterprise-resource-planning-erp" },
          { title: "Integrated Office Mgmt System", href: "#" },
          { title: "CRM", href: "#" },
        ],
      },

      {
        heading: "Mobile Apps Development",
        links: [
          { title: "Android Apps", href: "https://mysoftheaven.com/service/android-apps-development" },
          { title: "iOS Apps", href: "https://mysoftheaven.com/service/ios-apps-development" },
          { title: "Windows Apps", href: "https://mysoftheaven.com/service/windows-apps-development" },
          { title: "Hybrid Apps", href: "https://mysoftheaven.com/service/hybrid-mobile-apps" },
        ],
        extraHeading: "Mobile Games Development",
        extraLinks: [
          { title: "Android Games", href: "https://mysoftheaven.com/service/android-games-development" },
          { title: "iOS Games", href: "https://mysoftheaven.com/service/ios-games-development" },
          { title: "Windows Games", href: "https://mysoftheaven.com/service/windows-games-development" },
          { title: "Hybrid Games", href: "https://mysoftheaven.com/service/hybrid-mobile-games-development" },
        ],
      },
      {
        heading: "Digital Marketing",
        links: [
          { title: "SMM", href: "https://mysoftheaven.com/service/social-media-marketing-smm" },
          { title: "Email Marketing", href: "https://mysoftheaven.com/service/email-marketing" },
          { title: "SMS Marketing", href: "https://mysoftheaven.com/service/sms-marketing" },
          { title: "SEO", href: "https://mysoftheaven.com/service/search-engine-optimization-seo" },
        ],
        extraHeading: "Advance Technology",
        extraLinks: [
          { title: "NLP", href: "https://mysoftheaven.com/service/natural-language-processing-nlp" },
          { title: "Machine Learning", href: "https://mysoftheaven.com/service/machine-learning" },
          { title: "Blockchain", href: "https://mysoftheaven.com/service/blockchain-technology" },
        ],
      },
      {
        heading: "Other Services",
        links: [
          { title: "Outsource Development", href: "https://mysoftheaven.com/service/outsource-project-development" },
          { title: "BPO", href: "https://mysoftheaven.com/service/business-process-outsourcing-bpo" },
          { title: "ICT Training", href: "https://mysoftheaven.com/service/ict-training" },
          { title: "ICT Consultancy", href: "https://mysoftheaven.com/service/ict-consultancy" },
          { title: "Support & Maintenance", href: "https://mysoftheaven.com/service/support-maintenance-service" },
          { title: "Manpower Outsource", href: "https://mysoftheaven.com/service/manpower-outsource" },
          { title: "Graphics & Multimedia", href: "https://mysoftheaven.com/service/graphics-design-multimedia" },
          { title: "Domain & Hosting", href: "https://mysoftheaven.com/service/domain-hosting-services" },
        ],
      },
    ],
  },

  {
    id: 5,
    title: "Our Companies",
    children: [
      { id: "5a", title: "Wellasset Company Limited", href: "https://wellassetcompany.com/" },
      { id: "5b", title: "RS Adora LifeStyle LLC", href: "https://rsadora.com/" },
      { id: "5c", title: "BFC 360 Restaurant & Cafe", href: "https://bfc360menu.com/" },
      { id: "5d", title: "Nexorabyte IT Solution", href: "https://nexorabyte.com/" },
      { id: "5e", title: "Prime Clinic LLC", href: "https://primeclinic24.com/" },
      { id: "5f", title: "Fast Deal LLC", href: "https://fastdeal24.com/" },
      { id: "5g", title: "Kaku’s 360 restaurant and cafe", href: "#" },
      { id: "5h", title: "Mega Supermarket", href: "#" },
    ],
  },


  {
    id: 6,
    title: "Our Business",
    children: [
      { id: "3a", title: "Local & International Both", href: "#" },
      { id: "3b", title: "Different Locations like Dubai, Malaysia, Thailand, Cambodia and Bangladesh", href: "#" },
    ],
  },

  { id: 7, title: "Blog", href: "/blog" },
  { id: 8, title: "Career", href: "/career" },
  { id: 9, title: "Contact", href: "/contact" },
];


export const stakeholdersData = [
  {
    id: 1,
    name: "Jane Doe",
    position: "Chief Technology Officer",
    image: "/men.png",
    bio: "Jane has over 15 years of experience in technology and innovation...",
    notableWorks: ["Cloud Transformation Project", "AI R&D Initiative"],
  },
  {
    id: 2,
    name: "John Smith",
    position: "Chief Financial Officer",
    image: "/men.png",
    bio: "John has been leading financial operations with a focus on growth...",
    notableWorks: ["IPO Preparation", "Global Finance Restructuring"],
  },
  {
    id: 3,
    name: "Emily Johnson",
    position: "Chief Marketing Officer",
    image: "/men.png",
    bio: "Emily drives global brand strategy and digital campaigns...",
    notableWorks: ["Global Brand Campaign", "Digital Expansion in Asia"],
  },
];

export const expertTeamData = [
  {
    id: 1,
    name: "Alice Williams",
    role: "Lead Software Engineer",
    image: "/men.png",
    bio: "Alice specializes in full-stack development with 10+ years of experience in scalable applications.",
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Cloud Architect",
    image: "/men.png",
    bio: "Michael designs and optimizes cloud infrastructure for global enterprises.",
  },
  {
    id: 3,
    name: "Sophia Taylor",
    role: "UI/UX Designer",
    image: "/men.png",
    bio: "Sophia creates engaging user experiences through intuitive design systems.",
  },
  {
    id: 4,
    name: "David Johnson",
    role: "Cybersecurity Specialist",
    image: "/men.png",
    bio: "David ensures digital safety by implementing top-tier cybersecurity practices.",
  },
];


export const stats = [
  {
    id: 1,
    title: "Completed Projects",
    count: "+28",
    icon: <FaProjectDiagram size={32} />,
    bgColor: "bg-gray-200",
    textColor: "text-[#458FCD]",
  },
  {
    id: 2,
    title: "Employees",
    count: "+42",
    icon: <FaUsers size={32} />,
    bgColor: "bg-gray-200",
    textColor: "text-[#458FCD]",
  },
  {
    id: 3,
    title: "Years on the Market",
    count: "+6",
    icon: <FaCalendarAlt size={32} />,
    bgColor: "bg-gray-200",
    textColor: "text-[#458FCD]",
  },
  {
    id: 4,
    title: "Clients",
    count: "+26",
    icon: <FaRegSmile size={32} />,
    bgColor: "bg-gray-200",
    textColor: "text-[#458FCD]",
  },
];

export const detailsLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Career", href: "/career" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const informationLinks = [
  { label: "Terms & Condition", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export const contactInfo = {
  phone: "850-123-5021",
  email: "info@lorem.mail",
  address: "Bangla Motor",
  mapLink: "https://www.google.com/maps",
};

export const socialLinks = [
  { icon: <FaFacebook className="text-blue-600" />, href: "/" },
  { icon: <FaYoutube className="text-red-600" />, href: "/" },
  { icon: <FaLinkedin className="text-blue-700" />, href: "/" },
];

export const services = [
  {
    title: "Software Development",
    description:
      "Using advanced technology, we craft user-friendly web solutions that support your business growth. We handle everything from design to deployment to ensure your success!",
    icon: <FaLaptopCode className="w-8 h-8 text-[#3689ce] sm:w-10 sm:h-10" />,
  },
  {
    title: "Mobile App Development",
    description:
      "We specialize in creating intuitive mobile apps for iOS and Android that offer seamless functionality and appealing design. Our solutions captivate users and drive your business forward!",
    icon: <FaMobileAlt className="w-8 h-8 text-[#3689ce] sm:w-10 sm:h-10" />,
  },
  {
    title: "Outsourcing/Advisory",
    description:
      "Our expert outsourcing and advisory services provide comprehensive bookkeeping support to simplify your business operations. Let us handle the details so you can focus on growth!",
    icon: <FaHandsHelping className="w-8 h-8 text-[#3689ce] sm:w-10 sm:h-10" />,
  },
  {
    title: "Digital Marketing",
    description:
      "We boost your brand visibility through data-driven strategies, social media campaigns, and search engine optimization to ensure your message reaches the right audience.",
    icon: <FaChartLine className="w-8 h-8 text-[#3689ce] sm:w-10 sm:h-10" />,
  },
  {
    title: "UI/UX Design",
    description:
      "We create immersive, user-friendly designs that bridge the gap between functionality and aesthetics, delivering outstanding digital experiences.",
    icon: <FaPaintBrush className="w-8 h-8 text-[#3689ce] sm:w-10 sm:h-10" />,
  },
  {
    title: "AI and Machine Learning",
    description:
      "Leveraging AI and machine learning, we provide tailored solutions to automate processes, enhance decision-making, and unlock new opportunities for your business.",
    icon: <FaRobot className="w-8 h-8 text-[#3689ce] sm:w-10 sm:h-10" />,
  },
];

export const industriesData = [
  {
    id: 1,
    title: "Web Development",
    video: development,
    content:
      "We design and develop custom websites tailored to your business needs, ensuring responsive designs, seamless user experiences, and cutting-edge functionality to drive engagement and growth.",
  },
  {
    id: 3,
    title: "Software Integration",
    video: software,
    content:
      "We specialize in seamlessly integrating software solutions to optimize workflows, enhance system interoperability, and drive operational efficiency, ensuring your tools work together harmoniously.",
  },
  {
    id: 4,
    title: "App Development",
    video: apps,
    content:
      "Our app development services deliver innovative and scalable mobile and web applications designed to enhance user engagement, improve business operations, and align with your goals.",
  },
  {
    id: 5,
    title: "Digital Marketing",
    video: digital,
    content:
      "Our digital marketing strategies help businesses reach their target audiences through tailored campaigns, SEO, social media management, and data-driven insights to maximize brand visibility and ROI.",
  },
  {
    id: 6,
    title: "R&D and Prototyping",
    video: design,
    content:
      "We provide real estate services that optimize property management, streamline transactions, and offer data-driven insights for market success.",
  },
];

export const clientData = [
  {
    type: "text",
    title: "Free Estimation",
    description:
      "Nexorabyte IT Solution Ltd offers a free project estimation to help you understand your needs and budget before starting, which ensures complete transparency from the beginning.",
  },
  {
    type: "image",
    src: "https://niftyitsolution.com/wp-content/uploads/2024/08/5.webp",
    alt: "Our client",
  },
  {
    type: "text",
    title: "Code Ownership",
    description:
      "At Nexorabyte IT Solution Ltd, you retain full ownership of the code. You are granted complete control and flexibility over the future of your project without any restrictions.",
  },
  {
    type: "text",
    title: "High-Quality Products",
    description:
      "We deliver high-quality products that are robust, scalable, and built with the latest technology. You can rely on our solutions to exceed your expectations and meet your requirements thoroughly.",
  },
  {
    type: "text",
    title: "Passionate People",
    description:
      "Our team consists of passionate individuals committed to providing innovative solutions and exceptional service. We are dedicated to ensuring the success of your project from start to finish every time.",
  },
  {
    type: "image",
    src: "https://niftyitsolution.com/wp-content/uploads/2024/08/7.webp",
    alt: "Our client",
  },
  {
    type: "image",
    src: "https://niftyitsolution.com/wp-content/uploads/2024/08/2-1.webp",
    alt: "Our client",
  },
  {
    type: "text",
    title: "Project Workshops",
    description:
      "Through our proactive workshops, we help you define product strategies and make key decisions. Consequently, this ensures an effective and collaborative planning process for your project.",
  },
  {
    type: "text",
    title: "Dedicated Team",
    description:
      "At Nexorabyte IT Solution Ltd, each project is managed by a dedicated team, including a certified project manager and experts specifically tailored to meet your requirements.",
  },
];

export const caseStudiesData = [
  {
    id: 1,
    icon: <FaRocket className="w-8 h-8 text-[#3689ce]" />,
    title: "Seamless Integration With Custom Software Development Solutions",
    description:
      "Nexorabyte Software crafted a unified platform for XYZ Corp by integrating Salesforce and QuickBooks, streamlining workflows, improving operations, and boosting productivity with tailored tech solutions.",
  },
  {
    id: 2,
    icon: <FaCogs className="w-8 h-8 text-[#3689ce]" />,
    title: "Empowering Modern Logistics Through Innovative Tech",
    description:
      "Nexorabyte Software enabled DEF Logistics to leverage AI-driven analytics and cloud platforms, transforming nationwide supply chain management into an efficient, real-time system.",
  },
  {
    id: 3,
    icon: <FaChartBar className="w-8 h-8 text-[#3689ce]" />,
    title: "Revolutionizing Data Analysis for Financial Institutions",
    description:
      "Our team at Nexorabyte partnered with leading banks to design predictive analytics tools that minimize risks, enhance decision-making, and ensure compliance across diverse platforms.",
  },
  {
    id: 4,
    icon: <FaTools className="w-8 h-8 text-[#3689ce]" />,
    title: "Cutting-Edge Maintenance Solutions for Smart Cities",
    description:
      "Nexorabyte implemented IoT-based maintenance systems for ABC City, ensuring proactive monitoring, reduced costs, and improved quality of urban services.",
  },
];

export const blogs = [
  {
    id: 1,
    date: "Jan 15",
    category: "Mobile App Development",
    title: "How Nexorabyte Uses Flutter to Build Exceptional Apps",
    description:
      "Discover how Nexorabyte leverages Flutter to create high-performance cross-platform apps for clients worldwide.",
    author: "Jane Doe",
    authorAvatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: 2,
    date: "Feb 10",
    category: "Web Development",
    title: "Nexorabyte's Approach to Scalable Web Applications",
    description:
      "Learn about Nexorabyte's proven strategies for designing and building scalable and secure web applications.",
    author: "John Smith",
    authorAvatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: 3,
    date: "Mar 5",
    category: "Flutter Development",
    title: "10 Reasons Why Nexorabyte Chooses Flutter for Mobile Apps",
    description:
      "Explore the top reasons why Flutter is our go-to framework for building feature-rich mobile applications.",
    author: "Emily Johnson",
    authorAvatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: 4,
    date: "Apr 20",
    category: "UI/UX Design",
    title: "Designing User Experiences That Drive Results with Nexorabyte",
    description:
      "At Nexorabyte, we focus on creating intuitive UI/UX designs that enhance user engagement and satisfaction.",
    author: "Michael Brown",
    authorAvatar:
      "https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: 5,
    date: "May 12",
    category: "Software Development",
    title: "Nexorabyte's Best Practices for Custom Software Solutions",
    description:
      "We reveal our methodologies for delivering tailor-made software solutions that meet diverse business needs.",
    author: "Sophia Davis",
    authorAvatar:
      "https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: 6,
    date: "Jun 25",
    category: "DevOps",
    title: "How Nexorabyte Automates Development with CI/CD",
    description:
      "Learn how Nexorabyte streamlines development cycles using continuous integration and continuous delivery pipelines.",
    author: "Chris Wilson",
    authorAvatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
];

export const advantages = [
  {
    title: "Innovative Solutions",
    description:
      "Nexorabyte IT Solution offers cutting-edge software solutions tailored to meet your business needs, leveraging the latest technology.",
    icon: <FaLaptopCode className="text-4xl text-brand" />,
  },
  {
    title: "Custom Development",
    description:
      "We specialize in developing custom software that fits your specific requirements, ensuring scalability and growth.",
    icon: <FaCogs className="text-4xl text-brand" />,
  },
  {
    title: "On-Time Delivery",
    description:
      "Our team ensures that your software is delivered on time, without compromising on quality or functionality.",
    icon: <FaClock className="text-4xl text-brand" />,
  },
];

export const featuresData = [
  {
    icon: <FaLaptopCode className="text-4xl text-blue-600" />,
    title: "How can Nexorabyte IT Solution help me scale my business?",
    description:
      "Nexorabyte IT Solution provides tailored software solutions that streamline your business processes, helping you increase productivity and grow efficiently.",
  },
  {
    icon: <FaCloud className="text-4xl text-green-600" />,
    title: "How will I access my software solutions?",
    description:
      "Our cloud-based platforms ensure that you can access your business tools anytime, anywhere, improving your team's collaboration and flexibility.",
  },
  {
    icon: <FaChartLine className="text-4xl text-purple-600" />,
    title: "How do these solutions improve my business performance?",
    description:
      "Our data-driven solutions offer powerful analytics that help you make smarter business decisions, boosting profitability and efficiency.",
  },
  {
    icon: <FaRegHandshake className="text-4xl text-yellow-500" />,
    title: "What about customer support and partnership?",
    description:
      "Nexorabyte IT Solution provides continuous support, and our collaborative approach ensures that your software grows with your business needs.",
  },
];

export const footerMenuItems = [
  {
    title: "DETAILS",
    items: [
      { title: "Home", link: "/" },
      { title: "Services", link: "services" },
      { title: "Case Studies", link: "case-studies" },
      { title: "About Us", link: "about" },
      { title: "Blog", link: "blog" },
      { title: "Career", link: "career" },
    ],
  },
  {
    title: "Information",
    items: [
      { title: "Terms & Condition", link: "terms" },
      { title: "Privacy Policy", link: "privacy" },
    ],
  },
  {
    title: "Help & Support",
    items: [{ title: "Support", link: "contact" }],
  },
];

export const content = [
  {
    title: "User-Centric Design",
    description:
      "We prioritize the needs and preferences of the end users in every design decision, ensuring a seamless and intuitive user experience.",
  },
  {
    title: "Security First",
    description:
      "Our team focuses on implementing robust security measures to safeguard user data and ensure the protection of sensitive information.",
  },
  {
    title: "Passionate Team",
    description:
      "Our team of experts is driven by passion and commitment, working tirelessly to create innovative solutions that drive your business forward.",
  },
  {
    title: "Proven Expertise",
    description:
      "With years of experience in the industry, we have a proven track record of delivering top-notch software solutions tailored to meet our clients' needs.",
  },
];

export const teamMembers = [
  {
    name: "Oliver Aguilerra",
    role: "Product Manager",
    bio: "Vincent Van Gogh’s most popular painting, The Starry Night.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwR0VZphHBjpKo94MlmgorR1hylT8cfj2z_F-JdbY8jRDRJ9H6Bce5rnMAxRcdb5HyIlY&usqp=CAU",
    twitter: "/",
    linkedin: "/",
  },
  {
    name: "Marta Clermont",
    role: "Design Team Lead",
    bio: "Amet I love liquorice jujubes pudding croissant I love pudding.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFmBrAp1EUYVooAXWupkxgIiAH6g5cmmsIslLUQO0JzFH1WIFMkT-rnD4HmPyfpfkbhk&usqp=CAU",
    twitter: "/",
    linkedin: "/",
  },
  {
    name: "Anthony Geek",
    role: "CTO, Lorem Inc.",
    bio: "Apple pie macaroon toffee jujubes pie tart cookie caramels.",
    imgSrc:
      "https://img.freepik.com/premium-photo/adorable-male-manager-character-cute-boy-supervisor-illustration-cartoon-office-manager-young-pro_980716-79600.jpg",
    twitter: "/",
    linkedin: "/",
  },
  {
    name: "Marta Clermont",
    role: "Design Team Lead",
    bio: "Amet I love liquorice jujubes pudding croissant I love pudding.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32u8TlDOryp-c9Kq5Mm68UjJEhlOlNxiGDC7jqI0OS9t706z1m7cMnDZVf5xct_bkjNE&usqp=CAU",
    twitter: "/",
    linkedin: "/",
  },
  {
    name: "Oliver Aguilerra",
    role: "Product Manager",
    bio: "Vincent Van Gogh’s most popular painting, The Starry Night.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DKj8N_GC4woHwgsxoPoOx-N-4KO6l_Nik77PIN7XOBtOcZ2yOgsgc_5-KosEQJmCz7k&usqp=CAU",
    twitter: "/",
    linkedin: "/",
  },
  {
    name: "Oliver Aguilerra",
    role: "Product Manager",
    bio: "Vincent Van Gogh’s most popular painting, The Starry Night.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIKWpWOjuoJekAz6QmWAF-BieFRAQ74h3fJFESQVuhWk1lWj3FuoduwdL-_oM4IvuseQ&usqp=CAU",
    twitter: "/",
    linkedin: "/",
  },
];

export const blogPosts = [
  {
    title: "Redefining Tech Solutions for Businesses",
    category: "Technology and Business Solutions",
    date: "19 JAN 2025",
    link: `#`,
    image: `https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    description: `NexoraByte empowers businesses with innovative and scalable technology solutions. Specializing in websites, software, and digital marketing, we focus on delivering results that align with client visions. Using agile methodologies, our skilled team ensures projects are efficient, adaptive, and completed on time. Whether it's mobile apps, enterprise systems, or AI integration, NexoraByte thrives on innovation.`,
  },

  {
    title: "Shaping the Future of Collaborative Tech",
    category: "Innovation in Technology",
    date: "10 Jan 2025",
    link: `#`,
    image: `https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    description:
      "NexoraByte leads the way in cutting-edge tech solutions, focusing on innovation, sustainability, and collaboration. By integrating real-time coding, version control, and communication tools, NexoraByte redefines teamwork. With intelligent code suggestions and bug detection, the company boosts productivity and fosters innovation, shaping the future of technology solutions.",
  },
  {
    title: "Your Trusted Software Development Partner",
    category: "Business Solutions",
    date: "5 Jan 2025",
    link: `#`,
    image: `https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    description:
      "Choosing NexoraByte means partnering with experts who turn your vision into impactful solutions. From startups to established businesses, NexoraByte blends technical expertise with your unique needs to deliver measurable value. Transform your ideas with Nexorabyte today.",
  },
];

export const caseStudies = [
  {
    title: "Safety at Sea",
    category: "CLOUD",
    description: "IoT Solution",
    icon: <FaCloud className="mx-auto mb-4 text-6xl text-blue-500" />,
  },
  {
    title: "Robi VR Master Blaster",
    category: "ANDROID",
    description: "Activation Campaign",
    icon: <FaAndroid className="mx-auto mb-4 text-6xl text-green-500" />,
  },
  {
    title: "Career Guidance Solutions",
    category: "BUSINESS INTELLIGENCE",
    description: "LMS Solution",
    icon: <FaChartLine className="mx-auto mb-4 text-6xl text-purple-500" />,
  },
  {
    title: "Ethereum Smart Contract",
    category: "BLOCKCHAIN",
    description: "Blockchain Development",
    icon: <FaEthereum className="mx-auto mb-4 text-6xl text-gray-600" />,
  },
  {
    title: "Restaurant Management System",
    category: "RESTAURANT",
    description: "Food Service Solution",
    icon: (
      <MdRestaurantMenu className="mx-auto mb-4 text-6xl text-orange-500" />
    ),
  },
  {
    title: "Digital Wallet",
    category: "FINTECH",
    description: "Fintech Solution",
    icon: <FaLaptopCode className="mx-auto mb-4 text-6xl text-red-500" />,
  },
  {
    title: "Gaming App",
    category: "GAME",
    description: "Game Development",
    icon: <FaGamepad className="mx-auto mb-4 text-6xl text-indigo-500" />,
  },
  {
    title: "Hospital Management System",
    category: "HEALTHCARE",
    description: "Healthcare Solution",
    icon: <FaHospital className="mx-auto mb-4 text-6xl text-green-600" />,
  },
  {
    title: "iOS Mobile App",
    category: "IOS",
    description: "iOS Application",
    icon: <FaApple className="mx-auto mb-4 text-6xl text-gray-800" />,
  },
  {
    title: "Pharmaceutical App",
    category: "PHARMACEUTICAL",
    description: "Pharma Solution",
    icon: <FaFlask className="mx-auto mb-4 text-6xl text-teal-500" />,
  },
  {
    title: "Real Estate Portal",
    category: "REAL ESTATE",
    description: "Property Management",
    icon: <MdRealEstateAgent className="mx-auto mb-4 text-6xl text-blue-700" />,
  },
  {
    title: "Bug Tracking System",
    category: "SQA",
    description: "Quality Assurance Tool",
    icon: <FaBug className="mx-auto mb-4 text-6xl text-red-600" />,
  },
];

export const jobs = [
  {
    title: "Senior Tech Lead",
    experience: "4+ Years",
    salary: "Negotiable (Monthly)",
    deadline: "28 Dec 2025",
  },
  {
    title: "Senior Technical Project Manager",
    experience: "5+ Years",
    salary: "Negotiable (Monthly)",
    deadline: "28 Dec 2025",
  },
  {
    title: "Junior Executive / Executive (BPO)",
    experience: "2-3 Years",
    salary: "Tk. 18000 - 22000 (Monthly)",
    deadline: "10 Jan 2025",
  },
];

export const benefits = [
  {
    title: "The quick fox",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.",
  },
  {
    title: "Leverage agile",
    description:
      "Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig.",
  },
  {
    title: "Organically grow",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.",
  },
  {
    title: "Have a good one",
    description:
      "Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig.",
  },
  {
    title: "Trough pomfret",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.",
  },
  {
    title: "Disrupt inspire",
    description:
      "Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig.",
  },
];

export const benefitedContent = [
  {
    title: "Mobile Bill & Allowances",
    description:
      "We cover your mobile bill, tour, and medical expenses to keep you connected and cared for – anytime.",
    icon: <FaMobileAlt className="w-8 h-8 text-indigo-500 sm:w-12 sm:h-12" />,
  },
  {
    title: "Savings & Security",
    description:
      "Secure your future with our Provident Fund, Insurance, Gratuity plans, and earned leave encashment for peace of mind.",
    icon: <FaBriefcase className="w-8 h-8 text-yellow-500 sm:w-12 sm:h-12" />,
  },
  {
    title: "Work-Life Balance",
    description:
      "Enjoy two holidays weekly and flexible hours to maintain a healthy balance between work and personal life.",
    icon: <FaLifeRing className="w-8 h-8 text-green-500 sm:w-12 sm:h-12" />,
  },
  {
    title: "Meals & Snacks",
    description:
      "Stay energized with fully subsidized lunches, evening snacks, and unlimited tea and coffee throughout the day.",
    icon: <FaCoffee className="w-8 h-8 text-blue-500 sm:w-12 sm:h-12" />,
  },
  {
    title: "Salary & Bonuses",
    description:
      "Annual salary reviews and festival bonuses ensure your efforts are recognized and rewarded generously.",
    icon: <FaMoneyBillAlt className="w-8 h-8 text-teal-500 sm:w-12 sm:h-12" />,
  },
  {
    title: "Growth & Recreation",
    description:
      "Advance your career with professional development opportunities, and relax with our yearly recreational tour.",
    icon: <FaChartLine className="w-8 h-8 text-purple-500 sm:w-12 sm:h-12" />,
  },
];

export const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content:
      "Welcome to [Company Name]. By accessing and using our software and services, you agree to be bound by these Terms and Conditions.",
    icon: HiOutlineBookOpen,
  },
  {
    id: "definitions",
    title: "Definitions",
    content:
      "Service refers to the software, applications, and tools provided by [Company Name]. User refers to any individual or entity accessing or using our Service.",
    icon: FiFileText,
  },
  {
    id: "licensing",
    title: "Software Licensing",
    content:
      "We grant you a limited, non-exclusive, non-transferable license to use our software in accordance with these terms. Any unauthorized use or distribution is strictly prohibited.",
    icon: IoKeyOutline,
  },
  {
    id: "privacy",
    title: "Privacy & Data",
    content:
      "We collect and process personal data as described in our Privacy Policy. By using our Service, you consent to such processing and warrant that all data provided is accurate.",
    icon: FiShield,
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by law, [Company Name] shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our Service.",
    icon: IoAlertCircleOutline,
  },
];
export const dashboardData = [
  {
    key: "1",
    name: "John Brown",
    email: "John@gmail.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi illo sunt culpa, at deleniti impedit rerum facere vitae, Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi illo sunt culpa, at deleniti impedit rerum facere vitae, nisi inventore quis. Repellat suscipit quaerat adipisci? Aliquam, accusamus totam quae culpa inventore itaque quasi ducimus aliquid iste numquam, non veritatis.",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    email: "Jim@gmail.com",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi illo sunt culpa, at deleniti impedit rerum facere vitae, nisi inventore quis. Repellat suscipit quaerat adipisci? Aliquam, accusamus totam quae culpa inventore itaque quasi ducimus aliquid iste numquam, non veritatis.",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    email: "black@gmail.com",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi illo sunt culpa, at deleniti impedit rerum facere vitae, nisi inventore quis. Repellat suscipit quaerat adipisci? Aliquam, accusamus totam quae culpa inventore itaque quasi ducimus aliquid iste numquam, non veritatis.",
    tags: ["cool", "teacher"],
  },
  {
    key: "4",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magnam itaque molestias suscipit beatae, atque quos quaerat, excepturi quasi tempore fugiat nobis dolorem deleniti accusamus facilis doloribus, expedita sed repellat.",
    tags: ["awesome", "mentor"],
  },
  {
    key: "5",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quia quam temporibus ullam magnam, ad quasi perspiciatis error laborum dolores cupiditate amet fugiat labore voluptatibus, deleniti architecto nesciunt mollitia omnis.",
    tags: ["helpful", "engineer"],
  },
  {
    key: "6",
    name: "Bob Smith",
    email: "bob.smith@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil animi, officia distinctio at minus voluptates non dolor voluptatem, quibusdam ipsam perferendis voluptate laboriosam odit, dolorem optio incidunt libero quisquam reiciendis.",
    tags: ["creative", "developer"],
  },
  {
    key: "7",
    name: "Chris Evans",
    email: "chris.evans@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde voluptas nemo, dolores consequatur recusandae expedita corrupti quas amet pariatur voluptatum reprehenderit alias cupiditate ullam nostrum tempore hic. Sunt, fuga.",
    tags: ["leader", "actor"],
  },
  {
    key: "8",
    name: "Diana Prince",
    email: "diana.prince@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus mollitia quos labore veritatis exercitationem, excepturi debitis repellendus consectetur doloremque natus nesciunt atque. Sapiente voluptas voluptate temporibus eligendi commodi molestias totam!",
    tags: ["hero", "icon"],
  },
  {
    key: "9",
    name: "Ethan Hunt",
    email: "ethan.hunt@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illum quidem voluptatum non, corporis neque eveniet recusandae accusamus, maiores minus tempore quae nobis nemo aliquid excepturi harum mollitia, corrupti ducimus.",
    tags: ["spy", "tactician"],
  },
  {
    key: "10",
    name: "Fiona Gallagher",
    email: "fiona.g@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quisquam fugit nostrum earum harum natus, saepe amet, voluptates corrupti tempore minima reprehenderit animi vero neque aut! Quod ad aliquam adipisci!",
    tags: ["resilient", "fighter"],
  },
  {
    key: "11",
    name: "George Bailey",
    email: "george.bailey@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi numquam odio ratione vero laborum at dicta voluptas iste ex, molestias eveniet vel. Deserunt autem consectetur quibusdam, dignissimos minima reiciendis libero.",
    tags: ["kind", "philanthropist"],
  },
  {
    key: "12",
    name: "Hannah Montana",
    email: "hannah.montana@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum repellendus aspernatur illum cumque. Sit quidem laboriosam, delectus reiciendis perspiciatis earum impedit, dolores voluptas minus placeat alias, labore magni voluptatem.",
    tags: ["singer", "performer"],
  },
  {
    key: "13",
    name: "Isaac Newton",
    email: "isaac.newton@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime deserunt reiciendis saepe neque totam necessitatibus! Harum adipisci laboriosam eveniet. Animi dolorem natus quidem nihil obcaecati at, temporibus quos doloremque.",
    tags: ["scientist", "visionary"],
  },
  {
    key: "14",
    name: "Jack Sparrow",
    email: "jack.sparrow@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil obcaecati dolorem rerum. Doloribus voluptatibus maiores quaerat error. Recusandae debitis aut quod nobis repudiandae pariatur, asperiores distinctio adipisci sapiente at!",
    tags: ["pirate", "adventurer"],
  },
  {
    key: "15",
    name: "Karen Page",
    email: "karen.page@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, tempora inventore dolores repellendus labore odit quod temporibus. Optio, accusantium doloribus facilis iure unde culpa labore ad distinctio quisquam porro perferendis.",
    tags: ["journalist", "brave"],
  },
  {
    key: "16",
    name: "Lara Croft",
    email: "lara.croft@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquid maiores neque, possimus tempora doloremque ipsum voluptate quidem non dolorum eaque illo accusantium repellendus? Animi vero rem molestias facilis nostrum.",
    tags: ["explorer", "fighter"],
  },
  {
    key: "17",
    name: "Michael Scott",
    email: "michael.scott@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, iure ex porro, repellendus nisi maxime expedita unde dolores assumenda omnis dignissimos recusandae fuga amet temporibus. Dolorem quibusdam aspernatur veniam ratione.",
    tags: ["manager", "funny"],
  },
  {
    key: "18",
    name: "Natasha Romanoff",
    email: "natasha.romanoff@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quisquam fugiat eveniet labore dolore itaque veritatis porro officia ad fugit harum accusamus quia laborum numquam sunt culpa deleniti eos consectetur.",
    tags: ["spy", "hero"],
  },
  {
    key: "19",
    name: "Oliver Queen",
    email: "oliver.queen@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat libero nemo reprehenderit. Quas eum nostrum unde quaerat reprehenderit, amet ex error iste voluptatum officiis, doloribus animi deserunt odit laborum cumque!",
    tags: ["archer", "hero"],
  },
  {
    key: "20",
    name: "Peter Parker",
    email: "peter.parker@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt optio repellat rerum rem! Nostrum natus suscipit nemo neque ad ea itaque! Nulla repellat totam rerum assumenda asperiores maxime delectus atque?",
    tags: ["student", "hero"],
  },
  {
    key: "21",
    name: "Quinn Fabray",
    email: "quinn.fabray@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugiat hic nihil aliquam porro reprehenderit maxime non voluptate facere reiciendis distinctio vero sit ut pariatur, ad mollitia! Tempora, sunt!",
    tags: ["cheerleader", "friend"],
  },
  {
    key: "22",
    name: "Rachel Green",
    email: "rachel.green@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum earum asperiores fugiat vel accusamus veniam itaque sunt commodi hic! Ipsum iure totam impedit possimus officia! Reprehenderit perspiciatis eveniet soluta mollitia.",
    tags: ["fashionista", "kind"],
  },
  {
    key: "23",
    name: "Steve Rogers",
    email: "steve.rogers@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ex voluptates eius maiores quod minima tempore sint dolorum ratione. Tempore aperiam adipisci culpa saepe. Nihil, officia porro! Consequatur, rem maxime?",
    tags: ["leader", "hero"],
  },
  {
    key: "24",
    name: "Tony Stark",
    email: "tony.stark@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugit ducimus reprehenderit maxime deserunt. Accusantium exercitationem ipsum voluptatibus soluta nisi aliquam itaque necessitatibus sequi dolorem pariatur. Ipsam magni molestias voluptatem.",
    tags: ["genius", "billionaire"],
  },
  {
    key: "25",
    name: "Uma Thurman",
    email: "uma.thurman@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus porro impedit ea reiciendis obcaecati sunt, hic sed maxime libero fugiat temporibus architecto, reprehenderit animi quisquam distinctio nihil eum. Optio.",
    tags: ["actress", "icon"],
  },
  {
    key: "26",
    name: "Victor Hugo",
    email: "victor.hugo@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nemo harum cumque. Excepturi, maiores amet magnam, enim doloremque quaerat, culpa deleniti blanditiis perspiciatis quis numquam. Natus laborum quod qui quasi.",
    tags: ["writer", "visionary"],
  },
  {
    key: "27",
    name: "Wanda Maximoff",
    email: "wanda.maximoff@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perferendis sapiente ratione mollitia suscipit unde possimus consequuntur, dolorum quam ipsa minima dolorem, iste officiis. Nobis odio odit nihil corporis neque.",
    tags: ["hero", "powerful"],
  },
  {
    key: "28",
    name: "Xander Cage",
    email: "xander.cage@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quo cupiditate laboriosam aliquam dolor consectetur modi quas ratione totam nemo reprehenderit fugiat, repellat placeat, commodi recusandae facilis labore veniam minima.",
    tags: ["athlete", "adventurer"],
  },
  {
    key: "29",
    name: "Ygritte Wildling",
    email: "ygritte.wildling@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid magni, eveniet quas mollitia harum adipisci voluptate minus illo soluta labore sed eos enim. Aliquam facilis repudiandae explicabo expedita quasi.",
    tags: ["wildling", "brave"],
  },
  {
    key: "30",
    name: "Zara Khan",
    email: "zara.khan@example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi velit sapiente officia voluptatum itaque possimus hic vel dicta! Similique consequatur, deserunt excepturi, architecto labore ullam deleniti voluptas soluta iusto facilis!",
    tags: ["designer", "leader"],
  },
];
