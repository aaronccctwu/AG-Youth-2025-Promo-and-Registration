'use client'

import Script from 'next/script'
import React from 'react'

const DifyWidget: React.FC = () => {
  return (
    <div>
      <Script id="dify-init" strategy="afterInteractive">
        {`
          window.difyChatbotConfig = {
            token: 'EvdO3x4af0s4IauI',
            systemVariables: {}
          };
        `}
      </Script>
      <Script 
        src="https://udify.app/embed.min.js"
        id="EvdO3x4af0s4IauI"
        strategy="afterInteractive"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            #dify-chatbot-bubble-button {
              background-color: #1C64F2 !important;
            }
            #dify-chatbot-bubble-window {
              width: 24rem !important;
              height: 40rem !important;
            }
          `
        }}
      />
    </div>
  )
}

export default DifyWidget