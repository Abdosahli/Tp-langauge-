import {React,useContext} from 'react';
import data from './db tp/data' ;
import {Langagues} from './LangagueContext' ; 
 

const Di2v = () => {
    const {lang} = useContext(Langagues);   
   


    
return (
        <div className='contunu'>
            <h1 className='titre1'> {data[lang].titlcc}  </h1>
            <p className='paragraf'>{data[lang].txt}</p>
            
        </div>
    );
}

export default Di2v;
