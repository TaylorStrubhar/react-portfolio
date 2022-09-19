import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Myself</h1>
      <img src={coverImage} className="my-2" style={{ width: "70%" }} alt="cover" />
      <div className="my-2">
        <p>
            My name is Ira "Taylor" Strubhar and I graduated from Oregon State University with a degree in visual arts with an emphasis in painting.
            I am a spacial thinker with a work history in hospitality, management, retention and sales.
            Please feel free to reach out with any questions you might have.
        </p>
      </div>
    </section>
  );
}

export default About;