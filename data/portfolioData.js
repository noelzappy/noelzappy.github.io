const { default: Image } = require("next/image");

module.exports = [
  {
    id: 1,
    title: "Built Accounting",
    img: "/img/portfolio/_builtapp.png",
    mainImage: "/img/portfolio/_builtapp.png",
    category: "Mobile App",
    cat: ["mobile"],
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
    stack: ["React Native", "Firebase", "Redux"],
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

  {
    id: 2,
    title: "GetAll Handyman",
    img: "/img/portfolio/getall.png",
    mainImage: "/img/portfolio/getall.png",
    category: "Mobile App, Web App",
    cat: ["mobile", "web"],
    images: ["/img/portfolio/getall.png"],
    poster: "Emmanuel Yeboah",
    client: "GetAll Ghana LTD",
    date: "27 OCTOBER 2022",
    links: [
      {
        name: "Website(Offline)",
        url: "#",
      },
    ],
    stack: ["Flutter/Dart", "Firebase", "Firebase Cloud Functions"],
    descriptions: (
      <div className="descriptions">
        <p className="bigger">
          Taking charge of this innovative on-demand service platform, I
          embarked on a mission to elevate its mobile app, web app, and Firebase
          cloud functions. Despite the project not going live due to business
          constraints, my focus was on enhancing app performance, user
          experience, and introducing new features to enrich the platform's
          functionality.
        </p>

        <p>
          The existing mobile applications, tailored for iOS and Android, were
          revamped to offer a seamless user experience. I implemented
          optimizations to improve performance and responsiveness, ensuring
          users could easily browse services, view provider profiles and
          ratings, and book appointments effortlessly. Additionally, I
          integrated new features to enhance the overall user journey, making it
          more intuitive and engaging.
        </p>

        <p>
          On the web dashboard for service providers, I implemented enhancements
          to streamline booking management, appointment scheduling, and
          communication with users. The goal was to provide a user-friendly
          interface that empowered service providers to efficiently manage their
          operations and interactions with customers.
        </p>
        <p>
          Furthermore, I worked on Firebase cloud functions and Firebase to
          optimize backend processes and improve data management. This included
          implementing new functionalities to enhance system efficiency and
          reliability.
        </p>

        <p>
          While the project faced challenges that prevented it from going live,
          the improvements made during my tenure laid a solid foundation for
          future development. The application was poised to revolutionize the
          service industry in Ghana, offering immense value to both users and
          service providers.
        </p>
      </div>
    ),
  },

  {
    id: 3,
    title: "Cocaptain",
    img: "/img/portfolio/cocaptain.webp",
    mainImage: "/img/portfolio/cocaptain.webp",
    category: "Mobile App,",
    cat: ["mobile"],
    images: [
      "/img/portfolio/cocaptain_1.webp",
      "/img/portfolio/cocaptain_2.webp",
      "/img/portfolio/cocaptain_3.webp",
    ],
    poster: "Emmanuel Yeboah",
    client: "Cocaptain Software PLC",
    date: "27 OCTOBER 2022",
    links: [
      {
        name: "Website",
        url: "https://www.cocaptain.io/",
      },
    ],
    stack: ["React Native", "GrapQL", "Redux"],
    descriptions: (
      <div className="descriptions">
        <p className="bigger">
          As the lead developer for Cocaptain's mobile app project, I built the
          application from scratch using React Native and GraphQL. This
          innovative app serves as a robust intermediary between users and
          service providers, streamlining the process of launching new sports
          programs for clubs. The app's features range from powerful athlete
          registration to advanced club management, providing a comprehensive
          solution to end the administrative nightmare often associated with
          organizing sports events.
        </p>

        <p>
          Through meticulous development and implementation of new features,
          such as self-organized team registration and automated payment and
          refund processes, the app provides a seamless user experience. By
          focusing on simplifying the signup process and addressing
          administrative bottlenecks, the app is poised to revolutionize the way
          clubs launch sports programs and manage their operations.
        </p>
      </div>
    ),
  },

  {
    id: 4,
    title: "Inspect.MapThis.Site",
    img: "/img/portfolio/mapthis.png",
    mainImage: "/img/portfolio/mapthis.png",
    category: "Web App",
    cat: ["web", "fullstack"],
    images: ["/img/portfolio/mapthis.png"],
    poster: "Emmanuel Yeboah",
    client: "Usnatek- Mapthis.site",
    date: "27 JANUARY 2023",
    links: [
      {
        name: "Company Website",
        url: "https://mapthis.site/inspection-reports-for-drone-inspections/",
      },
      {
        name: "App Website",
        url: "https://inspect.mapthis.site/",
      },
    ],
    stack: ["React", "Node.js", "MongoDB", "ExpressJs", "OpenMaps API"],
    descriptions: (
      <div className="descriptions">
        <p className="bigger">
          Contracted as the sole developer for this innovative cloud-based
          software, I took on the challenge of developing both the frontend and
          backend of the application. With a focus on detailed inspections of
          transmission towers, wind turbines, and solar panels using drones, the
          software required a robust and user-friendly interface.
        </p>

        <p>
          Utilizing React for the frontend and NodeJS for the backend, I ensured
          the application was not only responsive and intuitive but also
          scalable and efficient. The platform's standout feature was its
          ability to annotate images captured by drones during inspections,
          enhancing users' ability to analyze and comprehend gathered data.
        </p>
        <p>
          Working tirelessly to bring this idea to life, I implemented an
          advanced reporting mechanism that generated detailed reports based on
          inspection data. These reports provided users with a comprehensive
          overview of structural features and any anomalies, facilitating better
          decision-making and resource allocation. The use of cutting-edge
          technologies ensured the application was robust, reliable, and offered
          an optimal user experience, despite being developed by a solo
          developer working around the clock.
        </p>
      </div>
    ),
  },

  {
    id: 5,
    title: "Tipme App",
    img: "/img/portfolio/tipme.png",
    mainImage: "/img/portfolio/tipme.png",
    category: "Mobile App, Web App",
    cat: ["mobile", "web", "fullstack"],
    images: [
      "/img/portfolio/tipme.png",
      "/img/portfolio/tipme_1.png",
      "/img/portfolio/tipme_2.png",
    ],
    poster: "Emmanuel Yeboah",
    client: "Leonardo Inventions",
    date: "27 JANUARY 2023",
    links: [
      {
        name: "Website App",
        url: "https://tipme-app.com",
      },
      {
        name: "Android App",
        url: "https://play.google.com/store/apps/details?id=com.tipmeapp.tipme",
      },
    ],
    videos: ["https://youtu.be/LMer_U6UtDs"],
    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "ExpressJs",
      "iBeacon",
      "React Native",
      "Firebase",
      "Bluetooth (BLE)",
    ],

    descriptions: (
      <div className="descriptions">
        <p className="bigger">
          I led the development of a revolutionary app aimed at creating a
          win-win situation for both street performers and donors. The app,
          developed using NodeJs and MongoDB for the backend, ReactJs for the
          web app, and React Native for the mobile app, addresses the common
          issue of not having small change to give to performers, while also
          providing performers with a more effective way to collect
          tips/donations.
        </p>

        <p>
          The app works by allowing users to register as either "performers" or
          "givers". When a performer starts a show, nearby givers receive push
          notifications with basic information about the performer and the show.
          Givers can then decide whether to tip the performer, with predefined
          tipping amounts available for quick tipping. Performers can also
          generate a unique QR code, which givers can scan to tip them without
          installing the app.
        </p>
        <p>
          Key features of the app include quick registration with Google and
          Facebook accounts, the ability for performers to add their story and
          name their performances, and the option for givers to specify default
          donation amounts. The app also utilizes iBeacon BLE technology for
          proximity detection, ensuring that givers receive notifications when
          they are near a performer. Additionally, Onesignal push notifications
          are used to notify performers of each donation, and givers can view
          all their donations in the app.
        </p>
        <p>
          Overall, the app provides a seamless and efficient way for street
          performers to collect tips and donations, while also ensuring that
          donors always have a way to give, even if they don't have cash on
          hand. The use of cutting-edge technologies and a user-friendly
          interface makes this app a game-changer for street performers and
          donors alike.
        </p>
      </div>
    ),
  },

  {
    id: 6,
    title: "Alvi Beauty",
    img: "/img/portfolio/alvibeauty_user.png",
    mainImage: "/img/portfolio/alvibeauty_user.png",
    category: "Mobile App",
    cat: ["mobile", "fullstack"],
    images: [
      "/img/portfolio/alvibeauty_user.png",
      "/img/portfolio/alvibeauty_salon.png",
    ],
    poster: "Emmanuel Yeboah",
    client: "Romarianec Tech. - Ukraine",
    links: [
      {
        name: "Website",
        url: "https://alvibeauty.com/en",
      },
      {
        name: "User iOS App",
        url: "https://apps.apple.com/us/app/alvi-beauty/id1640579339",
      },
      {
        name: "User Android App",
        url: "https://play.google.com/store/apps/details?id=com.beautypoisk.user",
      },
      {
        name: "Salon iOS App",
        url: "https://apps.apple.com/us/app/alvi-salon/id1639258212",
      },
      {
        name: "Salon Android App",
        url: "https://play.google.com/store/apps/details?id=com.beautypoisk.salon",
      },
    ],
    videos: [],
    stack: ["React", "Node.js", "MongoDB", "ExpressJs", "React Native"],

    descriptions: (
      <div className="descriptions">
        <p className="bigger">
          I undertook the development of this comprehensive beauty service
          booking platform that revolutionizes the way users book beauty
          services from the comfort of their homes. The system includes four
          mobile apps (two for iOS and two for Android) tailored for users and
          service providers, a web dashboard for service providers, and a super
          admin dashboard for the company. Additionally, there is a web version
          available for users to book services directly.
        </p>

        <p>
          For the backend development, I utilized NodeJs and MongoDB, ensuring a
          robust and scalable infrastructure to support the platform's
          functionality. This allowed for efficient management of user data,
          bookings, and service provider information, ensuring a seamless user
          experience across all platforms.
        </p>
        <p>
          The mobile app, developed using React Native, offers users an
          intuitive interface to browse services, book appointments, and manage
          their bookings. Service providers can use the web dashboard to manage
          their schedules, accept bookings, and communicate with clients, while
          the super admin dashboard provides comprehensive oversight of the
          entire platform, enabling efficient management of users, service
          providers, and bookings.
        </p>
        <p>
          Overall, this beauty service booking platform provides a convenient
          and efficient way for users to access beauty services and for service
          providers to manage their bookings, all through a user-friendly and
          intuitive interface developed with cutting-edge technologies.
        </p>
      </div>
    ),
  },

  {
    id: 7,
    title: "Alvi Beauty Salon",
    img: "/img/portfolio/alvibeauty_salon.png",
    mainImage: "/img/portfolio/alvibeauty_salon.png",
    category: "Mobile App",
    cat: ["mobile", "fullstack"],
    images: ["/img/portfolio/alvibeauty_salon.png"],
    poster: "Emmanuel Yeboah",
    client: "Romarianec Tech. - Ukraine",
    links: [
      {
        name: "Website",
        url: "https://alvibeauty.com/en",
      },
      {
        name: "iOS App",
        url: "https://apps.apple.com/us/app/alvi-salon/id1639258212",
      },
      {
        name: "Android App",
        url: "https://play.google.com/store/apps/details?id=com.beautypoisk.salon",
      },
    ],
    videos: [],
    stack: ["React", "Node.js", "MongoDB", "ExpressJs", "React Native"],

    descriptions: (
      <div className="descriptions">
        <p className="bigger">
          I undertook the development of this comprehensive beauty service
          booking platform that revolutionizes the way users book beauty
          services from the comfort of their homes. The system includes four
          mobile apps (two for iOS and two for Android) tailored for users and
          service providers, a web dashboard for service providers, and a super
          admin dashboard for the company. Additionally, there is a web version
          available for users to book services directly.
        </p>

        <p>
          For the backend development, I utilized NodeJs and MongoDB, ensuring a
          robust and scalable infrastructure to support the platform's
          functionality. This allowed for efficient management of user data,
          bookings, and service provider information, ensuring a seamless user
          experience across all platforms.
        </p>
        <p>
          The mobile app, developed using React Native, offers users an
          intuitive interface to browse services, book appointments, and manage
          their bookings. Service providers can use the web dashboard to manage
          their schedules, accept bookings, and communicate with clients, while
          the super admin dashboard provides comprehensive oversight of the
          entire platform, enabling efficient management of users, service
          providers, and bookings.
        </p>
        <p>
          Overall, this beauty service booking platform provides a convenient
          and efficient way for users to access beauty services and for service
          providers to manage their bookings, all through a user-friendly and
          intuitive interface developed with cutting-edge technologies.
        </p>
      </div>
    ),
  },

  {
    id: 8,
    title: "Ejuma App",
    img: "/img/portfolio/ejuma.png",
    mainImage: "/img/portfolio/ejuma.png",
    category: "Mobile App",
    cat: ["mobile", "fullstack"],
    images: ["/img/portfolio/ejuma.png"],
    poster: "Emmanuel Yeboah",
    client: "Built Financial Technologies",
    links: [
      {
        name: "iOS App",
        url: "https://apps.apple.com/bw/app/ejuma-business-app/id1590122096",
      },
    ],
    videos: [],
    stack: ["Flutter/Dart", "Firebase", "Firebase Cloud Functions"],

    descriptions: (
      <div className="descriptions">
        <p className="bigger">
          As the developer tasked with enhancing the Ejuma App, I leveraged
          Flutter and Dart to rebuild the mobile and web applications, providing
          small and medium-sized enterprises (SMEs) with an improved suite of
          tools for managing debtors, staff, and financing needs. Utilizing
          Firebase for data storage.
        </p>

        <p>
          One of the key enhancements I introduced was optimizing the app's debt
          collection process. By refining features such as tracking payments,
          generating invoices, and generating detailed reports on outstanding
          debts, I enabled SMEs to better manage their cash flow and maintain
          stronger financial positions.
        </p>
        <p>
          Additionally, I revamped the HR management capabilities of the Ejuma
          App, enhancing features for recording staff attendance, streamlining
          recruitment processes, and automating payroll calculations. These
          improvements empowered businesses to efficiently manage their staffing
          needs and improve overall operational efficiency.
        </p>
        <p>
          Overall, my enhancements to the Ejuma App transformed it into a
          powerful and versatile tool for SMEs, offering a holistic solution for
          managing finances, staffing requirements, and financing needs. By
          leveraging this innovative application, SMEs can optimize their
          operations, reduce administrative burdens, and focus on growth and
          development.
        </p>
      </div>
    ),
  },

  {
    id: 9,
    title: "Built Lite",
    img: "/img/portfolio/builtlite.png",
    mainImage: "/img/portfolio/builtlite.png",
    category: "Mobile App",
    cat: ["mobile"],
    images: [
      "/img/portfolio/builtlite.png",
      "/img/portfolio/builtlite_1.png",
      "/img/portfolio/builtlite_2.png",
      "/img/portfolio/builtlite_3.png",
    ],
    poster: "Emmanuel Yeboah",
    client: "Built Financial Tech.",
    links: [
      {
        name: "Website",
        url: "https://built.africa/",
      },
      {
        name: "Android App",
        url: "https://play.google.com/store/apps/details?id=com.builtaccounting.lite",
      },
    ],
    videos: [],
    stack: ["React Native", "MongoDB"],

    descriptions: (
      <div className="descriptions">
        <p className="bigger">
          I developed Built Lite, a simplified yet powerful tool for tracking
          income and expenses, using React Native for the mobile app. Built Lite
          offers users the ability to track sales and expenses even without an
          internet connection, ensuring that business management remains
          seamless and uninterrupted. The app is designed to be 100% secure,
          providing peace of mind for all types of small businesses.
        </p>

        <p>
          Key features of Built Lite include its ease of use, allowing users to
          manage their business and time more efficiently from anywhere,
          anytime. Users can effortlessly record both cash and credit sales, add
          customers and suppliers directly from their phone's contact book, and
          view reports on sales, expenses, and profit. The app also enables
          users to track collections and payments with reports on debtors and
          creditors.
        </p>
        <p>
          Built Lite offers a convenient and flexible solution for business
          management on the go. Users can easily upgrade to the original Built
          App to experience the full accounting app on both desktop and phone.
          With Built Lite, users can take control of their business on the fly,
          making it the go-to solution for secure and efficient business
          management.
        </p>
      </div>
    ),
  },

  {
    id: 9,
    title: "Built.Africa",
    img: "/img/portfolio/built-1.png",
    mainImage: "/img/portfolio/built-1.png",
    category: "Web App",
    cat: ["web"],
    images: [
      "/img/portfolio/built-1.png",
      "/img/portfolio/built-2.png",
      "/img/portfolio/built-3.png",
    ],
    poster: "Emmanuel Yeboah",
    client: "Built Financial Tech.",
    links: [
      {
        name: "Website",
        url: "https://built.africa/",
      },
    ],
    videos: [],
    stack: ["React", "NextJs"],

    descriptions: (
      <div className="descriptions">
        <p className="bigger">
          I contributed to the development Built Financial Technologies'
          website, a company of chartered accountants, finance analysts,
          developers, and marketers dedicated to fostering prosperity among SMEs
          in Africa. This landing page serves as the digital face of the
          company, providing essential information about Built Financial
          Technologies' services, team, and mission.
        </p>
        <p>
          Key features of the website include a clean, professional design that
          reflects the company's expertise and commitment to SME growth. The
          site offers detailed information about Built Financial Technologies'
          range of services, showcasing how they support businesses through
          accounting, financial analysis, and technological solutions. Visitors
          can easily navigate through sections detailing the company's
          background, team profiles, and contact information.
        </p>
        <p>
          The website is designed to be user-friendly and informative, allowing
          potential clients to quickly understand the value Built Financial
          Technologies brings to SMEs in Africa. It highlights the company's
          unique blend of financial expertise and technological innovation,
          emphasizing their passion for driving economic growth through
          empowering small and medium enterprises. The site also serves as a
          platform for SMEs to connect with Built Financial Technologies,
          featuring clear calls-to-action and contact forms to facilitate
          engagement.
        </p>
      </div>
    ),
  },
];
