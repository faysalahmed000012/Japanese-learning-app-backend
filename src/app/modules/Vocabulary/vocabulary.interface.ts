export interface IVocabulary {
  word: string;
  pronunciation: string;
  meaning: string;
  whenToSay: string;
  lesson: string;
  adminEmail: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IVocabularyPayload {
  word: string;
  pronunciation: string;
  meaning: string;
  whenToSay: string;
  lesson: string;
  adminEmail: string;
  createdAt: Date;
  updatedAt: Date;
}
