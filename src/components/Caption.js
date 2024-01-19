import { useState } from "react";
import "./Caption.css";
import  Button  from "@mui/material/Button";
export default function Caption({ text }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="cap-container">
    <p
      
      className="Caption" id="Caption"
      
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
