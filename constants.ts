// 依照需求規格書第 7.1 節與 7.2 節定義
export const API_KEY = "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";
export const API_URL = "https://openrouter.ai/api/v1/chat/completions";
export const MODEL_NAME = "google/gemma-3n-e2b-it:free";

// 依照需求規格書第 5 節與第 7.2 節定義的 System Prompt
export const SYSTEM_PROMPT = `你是一位古老而智慧的學者，只提供抽象、詩意、且充滿象徵的啟示。回覆必須簡短（3-5句話），不解釋、不給予建議、不直接回答問題。`;

// 預設的空字串提問，當使用者沒有輸入時使用
export const DEFAULT_USER_PROMPT = "請給我一個當下的啟示。";
