import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import PageTitle from '@/Components/layout/PageTitle';
import Introduction from '@/Components/layout/Introduction';
import ProjectGrid from '@/Components/layout/ProjectGrid';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

const PortfolioPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/projects');
      const projectData: Project[] = await res.json();
      setProjects(projectData);
    };

    fetchData();
  }, []);

  return (
    <Box>
      <PageTitle title="Knifemaking Portfolio" />
      <Introduction text="Intro text" />
      <ProjectGrid projects={projects} />
    </Box>
  );
};

export default PortfolioPage;
