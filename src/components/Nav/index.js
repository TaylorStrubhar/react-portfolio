import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    aboutSelected,
    currentCategory,
    setAboutSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="paintbrush"> 🖌️</span> Ira Taylor Strubhar
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
            <span onClick={() => setAboutSelected(true)}>About Me</span>
          </li>
          <li className="mx-2">
            <a href="#portfolio" onClick={() => setAboutSelected(false)}>
              Portfolio
            </a>
          </li>
          <li className="mx-2">
            <a href="#contact" onClick={() => setAboutSelected(false)}>
              Contact
            </a>
          </li>
          <li className="mx-2">
            <a href="#resume" onClick={() => setAboutSelected(false)}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;