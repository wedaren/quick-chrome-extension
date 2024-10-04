import React from 'react';
import './Options.css';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return (
    <iframe
      src="https://chat.openai.com/"
      id="browserSite"
      title="openai"
      height="100%"
      width="100%"
      allow="camera; clipboard-write; fullscreen; microphone; geolocation"
    />
  );
};

export default Options;
