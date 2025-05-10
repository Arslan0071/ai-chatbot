require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');


const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/message', async (req, res) => {
    const userMessage = req.body.message;
    console.log('User: ' + userMessage);

// Implementation Of Groq AI
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_MODEL = 'llama-3.3-70b-versatile';


try {
    const response = await axios.post(
        'https://api.groq.com//openai/v1/chat/completions',
        {
            model: GROQ_MODEL,
            messages: [{ role: 'user', content: userMessage }]
        },
        {
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            }
        }
    );

    const data = response.data;

    if (data.choices && data.choices.length > 0 && data.choices[0].message && data.choices[0].message.content) {
        const botReply = data.choices[0].message.content;
        console.log('Bot (Groq): ' + botReply);
        res.json({ reply: botReply });
    } else {
        console.error('Unexpected response format from Groq API:', data);
        res.json({ reply: 'Unexpected response from the AI.' });
    }

} catch (error) {
    console.error('Error sending request to Groq API:', error);
    res.status(500).json({ reply: 'Failed to communicate with the AI.' });
}
});


 app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });