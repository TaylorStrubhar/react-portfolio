import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    { name: 'about me', description: 'Get to know me better' },
    { name: 'portfolio', description: 'A listing of my work' },
    { name: 'contact', description: 'My contact information' },
    { name: 'resume', description: 'View my qualifications and work history' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [aboutSelected, setAboutSelected] = useState(false);

  return (
    <div>
        <div className="header">
            <Nav
                    categories={categories}
                    setCurrentCategory={setCurrentCategory}
                    currentCategory={currentCategory}
                    aboutSelected={aboutSelected}
                    setAboutSelected={setAboutSelected}
            ></Nav>
        </div>
      <main>
        {!aboutSelected ? (
          <>
            <Project currentCategory={currentCategory}></Project>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
