import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI with API key from environment variable
// The API key should be stored in .env file as VITE_GEMINI_API_KEY=your_actual_key

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "YOUR_GEMINI_API_KEY";

// Context about the World Atlas application
const WORLD_ATLAS_CONTEXT = `
You are an intelligent assistant for the World Atlas website, a React application that provides information about countries around the world. 

Key features of the World Atlas website:
1. Homepage (/) - Contains a hero section, about section with interesting country facts, and contact form
2. Country Listing Page (/country) - Shows all countries with search and filter functionality by region
3. Country Details Page (/country/:id) - Shows detailed information about a specific country
4. About Page (/about) - Displays interesting facts about various countries
5. Contact Page (/contact) - Allows users to send messages

Website Structure:
- Built with React and Vite
- Uses React Router for navigation
- Fetches country data from REST Countries API (https://restcountries.com/v3.1)
- Has a dark theme design with cyan accents
- Responsive design that works on mobile and desktop

Available Data:
- Country information including name, population, region, capital, flag, languages, currencies, etc.
- Search functionality to find countries by name
- Filter functionality to view countries by region (Africa, Americas, Asia, Europe, Oceania)

When answering questions:
1. First, try to answer based on the World Atlas website features and functionality
2. If the question is about general country information, provide accurate, up-to-date information
3. Be helpful and guide users on how to navigate the website
4. If you don't know something, be honest about it
5. Keep responses concise but informative
6. Maintain a friendly and helpful tone

Example interactions:
- User: "How do I search for a country?" -> "You can search for countries on the Country page (/country) using the search input at the top of the page."
- User: "What countries are in Africa?" -> "You can view African countries by going to the Country page and selecting 'africa' from the region filter dropdown."
- User: "Tell me about India" -> Provide factual information about India's geography, population, capital, etc.
`;

export const initializeGemini = (apiKey) => {
  if (!apiKey || apiKey === "YOUR_GEMINI_API_KEY") {
    console.warn("Gemini API key not set. Using fallback response system.");
    return null;
  }
  
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    return genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  } catch (error) {
    console.error("Failed to initialize Gemini:", error);
    return null;
  }
};

export const getGeminiResponse = async (model, prompt, chatHistory = []) => {
  if (!model) {
    // Fallback response if Gemini is not initialized
    return getFallbackResponse(prompt);
  }

  try {
    // Prepare the full context with chat history
    const fullContext = [
      {
        role: "user",
        parts: [{ text: WORLD_ATLAS_CONTEXT }]
      },
      {
        role: "model",
        parts: [{ text: "Understood. I'm ready to help users with the World Atlas website." }]
      },
      ...chatHistory,
      {
        role: "user",
        parts: [{ text: prompt }]
      }
    ];

    const result = await model.generateContent({
      contents: fullContext
    });
    
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error getting Gemini response:", error);
    return "Sorry, I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
};

// Fallback response system when Gemini is not available
const getFallbackResponse = (prompt) => {
  const lowerPrompt = prompt.toLowerCase();
  
  // Simple keyword-based responses
  if (lowerPrompt.includes('hello') || lowerPrompt.includes('hi') || lowerPrompt.includes('hey')) {
    return "Hello there! I'm your World Atlas assistant. How can I help you explore the world today?";
  } else if (lowerPrompt.includes('country') && (lowerPrompt.includes('list') || lowerPrompt.includes('show') || lowerPrompt.includes('all'))) {
    return "You can view all countries by visiting the Country page. You can also filter countries by region or search for specific countries using the search bar.";
  } else if (lowerPrompt.includes('search')) {
    return "To search for a country, go to the Country page and use the search input at the top. You can search by country name.";
  } else if (lowerPrompt.includes('filter') || lowerPrompt.includes('region')) {
    return "On the Country page, you can filter countries by region using the dropdown menu. Options include Africa, Americas, Asia, Europe, and Oceania.";
  } else if (lowerPrompt.includes('contact') || lowerPrompt.includes('help')) {
    return "If you need assistance, you can visit our Contact page to send us a message. You can also ask me any questions about navigating the World Atlas!";
  } else if (lowerPrompt.includes('about')) {
    return "The About page showcases interesting facts about various countries. You'll find information about capitals, populations, and unique facts about each country.";
  } else if (lowerPrompt.includes('capital')) {
    return "To find a country's capital, you can view the country cards on the Country page or see detailed information on the country's specific page.";
  } else if (lowerPrompt.includes('population')) {
    return "Population information is displayed on both the country cards and the detailed country pages. The data is updated regularly from reliable sources.";
  } else if (lowerPrompt.includes('thank')) {
    return "You're welcome! Is there anything else I can help you with regarding the World Atlas?";
  } else if (lowerPrompt.includes('bye') || lowerPrompt.includes('goodbye')) {
    return "Goodbye! Feel free to come back anytime if you want to explore more about our world. Have a great day!";
  } else {
    // Default response for unrecognized queries
    return "I'm your World Atlas assistant. I can help you navigate the website, find information about countries, and answer questions about the features of this application. What would you like to know?";
  }
};