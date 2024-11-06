import React from 'react';
import Nav from './Nav';

function Owner() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <main className="flex flex-col items-center justify-center mt-16 px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Rocky - Group F - 29</h2>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 max-w-screen-lg">
            <img 
              src="/src/images/rocky2.jpg" 
              alt="Owner profile" 
              className="object-cover h-full w-full"
            />
          
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Short Biography</h3>
          <p className="text-center text-gray-600 leading-relaxed">
            Hi i'm Rocky (Silayuth Suwanakoot), Now i'm study in Generation Junior Software Developer bootcamp :D
          </p>
        </div>
      </main>
    </div>
  );
}

export default Owner;
