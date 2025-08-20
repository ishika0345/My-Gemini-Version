// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenAI,
} from '@google/genai';

async function runChat(prompt) {
  const ai = new GoogleGenAI({
    apiKey: 'AIzaSyBYUA4x5CNGFXavhA-zt-r0WNmNtkm406g',
  });
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
  };
  const model = 'gemini-2.5-pro';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let fullResponse = "";
  for await (const chunk of response) {
    if(chunk.text){
    fullResponse+=chunk.text;
    }
    console.log(fullResponse);
  }
  return fullResponse;
}

export default runChat;
