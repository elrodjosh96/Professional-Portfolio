//add project on top for latest
import resume from '../images/projectsicon/canvaresume.png';
import barkr from '../images/projectsicon/barkr.png';
import flasher from '../images/projectsicon/actualflasherimg.png';
import techblog from '../images/projectsicon/actualtechblogimg.png';
import passwordgen from '../images/projectsicon/actualpasswordimg.png';
import notetaker from '../images/projectsicon/actualnotetakerimg.png'

//add project on top for latest

const portfolioData = [
  {
    image:  resume,
    link: 'https://drive.google.com/file/d/10mOw6YA8mQZMo7dv7rbuvdCDsVF8Z-4N/view?usp=sharing',
    desc: 'My Resume',
    summary: 'Download a copy of my Resume here.',
  },
  {
    image:  barkr,
    link: 'https://spobarkertest.herokuapp.com/welcome',
    desc: 'BARKr',
    summary: 'BARKr is a unique app we created for the purpose of assisting dog owners in connecting with other dog owners!',
    tech: 'React'
  },
  {
    image:  flasher,
    link: 'https://flasherquiz.herokuapp.com/',
    desc: 'Flasher',
    summary: 'Flasher is a full-stack web application that serves as a flashcard study companion for Bootcamp students.',
    tech: 'Node.js | Express.js | MySQL | Sequelize | Tailwind CSS | Anime.js'
  },
  {
    image:  techblog,
    link: 'https://tech-blog-je.herokuapp.com/',
    desc: 'Tech Blog',
    summary: 'This is a forum type app where users can sign-up and create posts about anything tech related and comment on other posts as well!',
    tech: 'JavaScript | Handlebars | MySQL | Node.js'
  },
  {
    image:  passwordgen,
    link: 'https://elrodjosh96.github.io/Password-Generator/',
    desc: 'Password Generator',
    summary: 'This is a unique app designed to give users a safe and secure randomized password.',
    tech: 'HTML | CSS | JaveScript'
  },
  {
    image:  notetaker,
    link: 'https://homeworknotetaker.herokuapp.com/',
    desc: 'Note Taker',
    summary: 'This is a unique app designed to allow users to keep important notes with easy access.',
    tech: 'HTML | CSS | JaveScript | Node.js | Express.js'
  },
  
]
  
export default portfolioData;