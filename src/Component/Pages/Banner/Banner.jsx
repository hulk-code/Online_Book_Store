import React from 'react';
import bannerImege from '../../../assets/banner_books-removebg-preview.png'

const Banner = () => {
    return (
        <div className='mt-5 mb-5 '>
            <div className="hero bg-base-200 min-h-screen rounded-b-lg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerImege}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Твоя следующая история начинается здесь</h1>
      
      <button className="btn btn-accent mt-5">View The List</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;