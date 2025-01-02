import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ChatInterface = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Chat With Your AI Assistant
        </h1>
        <p className="text-lg text-gray-600">
          Ask anything or get help with your portfolio decisions
        </p>
      </div>

      <div className="relative">
        <div className="min-h-[400px] bg-white rounded-lg mb-4 p-4">
          {/* Chat messages would go here */}
        </div>
        
        <div className="relative w-full">
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative flex items-center">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Send a message..."
                className="w-full p-4 pr-16 rounded-lg border border-gray-200 focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50 resize-none overflow-hidden shadow-sm"
                rows={1}
                style={{
                  minHeight: '56px',
                  maxHeight: '200px'
                }}
              />
              <button
                type="submit"
                className="absolute right-2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none disabled:opacity-50"
                disabled={!message.trim()}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
          <div className="text-center text-xs text-gray-500 mt-2">
            Free Research Preview. ChatGPT may produce inaccurate information.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;