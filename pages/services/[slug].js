// pages/services/[slug].js
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const services = [
  {
    icon: "/images/service-icon1.svg",
    title: "Web Development",
    slug: "web-development",
    description: "We build fast, secure, and scalable websites tailored to your business needs.",
    details: "Our comprehensive web development services begin with custom website design that perfectly aligns with your brand identity and business objectives. We create responsive layouts that function seamlessly across all devices, from desktop computers to smartphones and tablets, ensuring your audience can access your content anywhere. Search engine optimization is built into every project from the ground up, implementing best practices that improve your visibility and rankings in search results.\n\nFor businesses looking to sell online, we develop robust e-commerce solutions featuring secure payment gateways and intuitive shopping experiences that convert visitors into customers. Content Management System integration allows you to easily update and maintain your website without technical expertise, while our performance optimization techniques ensure lightning-fast load times that keep users engaged.\n\nSecurity is paramount in our development process, with secure coding practices implemented to prevent vulnerabilities and protect your business and customers from potential threats. We seamlessly integrate third-party tools and APIs to extend your website's functionality and connect with your existing business systems. Our scalable architecture approach means your website can grow alongside your business, accommodating increased traffic and expanded functionality without requiring a complete rebuild.\n\nBeyond launch, we provide ongoing support and maintenance services to keep your website running smoothly, secure, and up-to-date with the latest technologies and security patches."
  },
  {
    icon: "/images/service-icon2.svg",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "We create mobile applications that are user-friendly and performance-driven.",
    details: "Our mobile app development expertise spans both native iOS and Android platforms, creating applications that take full advantage of each platform's unique capabilities and design guidelines. For businesses seeking broader market reach with efficient development timelines, we offer cross-platform solutions using cutting-edge frameworks like Flutter and React Native, allowing you to maintain a single codebase while delivering native-quality experiences across multiple platforms.\n\nUser experience is at the heart of our design philosophy, crafting intuitive interfaces and smooth user journeys that make complex functionality feel effortless and engaging. Backend system integration ensures your mobile app seamlessly connects with your existing business infrastructure, databases, and third-party services through robust API connections.\n\nPush notifications are strategically implemented to enhance user engagement and retention, delivering timely and relevant information that brings users back to your app. Security measures are woven throughout the development process, including secure user authentication systems and encrypted data storage that protects sensitive user information and maintains compliance with privacy regulations.\n\nPerformance monitoring and optimization tools are integrated to track app performance in real-time, identifying and resolving issues before they impact user experience. Offline functionality ensures users can continue using core app features even without an internet connection, improving usability and user satisfaction. We handle the entire app store deployment process, ensuring compliance with Apple App Store and Google Play Store guidelines and requirements.\n\nPost-launch support includes continuous updates, feature enhancements, and performance improvements based on user feedback and evolving business needs."
  },
  {
    icon: "/images/service-icon3.svg",
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description: "We offer secure and reliable cloud-based services.",
    details: "Our cloud solutions begin with comprehensive infrastructure setup and configuration, designing cloud architectures that perfectly match your business requirements and growth projections. Migration services help businesses transition smoothly from on-premises systems to cloud environments, minimizing downtime and ensuring data integrity throughout the process.\n\nCost optimization is a critical component of our cloud strategy, implementing intelligent resource allocation and usage monitoring to maximize efficiency while minimizing unnecessary expenses. Backup and disaster recovery planning ensures business continuity with automated backup systems and tested recovery procedures that protect against data loss and system failures.\n\nCloud-based security solutions provide multi-layered protection, including network security, identity management, and threat detection systems that safeguard your data and applications in the cloud environment. Scalability planning is built into every cloud deployment, allowing your infrastructure to automatically scale up or down based on demand, ensuring optimal performance during peak usage while controlling costs during quieter periods.\n\nIntegration with Software-as-a-Service applications streamlines your business operations by connecting cloud-based tools and services into a cohesive ecosystem. Real-time monitoring and alert systems provide constant visibility into your cloud infrastructure's performance and health, enabling proactive issue resolution before problems impact your business operations.\n\nCompliance with industry security standards ensures your cloud deployment meets regulatory requirements and industry best practices for data protection and privacy. Ongoing cloud support and management services include regular optimization, security updates, and strategic planning to ensure your cloud infrastructure continues to serve your evolving business needs effectively."
  },
  {
    icon: "/images/service-icon4.svg",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "Our designs combine beauty with functionality.",
    details: "Our UI/UX design process begins with comprehensive user research to deeply understand your target audiences, their behaviors, preferences, and pain points, ensuring every design decision is grounded in real user needs and expectations. Wireframing and prototyping form the foundation of our design approach, creating detailed blueprints that map out user journeys and interface layouts before moving to visual design, allowing for early feedback and iteration.\n\nHigh-fidelity visual design mockups bring concepts to life with careful attention to typography, color theory, imagery, and visual hierarchy, creating interfaces that are both aesthetically pleasing and highly functional. Usability testing is conducted throughout the design process, gathering feedback from real users to validate design decisions and identify areas for improvement before final implementation.\n\nAccessibility compliance ensures all users, including those with disabilities, can effectively use your digital products, following WCAG guidelines and implementing features like screen reader compatibility and keyboard navigation. Responsive design principles are applied to create interfaces that adapt seamlessly across multiple screen sizes and devices, from large desktop monitors to small smartphone screens.\n\nBranding and style guide creation establishes consistent visual language and design systems that maintain brand coherence across all touchpoints and future design iterations. Interactive animations and micro-interactions add polish and delight to user experiences, providing visual feedback and guiding users through complex processes in intuitive ways.\n\nOur iterative design process incorporates continuous feedback loops with stakeholders and users, refining and improving designs based on real-world testing and usage patterns. Integration support ensures smooth collaboration with development teams, providing detailed specifications, assets, and ongoing consultation during the implementation phase to maintain design integrity."
  },
  {
    icon: "/images/service-icon5.svg",
    title: "Database Design",
    slug: "database-design",
    description: "We design efficient and secure databases.",
    details: "Our database design expertise encompasses both logical and physical schema design, creating data structures that efficiently organize and relate information while supporting your application's specific requirements and growth projections. Normalization techniques are carefully applied to reduce data redundancy and improve data integrity, ensuring consistent and reliable information storage while optimizing storage space and reducing the risk of data anomalies.\n\nStrategic indexing approaches are implemented to dramatically improve query performance, analyzing access patterns and creating indexes that accelerate the most critical database operations while maintaining optimal storage efficiency. Comprehensive backup and recovery configurations protect against data loss with automated backup schedules, point-in-time recovery capabilities, and tested disaster recovery procedures that ensure business continuity.\n\nData migration planning and execution services help businesses transition from legacy systems or consolidate multiple data sources, maintaining data integrity and minimizing downtime during the migration process. Seamless integration with application backends ensures optimal performance and security through well-designed database APIs and connection strategies that support your application's functionality.\n\nRobust security protocols protect sensitive data through encryption, access controls, user authentication systems, and audit trails that maintain compliance with data protection regulations. Performance tuning for large datasets involves query optimization, index refinement, and database configuration adjustments that maintain fast response times even as data volume grows significantly.\n\nComprehensive documentation of database architecture, including entity relationship diagrams, data dictionaries, and operational procedures, ensures knowledge transfer and supports ongoing maintenance. Ongoing database monitoring and optimization services include performance analysis, capacity planning, and proactive maintenance that keeps your database systems running at peak efficiency while supporting your evolving business requirements."
  },
  {
    icon: "/images/service-icon6.svg",
    title: "Security & Testing",
    slug: "security-and-testing",
    description: "We provide thorough testing to ensure security.",
    details: "Our comprehensive security and testing services begin with penetration testing conducted by certified security professionals who systematically identify vulnerabilities in your systems, applications, and network infrastructure using the same techniques employed by malicious attackers. Both automated and manual quality assurance testing are employed to ensure comprehensive coverage, with automated tests providing consistent regression testing and manual testing uncovering usability issues and edge cases that automated tools might miss.\n\nThorough code review processes examine your application's source code line by line, identifying potential security flaws, performance bottlenecks, and maintainability issues before they reach production environments. Compliance checks verify that your systems meet relevant industry standards such as PCI-DSS, HIPAA, SOC 2, or GDPR, providing documentation and remediation guidance to maintain regulatory compliance.\n\nLoad and stress testing evaluate how your systems perform under various usage scenarios, identifying breaking points and ensuring your applications can handle expected traffic volumes and peak usage periods. User acceptance testing support helps validate that your systems meet business requirements and user expectations through structured testing scenarios and stakeholder feedback sessions.\n\nContinuous integration and testing pipeline implementation ensures that security and quality checks are automatically performed with every code change, catching issues early in the development process when they're less expensive to fix. Threat modeling and mitigation planning involves systematic analysis of potential attack vectors and implementation of appropriate countermeasures to protect against identified risks.\n\nData encryption and secure storage solutions protect sensitive information both in transit and at rest, implementing industry-standard encryption protocols and secure key management practices. Detailed reporting of all test results provides clear documentation of findings, risk assessments, remediation recommendations, and progress tracking, enabling informed decision-making about security investments and priorities."
  }
];

export default function ServiceDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const service = services.find((srv) => srv.slug === slug);

  if (!service) {
    return <p className="text-center py-20">Service not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <Link href="/services" className="flex items-center text-[#06686e] gap-2 mb-3">
        <Icon icon="mdi:arrow-left" width="20" height="20" />
        Go Back
      </Link>
      <div className="max-w-3xl mx-auto">
        <img src={service.icon} alt={service.title} className="w-20 h-20 mb-6" />
        <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{service.description}</p>
        <div className="text-base text-gray-800 leading-relaxed whitespace-pre-line">
          {service.details}
        </div>
      </div>
    </div>
  );
}