import { Box, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface ProjectProps {
  title: string;
  children: ReactNode;
}

const Project = ({ title, children }: ProjectProps) => (
  <>
    <Typography>{title}</Typography>
    <Box>{children}</Box>
  </>
);

export default Project;
