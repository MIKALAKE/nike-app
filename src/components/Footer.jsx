import React from 'react';

const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <>
      <footer className="bg-footer-theme pt-7 pb-5">
        <div className="nike-container text-slate-200">
          <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
            {titles.map((title, i) => (
              <div key={i} className="grid items-center">
                <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">{title.title}</h1>
              </div>
            ))}
            {links.map((list, i) => (
              <ul key={i}>
                {list.map((link, i) => (
                  <li key={i}>{link.link}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
