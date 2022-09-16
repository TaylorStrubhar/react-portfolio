import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
        <div className="header">
            <Nav
                    categories={categories}
                    setCurrentCategory={setCurrentCategory}
                    currentCategory={currentCategory}
                    contactSelected={contactSelected}
                    setContactSelected={setContactSelected}
            ></Nav>
        </div>
      <main>
        {!contactSelected ? (
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
