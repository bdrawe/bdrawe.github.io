import React from 'react'
import "../About/about.css"
import Image from 'react-bootstrap/Image'

class About extends React.Component {
    render() {
        return (
            <>
               <Image className="hero-image" src="https://media.deseretdigital.com/file/700df33538?type=jpeg&quality=55&c=15&a=4379240d" fluid/>
                <div>
                    <h3>About Section</h3>
                </div>
            </>
        )
    }
}
export default About;