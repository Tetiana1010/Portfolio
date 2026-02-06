import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';

const resumeData = [
  {
    category: 'Working Experience',
    icon: <BusinessCenterIcon />,
    items: [
      {
        title: 'Front-end Developer',
        startDate: 'Nov 2023',
        endDate: 'Present',
        institution: 'Publicis Groupe (KINDRED)',
        location: 'Prague, Czech Republic',
        description: `Developing and maintaining front-end solutions for Pfizer project. Collaborating closely with teams to implement user interface components, enhance user experience, and integrate new features.`
      },
      {
        title: 'Front-end game developer',
        startDate: 'Aug 2023',
        endDate: 'Nov 2023',
        institution: 'EveryMatrix',
        location: 'Lviv, Ukraine',
        description: `Worked as a front-end game developer specializing in Pixi.js, creating interactive and visually appealing games. Collaborated with a team to implement game mechanics, animations, and UI/UX features.`
      },
      {
        title: 'Front-end developer',
        startDate: 'Mar 2022',
        endDate: 'Aug 2023',
        institution: 'Logmanager a.s.',
        location: 'Prague, Czech Republic',
        description: `
          In charge of a complete design overhaul of the company's website (HTML5, CSS3, JS). <br />
          • In charge of coming up with a new UI for the company's main app (Figma) and implementing it in a legacy code base (CSS3, HTML5, PHP). <br />
          • Implemented UI components for sibling-company projects (VueJS, Vite, HTML5, CSS3). <br />
          • Created an updated version of an internal docs page for the company with a fresh design and new functionality (CSS3, Hugo Framework, Mermaid Diagrams).`
      }
    ]
  },
  {
    category: 'Internship',
    icon: <BusinessCenterIcon />,
    items: [
      {
        title: 'Full-stack intern developer',
        startDate: 'Dec 2021',
        endDate: 'Apr 2022',
        institution: 'SoftServe',
        location: 'Lviv, Ukraine',
        description: `Took part in a charity project developing a web app which assists users in locating the nearest available defibrillator unit, working on both the web-based front-end (React, Redux, HTML5, CSS3) and the back-end (Node, mongoDB, Typescript).`
      }
    ]
  },
  {
    category: 'Education',
    icon: <SchoolIcon />,
    items: [
      {
        title: 'Bachelor in History',
        startDate: 'Sep 2019',
        endDate: 'May 2023',
        institution: 'Lviv University',
        location: 'Lviv, Ukraine',
        description: `During this program, I have mastered my research skills and became adept at critical thinking skills that can be applied to many other environments and professions`
      }
    ]
  },
  {
    category: 'Courses',
    icon: <CastForEducationIcon />,
    items: [
      {
        title: 'WEB DESIGN',
        startDate: 'Jun 2020',
        endDate: 'Sep 2020',
        institution: 'SKVOT',
        location: 'Remote',
        description: `On this course, I have learned the basic principles of web development and design. I was introduced to how to create information architecture, build grids, and develop adaptives`
      },
      {
        title: 'JS Basics',
        startDate: 'Sep 2020',
        endDate: 'Oct 2020',
        institution: 'Mate Academy',
        location: 'Remote',
        description: `On this course, I have mastered the basic JavaScript language syntax and concepts: variables, loops, functions, classes, logical operators, and other basic JavaScript constructs.`
      },
      {
        title: 'FRONT END PRO',
        startDate: 'Oct 2020',
        endDate: 'Apr 2021',
        institution: 'HILLEL IT school',
        location: 'Remote',
        description: `On this course, I have learned how to interact with servers using JavaScript and Node.js, mastered the principles of OOP. And also, I was studying the features of the React library`
      }
    ]
  }
];

export default resumeData;