// Home.tsx
import React from 'react';
import Card from '../components/Card';

const Skills: React.FC = () => {
  const data = [
    {
      name: 'AWS',
      a: 'https://aws.amazon.com',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    },
    {
      name: 'Bash',
      a: 'https://www.gnu.org/software/bash/',
      img: 'https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg',
    },
    {
      name: 'Bootstrap',
      a: 'https://getbootstrap.com',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',
    },
    {
      name: 'Docker',
      a: 'https://www.docker.com/',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg',
    },
    {
      name: 'Kubernetes',
      a: 'https://kubernetes.io',
      img: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg',
    },
    {
      name: 'Figma',
      a: 'https://www.figma.com/',
      img: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
    },
    {
      name: 'Firebase',
      a: 'https://firebase.google.com/',
      img: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
    },
    {
      name: 'Flask',
      a: 'https://flask.palletsprojects.com/',
      img: 'https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg',
    },
    {
      name: 'React',
      a: 'https://reactjs.org/',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    },
    {
      name: 'Next.js',
      a: 'https://nextjs.org/',
      img: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
    },
    {
      name: 'Gatsby',
      a: 'https://www.gatsbyjs.com/',
      img: 'https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg',
    },
    {
      name: 'Python',
      a: 'https://www.python.org',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    },
    {
      name: 'Google Cloud',
      a: 'https://cloud.google.com',
      img: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
    },
    {
      name: 'Git',
      a: 'https://git-scm.com/',
      img: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    },
    {
      name: 'HTML5',
      a: 'https://www.w3.org/html/',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
    },
    {
      name: 'CSS3',
      a: 'https://www.w3schools.com/css/',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
    },
    {
      name: 'Tailwind CSS',
      a: 'https://tailwindcss.com/',
      img: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    },
    {
      name: 'JavaScript',
      a: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    },
    {
      name: 'TypeScript',
      a: 'https://www.typescriptlang.org/',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    },
    {
      name: 'Linux',
      a: 'https://www.linux.org/',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
    },
    {
      name: 'MySQL',
      a: 'https://www.mysql.com/',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
    },

    {
      name: 'OpenCV',
      a: 'https://opencv.org/',
      img: 'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg',
    },
    {
      name: 'Pandas',
      a: 'https://pandas.pydata.org/',
      img: 'https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg',
    },
    {
      name: 'PostgreSQL',
      a: 'https://www.postgresql.org',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg',
    },
    {
      name: 'Postman',
      a: 'https://postman.com',
      img: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
    },
    {
      name: 'Puppeteer',
      a: 'https://github.com/puppeteer/puppeteer',
      img: 'https://www.vectorlogo.zone/logos/pptrdev/pptrdev-official.svg',
    },
    {
      name: 'PyTorch',
      a: 'https://pytorch.org/',
      img: 'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg',
    },

    {
      name: 'scikit-learn',
      a: 'https://scikit-learn.org/',
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
    },
    {
      name: 'Seaborn',
      a: 'https://seaborn.pydata.org/',
      img: 'https://seaborn.pydata.org/_images/logo-mark-lightbg.svg',
    },
    {
      name: 'Selenium',
      a: 'https://www.selenium.dev',
      img: 'https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg',
    },
    {
      name: 'TensorFlow',
      a: 'https://www.tensorflow.org',
      img: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg',
    },
  ];

  return (
    <div
      className="w-auto h-auto min-h-screen flex flex-col items-center py-16 bg-gradient-to-t bg-white from-gray-200 to-white"
      id="skills"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold py-16">Skills</h2>
      </div>
      <div className="md:mx-auto block w-80 md:w-2/3">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-1">
          {data.map((e: any, index) => (
            <div className="text-center md:p-4" key={e.name + index}>
              <a href={e.a} className="h-auto w-10 md:w-14 inline-block">
                <img src={e.img} alt={e.name} className="mx-auto" />
              </a>
              <div className="text-xs whitespace-nowrap">{e.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
