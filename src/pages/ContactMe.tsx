import React from 'react';

const Contact: React.FC = () => {
  return (
    <div
      className="w-auto h-auto min-h-screen flex flex-col items-center py-16 bg-gradient-to-b bg-white from-gray-200 to-white"
      id="contact"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold py-16">Contact Me</h2>
        <p className="mt-4 text-lg">
          Feel free to reach out to me. I'm available for collaboration and
          opportunities.
        </p>
        <div className="mt-8">
          <a
            href="mailto:leunglong2000.ca@gmail.com"
            className="text-blue-500 hover:underline"
          >
            Email: leunglong2000.ca@gmail.com
          </a>
          <p className="mt-2">
            Connect with me on{' '}
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
