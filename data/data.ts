//データの型を定義
export interface Question {
    id: number;
    text: string;
    type: string;
  }
  
  export const questions: Question[] = [
    {
      id: 1,
      text: '周囲の意見よりも具体的な事実を優先する',
      type: 'information',
    },
    {
      id: 2,
      text: '一人よりも大人数でのアクティビティを好む',
      type: 'energy',
    },
    {
      id: 3,
      text: '霊的なものに興味を感じない',
      type: 'decision',
    },
    {
      id: 4,
      text: '変更が予定に生じたとき、ストレスを感じる',
      type: 'lifeStyle',
    },
    {
        id: 5,
        text: 'コンサートやライブに行くのが好き',
        type: 'information',
      },
      {
        id: 6,
        text: 'ストレス発散方法は人と会うことだ',
        type: 'energy',
      },
      {
        id: 7,
        text: '人を説得する時は理論で攻める',
        type: 'decision',
      },
      {
        id: 8,
        text: '規則を守ることが好き',
        type: 'lifeStyle',
      }
  ]