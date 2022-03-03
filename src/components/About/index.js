import React from 'react';
import aboutImg from '../../assets/images/about/about_img.png'
import Header from '../Header';

function About() {
    return(
        <section className="my-3">
            <Header />
            <div className="mydivcontainer my-5">
                <div className='mydiv'>
                    <h1 id="about">About Me</h1>
                        <p>I graduated in Business Administration in Brazil and have worked in the U.S. import/export companies, in Corporate events and as a graphic & web designer for a marketing Company and my own. Through it all I loved design in all its forms. I went back to school and majored in computer graphic design at Broward College, in Fort Lauderdale, FL. And since then I’ve engaged in design work for small businesses.
                        My DNA is both Latin and American. I can bridge the two because I have lived and worked in both Latin America and the U.S. I speak and create in Portuguese, Spanish and English.
                        An entrepreneurial--spirited creative with a business edge focus, global mindset, and proven ability to deliver results that align client visions with business goals. A dynamic and versatile professional with a “client--first” approach, dedicated to 100% client satisfaction.
                        I would love to be able to share my gifts, talents and experience with you!
                        Thank you for visiting my site and willing to know more about me!
                        </p>
                    </div>
                    <div className='mydiv'>
                        <img src={aboutImg} className="my-2" style={{ width: "auto" }} alt="about" />
                    </div>
            </div>
        </section>
  );
}
   

export default About;