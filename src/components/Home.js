import React from 'react'
import styled from 'styled-components'
import Youtube from './Youtube'

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
const VideoContainer = styled.div`
	display:flex;
  @media (max-width: 768px) {
		display: block; 
  }
`;
const Video = styled.div`
	flex: 1; 
	margin: 1%;
`;

export default function Home() {
	const handlePlay = () => {
		console.log("VideoPlayed")
	}
	const handlePause = () => {
		console.log("VideoPause")
	}
	return (
		<>
			<h2>Opera and lied</h2>
			<Image src="./cropped_pic.jpg" alt="" />
			<VideoContainer>
				<Video>
					<Youtube videoId="IkMXMEplOIo" handlePlay={handlePlay} handlePause={handlePause}/>
				</Video>
				<Video>
					<Youtube videoId="IkMXMEplOIo" handlePlay={handlePlay} handlePause={handlePause}/>
				</Video>
			</VideoContainer>
		</>
	)
}