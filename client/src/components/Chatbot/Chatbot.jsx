// ChatbotEmbed.jsx
import React, { useEffect } from 'react';

const ChatbotEmbed = () => {
  useEffect(() => {
    // Create a new script element
    const script = document.createElement('script');

    // Set the source and attributes for the script element
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute('chatbotId', 'r-HQY6HruCFBt4v7RKPvK');
    script.setAttribute('domain', 'www.chatbase.co');

    // Append the script element to the document's head
    document.head.appendChild(script);

    // Clean up function to remove the script element when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src="https://www.chatbase.co/chatbot-iframe/r-HQY6HruCFBt4v7RKPvK"
      title="Chatbot"
      width="100%"
      style={{ height: '100%', width:'250px',minHeight: '700px', border: 'none' }}
    ></iframe>
  );
};

export default ChatbotEmbed;
