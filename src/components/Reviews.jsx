import React from "react";
function Reviews(props){
  return(
    <div className="Reviews">
        <div className="reviews_cards">
              <img src={props.setReviews.src} alt="Логотип"/>
              <h5>{props.setReviews.names}</h5>
              <p>{props.setReviews.title}</p>
        </div>
    </div>
  )
}


export default Reviews;
