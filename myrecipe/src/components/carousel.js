import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RecipeReviewCard from './cards';
const Cardcarousel=({title,recipes}) =>{
    return(
        <>
        <div className='headinglabel'>
  <label >{title}</label>
  </div>
<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={{
    desktop: {
      breakpoint: { max: 3000, min: 900 },
      items: 3,
      slidesToSlide: 2 
    }
  }}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlaySpeed={1}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={5}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
    {recipes.map((recipies)=><RecipeReviewCard recepie={recipies}/>)}

</Carousel>
</>);

}

export default Cardcarousel