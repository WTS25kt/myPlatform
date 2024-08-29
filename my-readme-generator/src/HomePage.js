import React from 'react';
import './App.css'; // スタイルをインポート

function HomePage() {
  return (
    <div>
      <h1>
        <a href="https://www.google.com/search?q=GitHub+WTS25kt" target="_blank">スマホでWeb開発</a>
        <div className="tooltip" onClick={toggleTooltip}>手順書
          <div className="tooltiptext">
            <i className="fas fa-check-circle"></i> 0. 事前確認:生成AI等で作りたいアプリがある程度、設計できていること<br />
            <a href="https://www.google.com/search?q=GitHub+WTS25kt" target="_blank"><i className="fas fa-mobile-alt"></i> 1. GitHubでリポジトリを新規作成</a><br />
            <a href="https://github.com/WTS25kt" target="_blank"><i className="fas fa-mobile-alt"></i> 2. iPhoneのGitHubアプリでファイルを新規作成</a><br />
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
  const tooltip = document.querySelector('.tooltip');
  if (tooltip.classList.contains('tooltip-active')) {
    tooltip.classList.remove('tooltip-active');
  } else {
    tooltip.classList.add('tooltip-active');
  }
}

export default HomePage;