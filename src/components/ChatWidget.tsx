import { useEffect } from 'react';

export function ChatWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://frolicking-macaron-54f908.netlify.app/widget-loader.min.js';
    script.async = true;
    script.id = 'appraisily-chat-widget-loader';
    document.body.appendChild(script);

    return () => {
      const scriptElement = document.getElementById('appraisily-chat-widget-loader');
      if (scriptElement) {
        scriptElement.remove();
      }
      const containerElement = document.getElementById('appraisily-chat-widget-container');
      if (containerElement) {
        containerElement.remove();
      }
    };
  }, []);

  return null;
}