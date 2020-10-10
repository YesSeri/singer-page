import React from 'react'
import styled from 'styled-components'
import Youtube from './Youtube'

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
const VideoContainer = styled.div`
`;

export default function Home() {
	return (
		<>

			<h2>Opera and lied</h2>
			<Image src="./cropped_pic.jpg" alt="" />
			<VideoContainer>
				<Youtube />
			</VideoContainer>
		</>
	)
}