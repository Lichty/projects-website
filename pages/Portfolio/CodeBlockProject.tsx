import React from 'react';
import Project from '@/Components/layout/Project';
import CodeBlock from '@/Components/portfolio/CodeBlock';

const CodeBlockProject = () => {

  const codeString = `import Project from '@/Components/layout/Project';
  import CodeBlock from '@/Components/portfolio/CodeBlock';
  import React from 'react';
  
  const CodeBlockProject = () => {
    return <Project title="Code Component"><CodeBlock text=""/></Project>;
  };
  
  export default CodeBlockProject;
  `; 

  return <Project title="Code Component"><CodeBlock code={codeString} language="javascript" /></Project>;
};

export default CodeBlockProject;
