import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import project1 from './images/Project-1.png'
import project2 from './images/Project-2.png'
import project3 from './images/Project-3.png'
import project4 from './images/Project-4.png'
import project5 from './images/Project-5.png'

const projects = [
  {
    id:1,
    image: project1,
    title: "Refreshing Fanta: A Modern Product Page",
    skills: "UI design, product page design, animation, visual hierarchy, user experience",
    description: "The Fanta product page was designed to showcase the brand's vibrant and refreshing personality. The goal was to create a visually appealing and engaging experience that highlights the diverse range of Fanta flavors.",
    designApproach: 
    [
      "Visual Hierarchy: Prioritized the most important information, such as product images and flavor descriptions, through strategic placement and visual emphasis.",
      "Animation: Incorporated subtle animations to enhance user engagement and draw attention to key elements.",
      "Color Palette: Used a vibrant and playful color palette that aligns with the Fanta brand identity.",
      "Responsive Design: Ensured a seamless experience across different devices and screen sizes."
    ],
    keyFeatures: 
    [
      "Product Carousel: A visually appealing carousel that showcases the various Fanta flavors with smooth transitions.",
      "Interactive Elements: Hover effects and subtle animations to provide visual feedback and enhance user engagement.",
      "Clear Call-to-Action: A prominent next button to encourage users to explore the product range.",
    ],
    results: 
    [
      "Increased User Engagement: The animated product carousel and interactive elements would capture user attention and encouraged exploration.",
      "Improved Brand Perception: The visually appealing design reinforced the Fanta brand's fun and refreshing image.",
      "Enhanced User Experience: The clear navigation and intuitive layout makes it easy for users to find the information they needed."
    ]
  },
  {
    id:2,
    image: project2,
    title: "E-Commerce App: A Mobile App for Fashion Enthusiasts",
    skills: "UI design, UX design, e-commerce design, mobile app design, user flow",
    description: "This mobile app is designed to provide a seamless and enjoyable shopping experience for fashion-conscious individuals. The goal was to create a visually appealing and intuitive interface that encourages users to browse, discover, and purchase trendy clothing items.",
    designApproach: 
    [
      "User Personas: Developed user personas to understand the target audience's needs, preferences, and behaviors.",
      "User Flow: Created a clear and logical user flow to guide users through the app's various features.",
      "Visual Design: Designed a visually appealing interface with a focus on modern aesthetics and easy navigation.",
      "Prototyping: Created interactive prototypes to test the app's functionality and gather user feedback."
    ],
    keyFeatures: 
    [
      "Personalized Recommendations: Suggested products based on user preferences and browsing history.",
      "Visual Search: Allowed users to search for products by uploading images or taking photos",
      "Wishlist and Cart Functionality: Enabled users to save items for later and manage their shopping cart.",
      "Secure Checkout Process: Implemented a secure and streamlined checkout process to ensure a hassle-free shopping experience."
    ],
    results: 
    [
      "Increased User Engagement: The app's visually appealing design and personalized recommendations encourages users to explore and shop.",
      "Improved Conversion Rates: The optimized user flow and secure checkout process led to higher conversion rates.",
    ]
  },
   {
    id:3,
    image: project3,
    title: "Funda Nam: A Personalized Learning Platform",
    skills: "UI design, UX design, educational app design, interaction design, client collaboration",
    description: "Funda Nam is a mobile app designed to provide students with a personalized and engaging learning experience. As a UX/UI designer, I collaborated closely with the client to understand their specific needs and goals. We conducted user research to identify key pain points and opportunities for improvement.",
    designApproach: 
    [
      "User Research: Conducted interviews and surveys to gather insights into student preferences and behaviors.",
      "Information Architecture: Created a clear and intuitive navigation structure to help students easily find the courses and resources they need.",
      "Wireframing: Developed low-fidelity wireframes to visualize the app's layout, content, and interactions.",
      "Visual Design: Designed a visually appealing and user-friendly interface with a focus on readability and accessibility.",
      "Prototyping: Created interactive prototypes to test the app's functionality and gather user feedback."
    ],
    keyFeatures: 
    [
      "Personalized Learning Paths: Students can create customized learning paths based on their interests and goals",
      "Course Catalog: A comprehensive library of courses covering various subjects and difficulty levels.",
      "Interactive Content: Engaging learning materials, including videos, quizzes, and discussion forums.",
      "Social Features: Students can connect with classmates, collaborate on projects, and participate in group discussions."
    ],
    results: 
    [
      "Successful Client Collaboration: The project was completed on time and within budget, meeting the client's expectations.",
    ],
    lessonLearnt: 
    [
      "The importance of conducting thorough user research to understand target audience needs.",
      "The value of collaboration with clients to ensure the design aligns with their vision.",
      "The effectiveness of using prototyping to gather early feedback and iterate on the design."
    ] 
  },
   {
    id:4,
    image: project4,
    title: "Synton Group: Building Websites that Convert",
    skills: "UI design, UX design, web development, project management, client communication",
    description: "Synton Group is a startup company specializing in creating custom websites for businesses and individuals. As a UX/UI designer and web developer, I played a key role in delivering high-quality web solutions that meet client needs and exceed expectations.",
    designApproach: 
    [
      "Client Consultation: Conducted initial meetings with clients to understand their business goals, target audience, and desired website features.",
      "Research and Planning: Conducted market research to identify industry trends and best practices. Developed a project plan outlining the scope of work, timeline, and deliverables.",
      "Wireframing and Prototyping: Created wireframes to establish the website's structure and layout. Developed interactive prototypes to test user flow and gather feedback",
      "Visual Design: Designed a visually appealing and user-friendly interface with a focus on readability and accessibility.",
    ],
    keyFeatures: 
    [
      "Custom Website Design: Created unique and visually appealing website designs that aligned with the client's brand identity.",
      "Responsive Design: Ensured the website was accessible and functional across different devices and screen sizes.",
      "User-Friendly Interface: Designed intuitive navigation and user interactions to enhance the user experience.",
      "Search Engine Optimization (SEO): Implemented SEO best practices to improve the website's visibility in search engine results.",
      "Content Management System (CMS): Provided a CMS platform for clients to easily manage and update their website content."
    ],
    results: 
    [
      "Satisfied Clients: Successfully delivered websites that met client expectations and exceeded their goals.",
      "Strong Client Relationships: Built strong relationships with clients through effective communication and collaboration."
    ]
  },
  {
    id:5,
    image: project5,
    title: "Blooming Business: A Modern Netflorist Website",
    skills: "UI design, UX design, website redesign, visual branding, responsive design",
    description: "The Netflorist website redesign aimed to create a more modern, user-friendly, and visually appealing online shopping experience for customers. The goal was to enhance the brand's online presence and drive sales.",
    designApproach: 
    [
      "Brand Analysis: Conducted a thorough analysis of the Netflorist brand identity, values, and target audience.",
      "Competitive Analysis: Evaluated competing online florists to identify best practices and areas for improvement.",
      "User Research: Conducted user interviews and surveys to gather insights into customer preferences and pain points.",
      "Visual Design: Designed a visually appealing and modern interface that aligns with the Netflorist brand.",
      "Responsive Design: Ensured a seamless experience across different devices and screen sizes."
    ],
    keyFeatures: 
    [
      "Enhanced Product Catalog: A visually appealing product catalog with high-quality images and detailed descriptions.",
      "Improved Navigation: A clear and intuitive navigation menu to help users easily find the products they need.",
      "Personalized Recommendations: Suggested products based on user preferences and browsing history."
    ],
    results: 
    [
      "Increased User Engagement: The visually appealing design and should improve navigation led to increase user engagement and time spent on the website.",
      "Higher Conversion Rates: The optimized user experience and streamlined checkout process contributed to higher conversion rates.",
      "Enhanced Brand Perception: The redesigned website strengthened the Netflorist brand and positioned it as a modern and reliable online florist."
    ]
  },
]

function App() {
  const [projectList, setProjectList] = useState(projects);
  return (
    <>
        <BrowserRouter> 
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects projects={projectList}/>} />
        <Route path="/projects/:id" element={<ProjectDetails projects={projectList} />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
