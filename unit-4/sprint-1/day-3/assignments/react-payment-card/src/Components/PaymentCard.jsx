import React from 'react';

import { Card } from './Card';

export const PaymentCard=()=>{
  
    
    var Data={

        date:"28/10/2020",
        button:"Case Study",
        heading:"Amazon Gift Pay",
        subheading:"Desktop-Mobile",
        logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQruLgU5fG02eTysdwxjnScpytjcV0CKBvq-g&usqp=CAU",
        
    }

   
   

    return (
        <>

        

             <Card {...Data} />
  
       
        </>
    )


}