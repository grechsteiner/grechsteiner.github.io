import { useState, useEffect, useRef } from 'react';

const AVAILABLE_COMMANDS = [
    "help",
    "clear",
    "summary",
    "history",
    "echo",
    "page",
    "linkedin",
    "github",
    "resume",
    "email",
    "portfolio"
];

type CommandPage = {
    name: string;
    commands: string[];
    description: string;
};

type TerminalProps = {

};
  
export default function Terminal({ }: TerminalProps) {
    const [input, setInput] = useState<string>("");
    const [history, setHistory] = useState<string[]>([
        "Welcome to my personal website terminal! Type 'help' to see available commands.",
        "This terminal is fully interactive - try using tab completion and command history.",
        ""
    ]);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number>(-1);
    const [tabSuggestions, setTabSuggestions] = useState<string[]>([]);
    const [tabIndex, setTabIndex] = useState<number>(-1);

    const inputRef = useRef<HTMLInputElement>(null);
    const outputRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom of terminal when history changes
    useEffect(() => {
        if (outputRef.current) {
        outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    }, [history]);

    // Focus input on mount and click
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        setTabSuggestions([]);
    setTabIndex(-1);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Handle Tab for autocomplete
        if (e.key === "Tab") {
        e.preventDefault();
        handleTabComplete();
        }

        // Handle Enter to execute command
        if (e.key === "Enter") {
        executeCommand();
        }

        // Handle ArrowUp for command history
        if (e.key === "ArrowUp") {
        e.preventDefault();
        navigateHistory(-1);
        }

        // Handle ArrowDown for command history
        if (e.key === "ArrowDown") {
        e.preventDefault();
        navigateHistory(1);
        }

        // Handle Escape to clear input
        if (e.key === "Escape") {
        setInput("");
        setTabSuggestions([]);
        setTabIndex(-1);
        }
    };

    const navigateHistory = (direction: number) => {
        if (commandHistory.length === 0) return;

        let newIndex = historyIndex + direction;
        
        // Ensure index stays within bounds
        if (newIndex < -1) newIndex = -1;
        if (newIndex >= commandHistory.length) newIndex = commandHistory.length - 1;
        
        setHistoryIndex(newIndex);
        
        if (newIndex === -1) {
        setInput("");
        } else {
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
        }
    };

    const handleTabComplete = () => {
        if (input === "") return;
        
        // Filter commands that start with the current input
        const matches = AVAILABLE_COMMANDS.filter(cmd => 
        cmd.startsWith(input.toLowerCase())
        );

        if (matches.length === 1) {
        // If only one match, complete it
        setInput(matches[0]);
        setTabSuggestions([]);
        setTabIndex(-1);
        } else if (matches.length > 1) {
        // If multiple matches and tab was pressed again with same suggestions
        if (tabSuggestions.length > 0 && matches.every(m => tabSuggestions.includes(m))) {
            // Cycle through suggestions
            const nextIndex = (tabIndex + 1) % matches.length;
            setTabIndex(nextIndex);
            setInput(matches[nextIndex]);
        } else {
            // First time seeing these suggestions
            setTabSuggestions(matches);
            addToHistory(`Suggestions: ${matches.join(", ")}`);
            setTabIndex(0);
            setInput(matches[0]);
        }
        }
    };

    const addToHistory = (text: string) => {
        setHistory(prev => [...prev, text]);
    };

    const executeCommand = () => {
        const trimmedInput = input.trim().toLowerCase();
        
        if (trimmedInput === "") return;
        
        // Add command to history
        addToHistory(`$ ${trimmedInput}`);
        
        // Add to command history for up/down navigation
        setCommandHistory(prev => [...prev, trimmedInput]);
        setHistoryIndex(-1);

        // Process command
        processCommand(trimmedInput);
        
        // Clear input
        setInput("");
        setTabSuggestions([]);
        setTabIndex(-1);
    };

    const processCommand = (cmd: string) => {
        const args = cmd.split(" ");
        const command = args[0];
        
        // Store full command for history
        const fullCmd = cmd;

        switch (command) {
        case "help":
            addToHistory("Available commands:");
            AVAILABLE_COMMANDS.forEach(cmd => {
            addToHistory(`  ${cmd}`);
            });
            addToHistory("");
            addToHistory("Command usage:");
            addToHistory("  help      - Show this help message");
            addToHistory("  clear     - Clear terminal screen");
            addToHistory("  summary   - Display info about this site");
            addToHistory("  history   - Show command history");
            addToHistory("  echo      - Echo back text (echo hello world)");
            addToHistory("  linkedin  - Open LinkedIn profile");
            addToHistory("  github    - Open GitHub profile");
            addToHistory("  resume    - Open resume");
            addToHistory("  email     - Open email client");
            addToHistory("  portfolio - Open portfolio");
            addToHistory("");
            addToHistory("Navigation tips:");
            addToHistory("  - Use Tab for command autocomplete");
            addToHistory("  - Use Up/Down arrows to navigate command history");
            break;
            
        case "clear":
            setHistory([]);
            break;
            
        case "summary":
            addToHistory("Welcome to My Personal Website");
            addToHistory("---------------------------");
            addToHistory("I'm a developer passionate about creating interactive web experiences.");
            addToHistory("This terminal interface is designed to showcase my skills and provide");
            addToHistory("an alternative way to navigate my portfolio.");
            addToHistory("");
            addToHistory("Feel free to explore using the available commands!");
            addToHistory("Use 'help' to see all commands.");
            break;
            
        case "history":
            if (commandHistory.length === 0) {
            addToHistory("No command history yet");
            } else {
            addToHistory("Command history:");
            commandHistory.forEach((cmd, index) => {
                addToHistory(`  ${index + 1}  ${cmd}`);
            });
            }
            break;
            
        case "echo":
            const echoText = args.slice(1).join(" ");
            if (echoText) {
            addToHistory(echoText);
            } else {
            addToHistory("");
            }
            break;
            
        case "linkedin":
            addToHistory("Opening LinkedIn profile...");
            window.open("https://linkedin.com/in/yourprofile", "_blank");
            break;
            
        case "github":
            addToHistory("Opening GitHub profile...");
            window.open("https://github.com/yourusername", "_blank");
            break;
            
        case "resume":
            addToHistory("Opening resume...");
            window.open("/resume.pdf", "_blank");
            break;
            
        case "email":
            addToHistory("Opening email client...");
            window.open("mailto:your.email@example.com", "_blank");
            break;
            
        case "portfolio":
            addToHistory("Opening portfolio...");
            window.open("/portfolio", "_blank");
            break;
            
        default:
            addToHistory(`Command not found: ${command}`);
            addToHistory("Type 'help' to see available commands");
        }
    };
        

    const focusInput = () => {
        inputRef.current?.focus();
    };

    return (
        <div 
        className="flex flex-col bg-gray-900 text-green-400 p-4 rounded-md w-full h-96 font-mono text-sm shadow-lg border border-gray-700"
        onClick={focusInput}
        >
        <div className="flex items-center justify-between mb-2">
            <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs text-gray-400">
            ~ terminal@yourname
            </div>
        </div>
        
        <div 
            ref={outputRef}
            className="flex-1 overflow-y-auto mb-2 whitespace-pre-wrap"
        >
            {history.map((line, i) => (
            <div key={i} className="mb-1">{line}</div>
            ))}
        </div>
        
        <div className="flex items-center">
            <span className="mr-2">$</span>
            <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none border-none text-green-400"
            spellCheck="false"
            autoComplete="off"
            autoFocus
            />
        </div>
        </div>
    );
}
