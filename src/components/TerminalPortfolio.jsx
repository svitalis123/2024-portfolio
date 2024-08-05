import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const TerminalPortfolio = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(['Welcome to My Portfolio Terminal!', 'Type "help" for available commands.']);

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      processCommand(input);
      setInput('');
    }
  };

  const processCommand = (cmd) => {
    const lowerCmd = cmd.toLowerCase().trim();
    let response = '';

    switch (lowerCmd) {
      case 'help':
        response = 'Available commands: about, skills, projects, contact, clear';
        break;
      case 'about':
        response = 'I am a passionate developer with a love for creating unique web experiences.';
        break;
      case 'skills':
        response = 'My skills include: HTML, CSS, JavaScript, React, Node.js, and Python.';
        break;
      case 'projects':
        response = 'Some of my projects: 1. E-commerce website, 2. Weather app, 3. This terminal portfolio!';
        break;
      case 'contact':
        response = 'Email: your.email@example.com | GitHub: github.com/yourusername';
        break;
      case 'clear':
        setOutput([]);
        return;
      default:
        response = `Command not found: ${cmd}. Type "help" for available commands.`;
    }

    setOutput(prev => [...prev, `$ ${cmd}`, response]);
  };

  useEffect(() => {
    const terminal = document.getElementById('terminal-output');
    terminal.scrollTop = terminal.scrollHeight;
  }, [output]);

  return (
    <div className=" p-4 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    <div className="w-full max-w-6xl h-[50vh] dark:bg-neutral-800 bg-[#262626] shadow-2xl rounded-3xl overflow-hidden flex flex-col">
      <div className="bg-gray-900 px-4 py-3 flex items-center">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <Terminal className="text-green-400 mr-2" size={18} />
        <h1 className="text-green-400 text-sm font-semibold">Portfolio Terminal</h1>
      </div>
      <div className="flex-grow bg-black bg-opacity-90 p-6 overflow-hidden">
        <div id="terminal-output" className="text-green-400 font-mono text-sm mb-4 h-[calc(100%-2rem)] overflow-y-auto">
          {output.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <div className="flex items-center text-green-400 font-mono text-sm">
          <span className="mr-2">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleInput}
            className="flex-grow bg-transparent outline-none text-green-400"
            autoFocus
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default TerminalPortfolio;