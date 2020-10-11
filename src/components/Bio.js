import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
    max-width: 25%;
    height: auto;
    float: left;
    padding: 0 10px 0 0;
    @media (max-width: 768px) {
    	max-width: 50%;
    }
`
const Div = styled.div`
    margin: auto; 
    max-width:70vw;
    @media (max-width: 1440px) {
        max-width: 90vw;
    }
    @media (max-width: 768px) {
        max-width: 100vw;
    }
`
export default function Bio() {
    return (
        <Div>
            <h1>Bio</h1>
            <Image src="./happy_pic.jpg" align="left" />
            <p>Henrik Zenkert is born in Kalmar, Sweden, in the souther parts of Sweden. His studies began in Växjö, under Lawrence Johnson, but really took off after two years in Vadstena. After that followed a Bachelor of Voice at the Royal Danish Academy of Music 2014-2017. His studies were completed in Vienna at the Universität für Musik und Darstellende Kunst Wien from 2017-2020 were he became a Master of Voice. His repertoire contains roles such as Don Alfonso from Cosi fan Tutte and Bartolo from Le Nozze di Figaro. In the autumn of 2019 he sang the role of Geronimo at the Schönnbrunner Schlosstheater, to great critical acclaim.   </p>
        </Div>
    )
}