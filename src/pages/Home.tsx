import React from 'react';
import Card from '../components/Card';
import GithubIcon from '../Icon/GithubIcon';
import LinkedInIcon from '../Icon/LinkedInIcon';

const Home: React.FC = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <h1 className="md:text-4xl font-bold text-center text-3xl">
        Hello, I'm Bryan Leung.
      </h1>
      <p className="text-sm mt-4 text-center max-w-sm md:w-xl md:text-base">
        Computer Science graduate with a strong focus on software and web
        development. I bring a combination of passion, dedication, and a quick
        learning curve to new programming languages and technologies.
      </p>
      <div className="flex flex-row space-x-6 items-center justify-center w-full max-w-sm">
        <LinkedInIcon className="w-12 h-12 mt-4 text-text-primary"></LinkedInIcon>
        <GithubIcon className="w-12 h-12 mt-4 text-text-primary"></GithubIcon>
      </div>
    </div>
  );
};

export default Home;
