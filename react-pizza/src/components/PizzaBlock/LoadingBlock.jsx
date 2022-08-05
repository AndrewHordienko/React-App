import React from 'react'
import ContentLoader from "react-content-loader";

function LoadingBlock() {
   return (
      <ContentLoader
         speed={2}
         width={280}
         height={460}
         viewBox="0 0 280 460"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"

      >
         <circle cx="95" cy="181" r="2" />
         <circle cx="137" cy="133" r="120" />
         <rect x="0" y="275" rx="6" ry="6" width="280" height="26" />
         <rect x="0" y="318" rx="6" ry="6" width="280" height="84" />
         <rect x="0" y="409" rx="6" ry="6" width="91" height="37" />
         <rect x="147" y="409" rx="20" ry="20" width="127" height="43" />
      </ContentLoader>
   )
}

export default LoadingBlock