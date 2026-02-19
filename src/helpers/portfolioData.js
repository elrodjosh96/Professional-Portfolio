//add project on top for latest
import resume from '../images/projectsicon/Resume.png';
import dailybread from '../images/projectsicon/Daily-Bread.jpeg';
import footballquiz from '../images/projectsicon/football-quiz.png.jpeg';
import passwordgen from '../images/projectsicon/actualpasswordimg.png';

//add project on top for latest

const portfolioData = [
  {
    image:  resume,
    link: 'https://drive.google.com/file/d/1cuT6BPTYlhet9LVigDfI6LMcx8QwZTSZ/view?usp=sharing',
    desc: 'My Resume',
    summary: 'Download a copy of my Resume here.',
  },
  {
    image:  dailybread,
    link: 'https://elrodjosh96.github.io/Daily-Bread/',
    github: 'https://github.com/elrodjosh96/Daily-Bread',
    desc: 'Daily Bread',
    summary: 'This is a unique app designed to give users a 30-day, 90-day plan for reading the Old Testament and New Testament along with a full year plan for reading the Bible in its entirety.',
    tech: 'React | JavaScript | HTML | CSS | Vite'
  },
  {
    image:  footballquiz,
    link: 'https://elrodjosh96.github.io/Football-Quiz/',
    github: 'https://github.com/elrodjosh96/Football-Quiz',
    desc: 'Football Quiz',
    summary: 'Test your knowledge of football with multiple-choice questions and see how many you can get right!',
    tech: 'React | JavaScript | HTML | CSS | Vite'
  },
  {
    image:  passwordgen,
    link: 'https://elrodjosh96.github.io/Password-Generator/',
    github: 'https://github.com/elrodjosh96/Password-Generator',
    desc: 'Password Generator',
    summary: 'This is a unique app designed to give users a safe and secure randomized password.',
    tech: 'HTML | CSS | JaveScript'
  },
]
  
export default portfolioData;