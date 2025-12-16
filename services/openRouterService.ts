import { API_KEY, API_URL, MODEL_NAME, SYSTEM_PROMPT, DEFAULT_USER_PROMPT } from '../constants';
import { OpenRouterResponse } from '../types';

export const fetchAnswer = async (userQuestion: string): Promise<string> => {
  const userContent = userQuestion.trim() === "" ? DEFAULT_USER_PROMPT : userQuestion;

  const body = {
    model: MODEL_NAME,
    messages: [
      {
        role: "user",
        content: `${SYSTEM_PROMPT}\n\n使用者問題：${userContent}`
      }
    ]
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error(`API Request failed with status ${response.status}`);
    }

    const data: OpenRouterResponse = await response.json();
    
    if (data.choices && data.choices.length > 0) {
      return data.choices[0].message.content;
    } else {
      throw new Error("No answer received from the oracle.");
    }
  } catch (error) {
    console.error("Error fetching answer:", error);
    throw error;
  }
};