import React, { useEffect, useMemo } from 'react';
import './Main.css';

interface Props {
  title: string;
}

const Main: React.FC<Props> = ({ title }: Props) => {
  useEffect(() => {
    const iframe = document.getElementById('browserSite');
    const DNR_MODIFY_HEADERS = 'modifyHeaders';
    const DNR_REMOVE = 'remove';
    chrome.declarativeNetRequest.updateSessionRules(
      {
        removeRuleIds: [1],
        addRules: [
          {
            id: 1,
            priority: 1,
            action: {
              type: DNR_MODIFY_HEADERS,
              responseHeaders: [
                {
                  header: 'x-frame-options',
                  operation: DNR_REMOVE,
                },
                {
                  header: 'content-security-policy',
                  operation: DNR_REMOVE,
                },
              ],
            },
            condition: {
              urlFilter: '*',
              resourceTypes: [
                'main_frame',
                'sub_frame',
                'xmlhttprequest',
                'websocket',
              ],
            },
          },
        ],
      },
      function () {
        if (chrome.runtime.lastError) {
          console.error(
            'Error updating rules:',
            chrome.runtime.lastError.message
          );
        } else {
          console.log('Rules updated successfully');
          if (iframe) {
            // iframe.src = 'https://chatgpt.com';
            iframe.src = 'https://claude.2233.ai/auth0?secret=62696875776f726b746f676574686572a71a34056df65dff73d54e33a90c22883bca430c2eba5cb75d68f4237a40acf53aa0f8fc8516ca305081aaa651bc243fd24d713e81a673332a628bfe60eba0c8302aa2c65a7dcbca003d1e686f200c47fde556849801a662d2adc3f9d2148e680720c48b9982e912e2ba3eaee3b47f4e';
          }
        }
      }
    );
  }, []);
  return (
    <div className="MainContainer">
      <iframe
        id="browserSite"
        height="100%"
        width="100%"
        allow="camera; clipboard-write; fullscreen; microphone; geolocation"
      />
    </div>
  );
};

export default Main;
