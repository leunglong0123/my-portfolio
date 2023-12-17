import React from 'react';
import TextSegmentDescription from '../components/TextSegments';

interface JobPosition {
  title: string;
  company: string;
  period: string;
  responsibilities: React.ReactNode;
  technologies: string[];
}

type TextSegment = {
  text: string;
  isStrong?: boolean;
  isListItem?: boolean;
};

type TextSegments = {
  segments: TextSegment[];
};

const Experience: React.FC = () => {
  const essaaDescriptions: TextSegments[] = [
    {
      segments: [
        {
          text: `Designed and maintained scalable pipelines in `,
        },
        { text: 'microservice architecture', isStrong: true },
        {
          text: ' for social media platform ',
        },
        { text: 'data scraping', isStrong: true },
        {
          text: ' in startup, ensuring efficient and reliable data extraction.',
        },
      ],
    },
    {
      segments: [
        {
          text: 'Performed ',
        },
        { text: 'ETL operations', isStrong: true },
        {
          text: ' using ',
        },
        { text: 'Jupyter Notebook', isStrong: true },
        {
          text: ' and integrated ',
        },
        { text: 'deep learning models', isStrong: true },
        {
          text: ' to predict trends based on social media data extracted from the pipeline.',
        },
      ],
    },
    {
      segments: [
        {
          text: 'Developed ',
        },
        { text: 'user-friendly CMS', isStrong: true },
        {
          text: ' to monitor and control the data scraping process, enhancing visibility and management.',
        },
      ],
    },
    {
      segments: [
        {
          text: 'Built multiple cloud services in ',
        },
        { text: 'GCP', isStrong: true },
        {
          text: ', leveraging technologies such as ',
        },
        { text: 'Cloud Functions', isStrong: true },
        { text: ', ', isStrong: false },
        { text: 'Cloud Run', isStrong: true },
        { text: ', ', isStrong: false },
        { text: 'Kubernetes', isStrong: true },
        { text: ', ', isStrong: false },
        { text: 'Pub/Sub', isStrong: true },
        { text: ', ', isStrong: false },
        { text: 'Cloud Storage', isStrong: true },
        { text: ', ', isStrong: false },
        { text: 'BigQuery', isStrong: true },
        { text: ', ', isStrong: false },
        { text: 'Vision API', isStrong: true },
        { text: ', and ', isStrong: false },
        { text: 'Vertex AI', isStrong: true },
        { text: '.' },
      ],
    },
    {
      segments: [
        { text: 'Created ' },
        { text: 'RESTful APIs', isStrong: true },
        { text: ' using ' },
        { text: 'Python Flask', isStrong: true },
        {
          text: ', integrating multiple cloud services and implementing a notification system to provide service status updates, following the repository pattern.',
        },
      ],
    },
  ];

  const mouxideaDscriptions: TextSegments[] = [
    {
      segments: [
        {
          text: 'Developed web-based ',
        },
        { text: 'CMS applications', isStrong: true },
        {
          text: ' for an NGO service unit with 1000+ users, using ',
        },
        { text: 'ReactJS', isStrong: true },
        { text: ' and ', isStrong: false },
        { text: 'Ant Design', isStrong: true },
        {
          text: ' to deliver visually appealing data presentations and seamless user experiences.',
        },
      ],
    },
    {
      segments: [
        {
          text: 'Gathered data from various back-end services, collaborating with backend developers to ensure effective ',
        },
        { text: 'API design', isStrong: true },
        {
          text: '.',
        },
      ],
    },
    {
      segments: [
        {
          text: 'Integrated third-party tools into the application to enable functionalities such as ',
        },
        { text: 'surveys drafting', isStrong: true },
        { text: ', ', isStrong: false },
        { text: 'session reservations', isStrong: true },
        { text: ', and ', isStrong: false },
        { text: 'barcode scanning', isStrong: true },
        {
          text: '.',
        },
      ],
    },
    {
      segments: [
        {
          text: 'Employed ',
        },
        { text: 'agile methodologies', isStrong: true },
        {
          text: ' and participated in cross-functional teams to deliver high-quality software solutions within strict timelines.',
        },
      ],
    },
  ];

  const positions: JobPosition[] = [
    {
      title: 'Software Engineer II',
      company: 'ESSAA Ltd.',
      period: '05/2022 - 10/2023',
      responsibilities: (
        <div key={'ESSAA-positions'}>
          {essaaDescriptions.map((description, index) => (
            <TextSegmentDescription
              key={index + '-essaa'}
              keyOf={index + '-essaa'}
              segments={description.segments}
              isListItem={true}
            />
          ))}
        </div>
      ),
      technologies: [
        'Next JS',
        'React JS',
        'Jupyter Lab',
        'GCP',
        'Python',
        'Flask',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Mouxidea Limited',
      period: '06/2021 - 02/2022',
      responsibilities: [
        <div key={'Mouxidea-positions'}>
          {mouxideaDscriptions.map((description, index) => (
            <TextSegmentDescription
              key={index + '-mouxidea'}
              keyOf={index + '-mouxidea'}
              segments={description.segments}
              isListItem={true}
            />
          ))}
        </div>,
      ],
      technologies: ['React Js', 'Gatsby JS', '.NET Core', 'SSMS', 'Azure'],
    },
  ];

  return (
    <div className="py-4 h-auto min-h-[100vh] flex flex-col items-center justify-center bg-gray-200 space-y-4">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center py-8">Experience</h2>
      </div>
      {positions.map((position, index) => (
        <div
          key={index + position.title}
          className="w-80 md:w-2/3 shadow-md p-10 bg-white"
        >
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row justify-between w-full">
              <h3 className="text-lg font-semibold">
                {position.title} - {position.company}
              </h3>
              <p className="text-sm text-gray-500">{position.period}</p>
            </div>
            <ul
              key={position.title + index + 'responsibilities'}
              className="list-disc list-inside"
            >
              {position.responsibilities}
            </ul>
            <div className="flex flex-wrap gap-2 mt-2 self-end">
              {position.technologies.map((technology, index) => (
                <span
                  key={index + technology}
                  className="bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
