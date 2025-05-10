This project is a text AI chatbot built with Angular v19 on the frontend and Node.js v20 on the backend.

**Getting Started:**

1.  GROQ API Key: 
 To connect this project to the AI, you will need a GROQ API key. You can obtain a free API key by signing up at " https://console.groq.com/keys ".

2.  Install Node Modules:
 Before running the project, you need to install the necessary dependencies for both the frontend and the backend. Open your terminal and navigate to each directory (`ai-chatbot-frontend` and `ai-chatbot-backend`) separately. In each directory, run the command:
     
   " npm install "
    
3.  Configuration:
   -- Backend:
 Create a ` .env ` file in the root of your `ai-chatbot-backend` directory and add your GROQ API key like this:
        
        GROQ_API_KEY=YOUR_FREE_API_KEY
        
  -- Frontend: 
No specific API key configuration is needed in the frontend.

Running the Project: 
1.  Backend: 
Navigate to the `ai-chatbot-backend` directory in your terminal and start the server using:
    
   " npm start "
    
    (or `node server.js` if you don't have a `start` script in your `package.json`).
2.  Frontend: 
Open a new terminal window, navigate to the `ai-chatbot-frontend` directory, and start the Angular development server using:
    
   " ng serve "
    
    This will typically open the chatbot interface in your web browser at `http://localhost:4200`.

Now you should be able to interact with the text AI chatbot!