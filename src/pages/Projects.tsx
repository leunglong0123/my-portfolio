// Home.tsx
import React from 'react';
import Card from '../components/Card';

const Projects: React.FC = () => {
  return (
    <div className="w-screen h-auto flex flex-col items-center" id="project">
      <div className="my-4">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p className="text-lg m-4">
          Some startups and companies that i helped to create their tech
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly gap-4 md:flex-col md:items-center">
        <Card
          title="Creato Lens"
          coverImage="/creatogether.png"
          description="Creato Lens provides AI-driven insights for creatives to make informed decisions in creating content."
        >
          <a
            href="https://ai.creatogether.app"
            className="text-blue-400"
            target="_blank"
          >
            <div className="m-4 text-xl">
              <p className="w-auto md:text-sm">Click to view</p>
            </div>
          </a>
        </Card>
        <Card
          title="Creato Lens"
          coverImage="/creatogether.png"
          description="Creato Lens provides AI-driven insights for creatives to make informed decisions in creating content."
        >
          <a
            href="https://ai.creatogether.app"
            className="text-blue-400"
            target="_blank"
          >
            <div className="m-4 text-xl">
              <p className="w-auto md:text-sm">Click to view</p>
            </div>
          </a>
        </Card>
        <Card
          title="Creato Lens"
          coverImage="/creatogether.png"
          description="Creato Lens provides AI-driven insights for creatives to make informed decisions in creating content."
        >
          <a
            href="https://ai.creatogether.app"
            className="text-blue-400"
            target="_blank"
          >
            <div className="m-4 text-xl">
              <p className="w-auto md:text-sm">Click to view</p>
            </div>
          </a>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
