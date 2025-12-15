import React from "react";

const Hero = () => {
  return (
    <section
      className="header9 cid-qZxsgsNpXg2 mbr-fullscreen mbr-parallax-background"
      id="header9-h"
    >
      <div className="container" style={{ paddingLeft: "0px" }}>
        <div
          className="media-container-column mbr-white col-md-8"
          style={{ paddingTop: "25px", paddingLeft: "0px" }}
        >
          <h1
            className="mbr-section-title align-left mbr-bold mbr-fonts-style display-1"
            style={{ marginTop: "0px" }}
          >
            ACSTM{" "}
            <span
              style={{
                color: "rgba(63, 142, 252, 0)",
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "#011E81",
              }}
            >
              2024
            </span>
          </h1>
          <h3 className="mbr-section-subtitle align-left mbr-light pb-3 mbr-fonts-style display-5">
            6<sup>th</sup> Asian Conference on Science, Technology & Medicine
          </h3>
          <p
            className="mbr-text align-left pb-1 mbr-fonts-style display-7"
            style={{ paddingRight: "35px" }}
          >
            The Asian Conference on Science, Technology & Medicine (ACSTM) is a
            globally renowned academic event that fosters reporting, advanced
            research, and development in the entire field of Science,
            Technology, and Medicine. ACSTM provides a high-end academic
            platform for both early-career and established scientists and
            researchers to share exciting ideas, refresh their knowledge,
            strengthen collaboration, and build new networks across disciplines.
            Attending ACSTM-2024 is an opportunity for a rewarding experience.
          </p>
          <h4
            className="align-left mbr-fonts-style display-4 mb-3 mbr-bold"
            style={{ color: "#0d6786" }}
          >
            17-18 September 2024  Xi'an, China| Event Ended
          </h4>
          <div className="navbar-buttons mbr-section-btn">
            <a
              className="btn btn-sm btn-primary display-4"
              href="/acstm_brochure_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mbri-download mbr-iconfont mbr-iconfont-btn"></span>
              Download Brochure
            </a>
          </div>
        </div>
      </div>

      <div className="mbr-arrow hidden-sm-down" aria-hidden="true">
        <a href="#next">
          <i className="mbri-down mbr-iconfont"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
