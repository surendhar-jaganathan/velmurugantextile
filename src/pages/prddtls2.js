import React, { useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { NAVIGATION } from '../redux/actions/GeneralAction';

export default()=>{

    const state = useSelector(state => state)
    const history = useHistory();
    const dispatch = useDispatch();
    const { General } = state;
    const { appData } = General;
    const gohome=()=>{
        history.push("/")
        dispatch({type:NAVIGATION , payload:null})
        
    }

    const Buildimg=(path , name)=>{

        return `${process.env.PUBLIC_URL}/${path}${name}`
   

}
    return <>
        <div >

            <img src={Buildimg("images/", "img1.jpg")} />
            <h2>product name</h2>
            <h3><s>200rs</s>  195rs</h3>
            <p>Adults are primarily working and are usually sprinting, walking, and running errands at all hours of the day and night, so choose a fabric that is smooth and absorbent. Adult fibres such as cotton, poplin, and lightweight cambric are frequently used.</p>
            <h3> <b>Available stocks:</b> 50 </h3>
            <h3> <b>Available size:</b> L, Xl,XXL,XXXl </h3>
            <div>

                if u purchased as a lot when can provide the existing discount based on your no of lot
                <b>1 lot contains 100 pieces </b>
            </div>

        </div>


        <div style={{ width: 1000, backgroundColor: "blue", color: "white", height: 50,textAlign:'center',fontSize:25 }} onClick={gohome}> Gohome</div>
    </>
}