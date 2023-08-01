import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {["home", "about", "work", "skills", "testimonial", "contact"].map(
        (item, index) => (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a
            key={item + index}
            href={`#${item}`}
            className='app__navigation-dot'
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
            title={item}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
