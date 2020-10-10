import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
export default function Home() {
	return (
		<>
			<h2>Opera and lied</h2>
			<Image src="./cropped_pic.jpg" alt="" />
		</>
	)
}