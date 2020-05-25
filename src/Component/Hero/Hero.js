import React from "react";
import './Hero.css';
import Button from '../Button/Button';
export default function Home({main_class,title,description,className,offer,Route,Button_txt}){
    return (
    <div className={main_class}>
        <div className='undr_hero_bg'>
            <div className='txt_wth_undr_img'>
              <div className='hero_cntn'>
              <p className='ttle'>{title}</p>
               <p className='des'>{description}<span className='hero_offer'>{offer}</span></p>
               <Button className={className} destination={Route} Button_txt={Button_txt}/>
              </div>
            </div>
        </div>
    </div>
    )
}