import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="mt-4 text-lg">
          Feel free to reach out to me. I'm available for collaboration and
          opportunities.
        </p>
        <div className="mt-8">
          <a
            href="mailto:your-email@example.com"
            className="text-blue-500 hover:underline"
          >
            Email: your-email@example.com
          </a>
          <p className="mt-2">
            Connect with me on{' '}
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
