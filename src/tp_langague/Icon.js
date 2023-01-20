import {useContext} from 'react';
import fra from '../tp_langague/db tp/france.svg' ;
import ing from '../tp_langague/db tp/united.svg';
import spa from '../tp_langague/db tp/spain.svg' ;
import mo from '../tp_langague/db tp/morocco.svg';
import eta from '../tp_langague/db tp/italy.svg' ;
import {Langagues} from './LangagueContext' ;




const Icon = () => {

    
    const {setLang} = useContext(Langagues);


    return (
        <div  className='icon-app'>
            <img onClick={()=>setLang('FR')} src={fra}   alt="" className='icon' />
            <img onClick={()=>setLang('EN')} src={ing}   alt="" className='icon' />
            <img onClick={()=>setLang('ES')} src={spa}   alt="" className='icon' />
            <img onClick={()=>setLang('AR')} src={mo}  alt="" className='icon' />
            <img onClick={()=>setLang('ET')} src={eta}   alt="" className='icon'/>


        </div>
    );
}

export default Icon;
