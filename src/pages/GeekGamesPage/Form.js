import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const TallyFormComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="">
      <iframe
        data-tally-src="https://tally.so/embed/n0OeMy?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="1250"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="GEEK GAMES REGISTRATION"
      />
      <Helmet>
        <script>
          {`
            if (typeof window.Tally !== 'undefined') {
              window.Tally.loadEmbeds();
            } else {
              document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((element) => {
                element.src = element.dataset.tallySrc;
              });
            }
          `}
        </script>
      </Helmet>
    </div>
  );
};

export default TallyFormComponent;
