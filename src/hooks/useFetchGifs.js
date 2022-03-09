import { useState,useEffect } from "react";
import getGifs from "../helpers/GetGifs";
export const useFetchGifs = (anime)=>{

    const [state, setState] = useState({    
        data:[],
        loading:true
    });
    
    useEffect(() => {
        getGifs(anime).then(imgs => {
                setState({
                    data:imgs,
                    loading:false
                })
      
        });
    }, [anime])
    
    

    return state;
}