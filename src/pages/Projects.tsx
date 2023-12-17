// Home.tsx
import React from 'react';
import Card from '../components/Card';

const Projects: React.FC = () => {
  return (
    <div
      className="w-auto h-auto min-h-screen flex flex-col items-center py-16 bg-gradient-to-b bg-white from-gray-200 to-white"
      id="projects"
    >
      <div className="flex flex-col py-16">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <p className="text-lg m-4">
          Some startups and companies that I helped to create their tech
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly gap-4 md:flex-col md:items-center">
        <Card
          className="bg-white"
          title="Creato Lens"
          coverImage="/creatogether.png"
          description="Creato Lens provides AI-driven insights for creatives to make informed decisions in creating content. It is a state of the art AI tool that helps you to generate hashtags that is more engaging and relevant to your audience. It will help content creators to gain more exposures and reach more audience."
        >
          <a
            href="https://ai.creatogether.app"
            className="text-blue-400"
            target="_blank"
            rel="noreferrer"
          >
            <div className="m-4 text-xl">
              <p className="w-auto md:text-sm">Click to view</p>
            </div>
          </a>
        </Card>
        <Card
          className="bg-white"
          title="Facebook Clone"
          coverImage="/facebook-clone.png"
          description="Facebook clone with core features of the platform, users, profiles, friending, posts, comments, news feed, and liking. Sign-in function using Firebase."
        >
          <a
            href="https://ai.creatogether.app"
            className="text-blue-400"
            target="_blank"
            rel="noreferrer"
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
