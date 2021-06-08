import React from 'react'

const main = () => {
  return (
    <main>
      <div className='intro'>Hello, I'm Putra!</div>
      <div className='tagline'>
        MERN/MEVN Developer | Vue-React-Express | Humanize Design | Humble Dev
      </div>
      {/* <!-- Find your icons from here - https://fontawesome.com/icons?d=gallery&s=brands --> */}
      <div className='icons-social'>
        <a target='_blank' href='https://github.com/flexdinesh'>
          <i className='fab fa-github'></i>
        </a>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/putra-reza-f-3b226253/'
        >
          <i className='fab fa-linkedin'></i>
        </a>
        <a target='_blank' href='https://www.linkedin.com/in/dineshpandiyan'>
          <i className='fab fa-instagram'></i>
        </a>
      </div>
    </main>
  );
};

export default main;
