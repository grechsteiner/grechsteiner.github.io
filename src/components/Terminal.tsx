import { useEffect, useRef, useState } from 'react';


enum DisplayObjectType {
    CommandInput,
    CommandOutput
};

type DisplayObject = {
    displayType: DisplayObjectType;
    content: React.JSX.Element | null;
};

type Command = {
    name: string;
    description: string;
    execute: (currentCommandText: string) => React.JSX.Element | null;
};

// Global state kept outside the component to persist between re-renders and navigation
let globalInput = '';
let globalSavedInput = '';
let globalOutput: DisplayObject[] = [];
let globalHistory: string[] = [];
let globalHistoryIndex = -1;


type TerminalProps = { };

export default function Terminal({ }: TerminalProps): React.JSX.Element {
    const [input, setInput] = useState(globalInput);
    const [savedInput, setSavedInput] = useState(globalSavedInput);
    const [output, setOutput] = useState<DisplayObject[]>(globalOutput);
    const [history, setHistory] = useState<string[]>(globalHistory);
    const [historyIndex, setHistoryIndex] = useState(globalHistoryIndex);

    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    const commands: Command[] = [
        {
            name: 'help',
            description: 'Display available commands',
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
            description: 'Clear the terminal screen',
            execute: () => {
                setOutput([]);
                return null;
            },
        },
        {
            name: 'history',
            description: 'Display command history',
            execute: (currentCommandText) => {
                const updatedHistory: string[] = [...history, currentCommandText];
                return (
                    <div className="flex flex-col">
                        {updatedHistory.map((cmd, index) => (
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
            name: 'about',
            description: 'Navigate to the About page',
            execute: () => {
                window.location.href = '/about';
                return null;
            },
        },
        {
            name: 'work',
            description: 'Navigate to the Work page',
            execute: () => {
                window.location.href = '/work';
                return null;
            },
        },
        {
            name: 'projects',
            description: 'Navigate to the Projects page',
            execute: () => {
                window.location.href = '/projects';
                return null;
            },
        },
        {
            name: 'github',
            description: 'Visit my GitHub',
            execute: () => {
                window.open('https://github.com/grechsteiner', '_blank', 'noopener,noreferrer');
                return null;
            },
        },
        {
            name: 'linkedin',
            description: 'Visit my LinkedIn profile',
            execute: () => {
                window.open('https://linkedin.com/in/grechsteiner', '_blank', 'noopener,noreferrer');
                return null;
            },
        },
        {
            name: 'email',
            description: 'Send me an email',
            execute: () => {
                window.open('mailto:grayson@fullscale.org', '_blank', 'noopener,noreferrer');
                return null;
            },
        },
        {
            name: 'webring',
            description: 'Visit the SE Webring',
            execute: () => {
                window.open('https://se-webring.xyz/', '_blank', 'noopener,noreferrer');
                return null;
            },
        },
    ];

    // Update global state
    useEffect(() => { globalInput = input; }, [input]);
    useEffect(() => { globalSavedInput = savedInput; }, [savedInput]);
    useEffect(() => { globalOutput = output; }, [output]);
    useEffect(() => { globalHistory = history; }, [history]);
    useEffect(() => { globalHistoryIndex = historyIndex; }, [historyIndex]);

    // Auto-scroll terminal to bottom when content changes
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [output]);

    // Focus input on terminal click
    useEffect(() => {
        const handleTerminalClick = function(): void {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        };

        const terminal = terminalRef.current;
        if (terminal) {
            terminal.addEventListener('click', handleTerminalClick);
            return function(): void {
                terminal.removeEventListener('click', handleTerminalClick);
            };
        }
    }, []);

    // Handle command execution
    const handleExecuteCommand = function(commandInput: string): void {
        const trimmedInput: string = commandInput.trim();
        
        // Display command input
        setOutput((prev) => [...prev, { displayType: DisplayObjectType.CommandInput, content: <span>{commandInput}</span> }]);
        
        // If trimmed command is empty, display blank line and return
        if (trimmedInput === '') {
            setOutput((prev) => [...prev, { displayType: DisplayObjectType.CommandOutput, content: <span>&nbsp;</span> }]);
            return;
        }

        // Handle command
        const commandName: string = trimmedInput.toLowerCase();
        const command: Command | undefined = commands.find((cmd) => cmd.name === commandName);
        if (command) {
            // Execute the command
            const result: React.JSX.Element | null = command.execute(commandInput);

            // If command has output, display it
            if (result !== null) {
                setOutput((prev) => [...prev, { displayType: DisplayObjectType.CommandOutput, content: result }]);
            }

            // If it's not the "clear" command, display blank line after command output
            if (commandName !== 'clear') {
                setOutput((prev) => [...prev, { displayType: DisplayObjectType.CommandOutput, content: <span>&nbsp;</span> }]);
            }
        } else {
            // Display error message
            setOutput((prev) => [
                ...prev,
                { displayType: DisplayObjectType.CommandOutput, content: <span>-bash: {trimmedInput}: command not found</span> },
                { displayType: DisplayObjectType.CommandOutput, content: <span>&nbsp;</span> }
            ]);
        }

        // Add new command to command history
        // This is async, so do it last
        setHistory((prev) => [...prev, commandInput]);
        setHistoryIndex(-1);

        // Reset input state
        setInput('');
        setSavedInput('');
    };

    // Handle tab completion logic
    const handleTabCompletion = function(commandInput: string): void {
        const trimmedInput: string = commandInput.trim();

        const matchingCommands: string[] = commands
            .map((cmd) => cmd.name)
            .filter((cmd) => cmd.startsWith(trimmedInput) && trimmedInput !== '');

        if (matchingCommands.length === 1) {
            setInput(matchingCommands[0] + ' ');
        } else if (matchingCommands.length > 1) {
            setOutput((prev) => [
                ...prev,
                { displayType: DisplayObjectType.CommandInput, content: <span>{commandInput}</span> },
                { displayType: DisplayObjectType.CommandOutput, content: <span>{matchingCommands.join(" ")}</span> },
                { displayType: DisplayObjectType.CommandOutput, content: <span>&nbsp;</span> }
            ]);
        }
    };

    // Handle up arrow key press
    const handleUpArrowKeyPress = function(): void {
        if (history.length === 0) {
            return;
        }

        if (historyIndex === -1) {
            setSavedInput(input);
        }

        const newIndex: number = historyIndex === -1
            ? history.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
    }

    const handleDownArrowKeyPress = function(): void {
        if (historyIndex === -1) {
            return;
        }

        const newIndex: number = historyIndex + 1;
        if (newIndex < history.length) {
            setHistoryIndex(newIndex);
            setInput(history[newIndex]);
        } else {
            setHistoryIndex(-1);
            setInput(savedInput);
        }
    }

    // Handle key presses
    const handleKeyDown = function(e: React.KeyboardEvent<HTMLInputElement>): void {
        if (e.key === 'Enter') {
            handleExecuteCommand(input);
        } else if (e.key === 'Tab') {
            e.preventDefault();
            handleTabCompletion(input);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            handleUpArrowKeyPress();
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            handleDownArrowKeyPress();
        }
    };

    return (
        <div className="flex flex-col h-full overflow-hidden bg-gray-900 text-green-400 font-mono rounded-md border border-gray-700 shadow-lg">

            <div className="flex items-center px-2 py-1 bg-gray-800 border-b border-gray-700">
                <div className="flex-grow text-center text-xs text-gray-400">Terminal</div>
            </div>

            <div ref={terminalRef} className="flex-grow p-2 overflow-y-auto">
                {output.map((line, index) => (
                    <div key={index} className="mb-1">
                        {line.displayType === DisplayObjectType.CommandInput 
                            ? (
                                <div className="flex">
                                    <span className="text-blue-400 mr-2">$</span>
                                    <span>{line.content}</span>
                                </div>
                            ) 
                            : (
                                <div className="pl-4">{line.content}</div>
                            )}
                    </div>
                ))}

                <div className="flex items-center">
                    <span className="text-blue-400 mr-2">$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-grow bg-transparent outline-none caret-green-400"
                        autoFocus
                    />
                </div>
            </div>
        </div>
    );
}
