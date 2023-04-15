import { NextApiRequest, NextApiResponse } from 'next';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'This is a placeholder description for project 1.',
    imageUrl: '/path/to/image.jpg',
    tags: ['tag1', 'tag2'],
    link: '/Portfolio/CodeBlockProject',
    pageTitle: 'programming',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'This is a placeholder description for project 2.',
    imageUrl: '/path/to/image.jpg',
    tags: ['tag2', 'tag3'],
    link: '/project/2',
    pageTitle: 'programming',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'This is a placeholder description for project 3.',
    imageUrl: '/path/to/image.jpg',
    tags: ['tag3', 'tag4'],
    link: '/project/3',
    pageTitle: 'knifemaking',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'This is a placeholder description for project 4.',
    imageUrl: '/path/to/image.jpg',
    tags: ['tag4', 'tag5'],
    link: '/project/4',
    pageTitle: 'knifemaking',
  },
  // Add more placeholder projects
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { pageTitle } = req.query;
  const filteredProjects = projects.filter(
    (project) => !pageTitle || project.pageTitle === pageTitle
  );

  res.status(200).json(filteredProjects);
}
