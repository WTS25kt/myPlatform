import React from 'react';
import './App.css'; // スタイルをインポート

function HomePage() {
  return (
    <div>
      <h1>
        <a href="https://github.com/WTS25kt" target="_blank" rel="noreferrer">スマホでWeb開発</a>
        <div className="tooltip" onClick={toggleTooltip}>手順書
          <div className="tooltiptext">
            <i className="fas fa-check-circle"></i> 0. 事前確認:生成AI等で作りたいアプリがある程度、設計できていること<br />
            <a href="https://www.google.com/search?q=GitHub+WTS25kt" target="_blank" rel="noreferrer"><i className="fas fa-mobile-alt"></i> 1. GitHubでリポジトリを新規作成</a><br />
            <a href="https://github.com/WTS25kt" target="_blank" rel="noreferrer"><i className="fas fa-mobile-alt"></i> 2. iPhoneのGitHubアプリでファイルを新規作成</a><br />
            <i className="fas fa-mobile-alt"></i> 3. 生成AIで作成したソースコードをコピー<br />
            <i className="fas fa-mobile-alt"></i> 4. 手順2のファイルに貼り付け<br />
            <i className="fas fa-mobile-alt"></i> 5. 複数のソースコードがある場合は手順2から4を繰り返す<br />
            <i className="fas fa-laptop"></i> 6. MacBookのGitHub Desktopでクローン
          </div>
        </div>
      </h1>
      <h2>新しいページへ</h2>
      <p><a href="/readme-generator">READMEジェネレーターを開く</a></p>
    </div>
  );
}

function toggleTooltip() {
  const tooltipText = document.querySelector('.tooltiptext');
  if (tooltipText.style.visibility === 'visible') {
    tooltipText.style.visibility = 'hidden';
    tooltipText.style.opacity = 0;
  } else {
    tooltipText.style.visibility = 'visible';
    tooltipText.style.opacity = 1;
  }
}

export default HomePage;