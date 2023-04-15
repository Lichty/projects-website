// CopyToClipboard.tsx
import { CircularProgress, Tooltip, IconButton } from '@mui/material';
import React, { useCallback, useState } from 'react';
import CopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

interface CopyToClipboardProps {
  targetRef: React.RefObject<HTMLElement>;
  className?: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ targetRef }) => {
  const [status, setStatus] = useState<'idle' | 'copying' | 'copied'>('idle');

  const copyToClipboard = useCallback(async () => {
    if (targetRef.current) {
      setStatus('copying');
      try {
        await navigator.clipboard.writeText(
          targetRef.current.textContent || ''
        );
        setStatus('copied');
        setTimeout(() => setStatus('idle'), 3000); // Reset to "idle" state after 2 seconds
      } catch (err) {
        console.error('Failed to copy text: ', err);
        setStatus('idle');
      }
    }
  }, [targetRef]);

  const renderIcon = () => {
    switch (status) {
      case 'copying':
        return <CircularProgress size={24} />;
      case 'copied':
        return <CheckIcon />;
      default:
        return <CopyIcon />;
    }
  };

  const renderTooltip = () => {
    switch (status) {
      case 'copying':
        return 'Copying';
      case 'copied':
        return 'Text Copied!';
      default:
        return 'Copy to Clipboard';
    }
  };

  const renderColor = () => {
    switch (status) {
      case 'copying':
        return 'warning';
      case 'copied':
        return 'success';
      default:
        return 'info';
    }
  };



  return (
    <Tooltip title={renderTooltip()} arrow placement='right'>
      <IconButton onClick={copyToClipboard} color={renderColor()}>
        {renderIcon()}
      </IconButton>
    </Tooltip>
  );
};

export default CopyToClipboard;
