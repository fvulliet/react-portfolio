import React from 'react';

const Skill = () => {
  return (
    <section className='my-28  px-5'>
      <header className='text-2xl font-bold pt-10'>
        <h2>Skills & Tools</h2>
      </header>
      <h4>UI</h4>
      <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6'>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='CSS 3'>
          <img src='./images/icons/figma.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Figma
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='CSS 3'>
          <img src='./images/icons/adobe-illustrator-cs6.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Illustrator / Inkscape
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='CSS 3'>
          <img src='./images/icons/adobe-photoshop-cs6.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Photoshop
        </div>
      </div>
      <h4>Software development</h4>
      <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6'>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Node Js'>
          <img src='./images/icons/c.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          C/C++
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Node Js'>
          <img src='./images/icons/qt.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Qt/QML
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Javascript'>
          <img src='./images/icons/javascript-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Javascript
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='React Js'>
          <img src='./images/icons/react-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          React JS
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Node Js'>
          <img src='./images/icons/python.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Python
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='HTML 5'>
          <img src='./images/icons/html5-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          HTML 5
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='CSS 3'>
          <img src='./images/icons/css3-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          CSS 3
        </div>
      </div>
      <h4>Continuous Integration</h4>
      <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6'>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='CSS 3'>
          <img src='./images/icons/jenkins.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Jenkins
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='CSS 3'>
          <img src='./images/icons/git.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Git
        </div>
      </div>
      <h4>Other</h4>
      <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6'>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='CSS 3'>
          <img src='./images/icons/reason-1.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Reason DAW
        </div>
      </div>
    </section>
  );
};

export default Skill;
