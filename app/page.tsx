'use client';

import { useState } from 'react';
import styles from './page.module.css';

type ModelInfo = {
  id: string;
  name: string;
  description: string;
  gameFile: string;
  color: string;
};

const models: ModelInfo[] = [
  {
    id: 'claude-opus',
    name: 'Claude Opus 4.1',
    description: 'つよい',
    gameFile: '/games/claude-opus-4.1.html',
    color: '#8b3aa6'
  },
  {
    id: 'claude-sonnet',
    name: 'Claude Sonnet 4',
    description: '高速で賢いClaude Sonnetモデル',
    gameFile: '/games/claude-sonnet-4.html',
    color: '#6b3aa6'
  },
  {
    id: 'gpt-free',
    name: 'ChatGPT Free',
    description: 'GPT-4oか4o-mini？？？',
    gameFile: '/games/chatgpt-free-plan.html',
    color: '#10a37f'
  },
  {
    id: 'gpt-oss',
    name: 'GPT OSS 20B',
    description: 'オープンウェイトGPTモデル',
    gameFile: '/games/gpt-oss-20b.html',
    color: '#2ea37f'
  },
  {
    id: 'gemini-flash',
    name: 'Gemini 2.5 Flash',
    description: 'Google最速のGeminiモデル',
    gameFile: '/games/gemini-2.5-flash.html',
    color: '#4285f4'
  },
  {
    id: 'gemini-pro',
    name: 'Gemini 2.5 Pro',
    description: 'Google最強のGeminiモデル',
    gameFile: '/games/gemini-2.5-pro.html',
    color: '#3175d4'
  },
  {
    id: 'deepseek-r1',
    name: 'DeepSeek R1',
    description: '推論特化型DeepSeekモデル',
    gameFile: '/games/deepseek-r1.html',
    color: '#ff6b6b'
  },
  {
    id: 'deepseek-v3',
    name: 'DeepSeek V3',
    description: '最新のDeepSeek V3モデル',
    gameFile: '/games/deepseek-v3.html',
    color: '#ff4757'
  },
  {
    id: 'grok3',
    name: 'Grok 3',
    description: 'xAIのGrokモデル',
    gameFile: '/games/grok3.html',
    color: '#1da1f2'
  },
  {
    id: 'qwen3-235b',
    name: 'Qwen 3 235B',
    description: 'Alibaba超大規模モデル',
    gameFile: '/games/qwen3-235B.html',
    color: '#ff6f00'
  },
  {
    id: 'qwen3-coder',
    name: 'Qwen 3 Coder',
    description: 'コーディング特化型Qwenモデル',
    gameFile: '/games/qwen3-coder.html',
    color: '#ff8c00'
  }
];

export default function Home() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            AIモデル性能比較
          </h1>
          <p className={styles.subtitle}>
            同じプロンプトで異なるAIモデルが生成したゲームを比較（2025年8月6日時点）
          </p>
        </div>

        <div className={styles.modelGrid}>
          {models.map((model) => (
            <div
              key={model.id}
              className={`${styles.modelCard} ${selectedModel === model.id ? styles.selected : ''}`}
              onClick={() => setSelectedModel(model.id)}
              style={{
                '--model-color': model.color
              } as React.CSSProperties}
            >
              <div className={styles.modelHeader}>
                <h2>{model.name}</h2>
                <div className={styles.modelBadge} />
              </div>
              <p className={styles.modelDescription}>
                {model.description}
              </p>
              <a
                href={model.gameFile}
                className={styles.playButton}
                onClick={(e) => e.stopPropagation()}
              >
                ゲームをプレイ
              </a>
            </div>
          ))}
        </div>

        <div className={styles.promptSection}>
          <h3>使用したプロンプト</h3>
          <div className={styles.promptBox}>
            <p className={styles.promptText}>Create a Brick Breaker Game using HTML, CSS and JavaScript.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>AIモデル比較実験 - 同一プロンプトによるゲーム生成の比較</p>
      </footer>
    </div>
  );
}
