import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl, tomorrow  } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useState, useEffect } from 'react';
import { ClipboardIcon, CopiedIcon } from '../assets/icons';

export default function CodeBlock ({node, value, inline, className, children, ...props}) {
      const [copied, setCopied] = useState(false);

      useEffect(() => {
        const timer = setTimeout(() => {
          setCopied(false)
        }, 1500)
        return () => clearTimeout(timer)
      }, [copied])
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
  
    <div className="code">
      <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
        <button className='icon copy-icon'>
          {copied ? <CopiedIcon /> : <ClipboardIcon/>}
        </button>
      </CopyToClipboard>
          <SyntaxHighlighter
            {...props}
            className="block-code"
            showLineNumbers={true}
            showInlineLineNumbers={false}
            lineNumberStyle={{fontStyle: 'normal', color: '#374151'}}
            language={match[1]}
            PreTag="div"
            style={tomorrow}
          >
            {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
    </div>
        ) : (
         <code {...props} className="inline-code">
            {children}
          </code>
        )
      }
