import React, { useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
import { NAVIGATION } from '../redux/actions/GeneralAction';

export default()=>{

    const state = useSelector(state => state)
    const history = useHistory();
    const dispatch = useDispatch();
    const { General } = state;
    const { appData } = General;
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay: true,
        swipeToSlide: true,
        swipe:true,
       
      };



        const Buildimg=(path , name)=>{

                 return `${process.env.PUBLIC_URL}/${path}${name}`
            
       
        }
      const Godtlspg=()=>{
        history.push("/g/prddtls2")
        dispatch({type:NAVIGATION , payload:null})
        
      }
return<>
   <div>
       <div style={{ marginTop: 146 ,maxHeight:"474px"}}>
       <Slider {...settings}> 

                           <div style={{ height: "474px",width:"100%" }} >
                          <img src=  {Buildimg("images/","img2.jpg")}   ></img>
                      </div> 
                      <div style={{ height: "474px",width:"100%" }} >
                          <img src=  {Buildimg("images/","img3.jpg")}   ></img>
                      </div>   
      </Slider>
      </div> 
   
<div onClick={Godtlspg}>
    
<img src={Buildimg("images/","img1.jpg")}/>
<h2>product name</h2>
<h2><a href='javascript:void(0)'>product details</a></h2>
<h3><s>200rs</s>  195rs</h3>
<h3>product description</h3>
</div>

   </div>

   <div>
   <h3><b>email</b> ----</h3>
   <h3><b>phone no</b>----</h3>
   </div>
</>
}
