import { useState } from "react";
import "./Reply.css";
import  Button  from "@mui/material/Button";
export default function Reply({ text }) {
  const [copied, setCopied] = useState(false);
 
text = text.slice(3);
  return (
    <div className="reply-container">
    <p
      
      className="replytion" id="replytion"
      
    >
      {text}

      
    </p>
    <Button className="copy" id="copy" disabled={copied} variant="contained" onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      }} >{copied ? "COPIED" : "COPY IT"}</Button>
      </div>
  );
}
