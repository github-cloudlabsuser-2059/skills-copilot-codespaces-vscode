import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

// /workspaces/skills-copilot-codespaces-vscode/pages/index.js


export default function Home() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <textarea
                style={{ width: '80%', height: '200px', marginBottom: '20px' }}
                value={markdown}
                onChange={handleChange}
            />
            <div style={{ width: '80%', border: '1px solid #ddd', padding: '20px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}
function reverseSentence(sentence) {
    return sentence
        .split(' ')
        .reverse()
        .join(' ')
        .replace(/^\w/, (c) => c.toUpperCase());
}

// Example usage:
const inputSentence = "hello world";
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence); // Output: "World hello"

function countWords(sentence) {
    return sentence.split(' ').filter(word => word.length > 0).length;
}

// Example usage:
const wordCount = countWords(inputSentence);
console.log(`Word count: ${wordCount}`); // Output: "Word count: 2"

function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Example usage:
const capitalizedSentence = capitalizeWords(inputSentence);
console.log(capitalizedSentence); // Output: "Hello World"