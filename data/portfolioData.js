const { default: Image } = require("next/image");

module.exports = [
  {
    id: 1,
    title: "Built Accounting",
    img: "/img/portfolio/builtapp.png",
    mainImage: "/img/portfolio/_builtapp.png",
    category: "Mobile App",
    cat: "mobile",
    images: ["/img/portfolio/_builtapp.png"],
    poster: "Emmanuel Yeboah",
    client: "Built Financial Technologies",
    date: "07 SEPTEMBER 2023",
    links: [
      {
        name: "Website",
        url: "https://built.africa/",
      },
      {
        name: "Android App",
        url: "https://play.google.com/store/apps/details?id=com.builtaccounting.app",
      },
      {
        name: "iOS App",
        url: "https://apps.apple.com/gh/app/built-accounting/id1547855525",
      },
    ],
    descriptions: (
      <div className="descriptions">
        <p className="bigger">
          Taking over the mobile app project at Built, a visionary financial
          technology company focused on empowering small businesses in Africa,
          was an exciting challenge. With a clear vision of democratizing
          prosperity, Built deployed web and mobile technologies to assist small
          businesses in starting, running, and growing their ventures. Their
          flagship product, a financial record-keeping application, was designed
          to simplify the management of financial data for small business
          owners, facilitating quick, data-driven decision-making. Additionally,
          the app provided access to a curated selection of financial services
          tailored to the specific needs and size of each business.
        </p>

        <p>
          Working in collaboration with the Built Financial Technologies team,
          we embarked on a journey to rebuild the mobile app from scratch. The
          goal was not just to improve the existing app, but to completely
          revamp it, enhancing its functionality, user experience, and overall
          appeal. Through meticulous planning and execution, we transformed the
          app into a powerful tool for small businesses, offering intuitive
          features and seamless navigation. This rebuild was not just about
          improving the app's performance; it was about reimagining its purpose
          and ensuring it met the evolving needs of its users.
        </p>

        <p>
          The results of our efforts were nothing short of remarkable. By
          implementing a comprehensive marketing strategy and leveraging user
          feedback to fine-tune the app, we were able to increase installs from
          a mere 700 to an impressive 50,000. This exponential growth was a
          testament to the app's newfound appeal and usability, as well as its
          ability to truly deliver on Built's vision of democratizing prosperity
          for small businesses across Africa.
        </p>
      </div>
    ),
  },
];
