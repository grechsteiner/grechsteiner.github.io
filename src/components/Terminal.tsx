import React from 'react';
import { useState, useEffect, useRef } from 'react';


type CommandType = {
  name: string;
  description: string;
  execute: (args: string[]) => string | React.JSX.Element;
};

export default function Terminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<Array<{ isCommand: boolean; content: string | React.JSX.Element }>>([
    { isCommand: false, content: 'Welcome to my terminal! Type "help" to see available commands.' },
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [tabCompletions, setTabCompletions] = useState<string[]>([]);
  const [showCompletions, setShowCompletions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands: CommandType[] = [
    {
      name: 'help',
      description: 'Display all available commands',
      execute: () => {
        return (
          <div className="flex flex-col">
            <p className="font-bold">Available commands:</p>
            {commands.map((cmd) => (
              <p key={cmd.name}>
                <span className="text-green-500">{cmd.name}</span> - {cmd.description}
              </p>
            ))}
          </div>
        );
      },
    },
    {
      name: 'clear',
      description: 'Clear the terminal',
      execute: () => {
        setOutput([]);
        return '';
      },
    },
    {
      name: 'echo',
      description: 'Echo the provided text',
      execute: (args) => args.join(' '),
    },
    {
      name: 'history',
      description: 'Show command history',
      execute: () => {
        return (
          <div className="flex flex-col">
            {history.map((cmd, index) => (
              <p key={index}>
                {index}: {cmd}
              </p>
            ))}
          </div>
        );
      },
    },
    {
      name: 'summary',
      description: 'Display a summary',
      execute: () => {
        return (
          <div className="flex flex-col">
            <p>This is a custom terminal built with React and TypeScript.</p>
            <p>It supports various commands and tab completion.</p>
            <p>Feel free to explore all the available commands!</p>
            <p>Built by [Your Name] for portfolio website.</p>
          </div>
        );
      },
    },
    {
      name: 'projects',
      description: 'Navigate to the projects page',
      execute: () => {
        window.location.href = '/projects';
        return 'Navigating to projects page...';
      },
    },
    {
      name: 'about',
      description: 'Navigate to the about page',
      execute: () => {
        window.location.href = '/about';
        return 'Navigating to about page...';
      },
    },
    {
      name: 'contact',
      description: 'Navigate to the contact page',
      execute: () => {
        window.location.href = '/contact';
        return 'Navigating to contact page...';
      },
    },
    {
      name: 'linkedin',
      description: 'Open LinkedIn profile',
      execute: () => {
        window.open('https://linkedin.com/in/your-username', '_blank');
        return 'Opening LinkedIn profile...';
      },
    },
    {
      name: 'github',
      description: 'Open GitHub profile',
      execute: () => {
        window.open('https://github.com/your-username', '_blank');
        return 'Opening GitHub profile...';
      },
    },
    {
      name: 'resume',
      description: 'View resume',
      execute: () => {
        window.open('/resume.pdf', '_blank');
        return 'Opening resume...';
      },
    },
    {
      name: 'email',
      description: 'Send an email',
      execute: () => {
        window.open('mailto:your-email@example.com', '_blank');
        return 'Opening email client...';
      },
    },
    {
      name: 'blog',
      description: 'Visit my blog',
      execute: () => {
        window.open('https://your-blog-url.com', '_blank');
        return 'Opening blog...';
      },
    },
  ];

  // Auto-scroll terminal to bottom when content changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  // Focus input on terminal click
  useEffect(() => {
    const handleTerminalClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    const terminal = terminalRef.current;
    if (terminal) {
      terminal.addEventListener('click', handleTerminalClick);
      return () => {
        terminal.removeEventListener('click', handleTerminalClick);
      };
    }
  }, []);

  // Tab completion logic
  const handleTabCompletion = () => {
    const matchingCommands = commands
      .map((cmd) => cmd.name)
      .filter((cmd) => cmd.startsWith(input));

    if (matchingCommands.length === 1) {
      setInput(matchingCommands[0] + ' ');
      setShowCompletions(false);
    } else if (matchingCommands.length > 1) {
      setTabCompletions(matchingCommands);
      setShowCompletions(true);
    }
  };

  // Handle command execution
  const executeCommand = (commandInput: string) => {
    const trimmedInput = commandInput.trim();
    if (trimmedInput === '') return;

    const args = trimmedInput.split(' ');
    const commandName = args[0].toLowerCase();
    const command = commands.find((cmd) => cmd.name === commandName);

    // Update history
    setHistory((prev) => [...prev, trimmedInput]);
    setHistoryIndex(-1);

    // Add command to output
    setOutput((prev) => [...prev, { isCommand: true, content: trimmedInput }]);

    // Execute command if it exists
    if (command) {
      const result = command.execute(args.slice(1));
      if (result !== '') {
        setOutput((prev) => [...prev, { isCommand: false, content: result }]);
      }
    } else {
      setOutput((prev) => [
        ...prev,
        { isCommand: false, content: `Command not found: ${commandName}. Type 'help' for available commands.` },
      ]);
    }
  };

  // Handle key presses
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
      setInput('');
      setShowCompletions(false);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      handleTabCompletion();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0 && historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else {
      setShowCompletions(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 min-h-0 bg-gray-900 text-green-400 font-mono rounded-md overflow-hidden border border-gray-700 shadow-lg">
      <div className="flex items-center px-2 py-1 bg-gray-800 border-b border-gray-700">
        <div className="flex-1 text-center text-xs text-gray-400">Terminal</div>
      </div>

      <div 
        ref={terminalRef}
        className="flex-1 p-2 overflow-y-auto"
      >
        {output.map((line, index) => (
          <div key={index} className="mb-1">
            {line.isCommand ? (
              <div className="flex">
                <span className="text-blue-400 mr-2">$</span>
                <span>{line.content}</span>
              </div>
            ) : (
              <div className="pl-4">{line.content}</div>
            )}
          </div>
        ))}

        {/* Current command line */}
        <div className="flex items-center">
          <span className="text-blue-400 mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none caret-green-400"
            autoFocus
          />
        </div>

        {/* Tab completions */}
        {showCompletions && tabCompletions.length > 0 && (
          <div className="pl-4 mt-1 flex flex-wrap gap-2">
            {tabCompletions.map((completion) => (
              <span 
                key={completion} 
                className="bg-gray-800 px-2 rounded cursor-pointer hover:bg-gray-700"
                onClick={() => {
                  setInput(completion + ' ');
                  setShowCompletions(false);
                  if (inputRef.current) inputRef.current.focus();
                }}
              >
                {completion}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}