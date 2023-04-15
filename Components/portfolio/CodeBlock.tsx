import React, { useRef, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; // Import the desired dark theme css
import { Box, Paper } from '@mui/material';
import CopyToClipboard from '../CopyToClipboard';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'javascript',
}) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (ref && ref.current) {
      Prism.highlightElement(ref.current);
    }
  }, [code, language]);

  return (
    <Paper sx={{ background: 'rgba(48,48,48,1)', m: 3, pt: 1 }}>
      <Box
        sx={{
          pl: 2,
          pr: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {language.charAt(0).toUpperCase() + language.slice(1)}
        <CopyToClipboard targetRef={ref} />
      </Box>
      <pre style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        <code ref={ref} className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
    </Paper>
  );
};

export default CodeBlock;
