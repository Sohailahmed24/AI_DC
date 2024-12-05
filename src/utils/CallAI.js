
const axios = require('axios');

 
// Replace this URL with the actual endpoint of the AI service you're using
const AI_API_URL =process.env.AI_API_URL;
const API_KEY = process.env.API_KEY;

const CallAI = async (prompt) => {
  try {
    // Make an API request to OpenAI's endpoint (you can replace this with your own AI service)
    const response = await axios.post(
      AI_API_URL,
      {
      //  model: "text-davinci-003",  // Specify the model version (for GPT-3, you can choose between different models)
        model:  "gpt-4",
        messages: [{ role: "user", content: prompt }],  // Pass the generated prompt
        max_tokens: 1,  // Max number of tokens (words) in the response
        temperature: 0.7,  // Controls randomness; adjust based on your needs
        top_p: 1,  // Controls diversity; 1.0 means high diversity
        n: 1,  // Number of completions to generate
        stop: ["###"],  // Optional: A stop sequence where the model will stop generating
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`, 
          'Content-Type': 'application/json', // Authentication header
        },
      }
    );
   
    // Extracting and returning the response
 //   console.log(response.data.choices[0].message.content.trim())
   // return response.data.choices[0].message.content.trim()
   // return response.data.choices[0].text.trim();  // The AI's response is in the "choices" array
  } catch (error) {
    console.error("Error calling AI:", error.response?.data || error.message);
    console.error("Error calling AI:", error);
    throw new Error("AI analysis failed");
  }
};

module.exports={CallAI}