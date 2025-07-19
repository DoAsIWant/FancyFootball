"use client";

import Image from "next/image";
import styled from "@emotion/styled";

const VideoWrapper = styled.div`
  width: 100%;
  margin-top: 134px;

  @media (max-width:768px){
    margin-top:60px;
  }
`;

export default function VideoContainer() {
  return (
    <section>
      <VideoWrapper>
        <Image
          src="/images/video-image.png"
          alt="Video Poster"
          width={1000}
          height={600}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            minHeight: "600px",
            minWidth: "325px",
          }}
        />
      </VideoWrapper>
    </section>
  );
}
