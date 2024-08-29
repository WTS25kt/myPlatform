import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function ReadmeGenerator() {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [installation, setInstallation] = useState('');
  const [usage, setUsage] = useState('');

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const generateMarkdown = () => {
    return `
# ${projectName}

## 概要
${description}

## インストール手順
\`\`\`
${installation}
\`\`\`

## 使用方法
\`\`\`
${usage}
\`\`\`
    `;
  };

  return (
    <div>
      <h1>READMEジェネレーター</h1>
      <div>
        <label>プロジェクト名:</label>
        <input type="text" value={projectName} onChange={handleInputChange(setProjectName)} />
      </div>
      <div>
        <label>概要:</label>
        <textarea value={description} onChange={handleInputChange(setDescription)} />
      </div>
      <div>
        <label>インストール手順:</label>
        <textarea value={installation} onChange={handleInputChange(setInstallation)} />
      </div>
      <div>
        <label>使用方法:</label>
        <textarea value={usage} onChange={handleInputChange(setUsage)} />
      </div>
      <h2>プレビュー</h2>
      <ReactMarkdown>{generateMarkdown()}</ReactMarkdown>
    </div>
  );
}

export default ReadmeGenerator;