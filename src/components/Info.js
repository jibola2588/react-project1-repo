import React from 'react'

export default function Info(props){ 
    return( 
       <div>
            <img src={props.image} className="card-img-top" alt="..." />
        <div  className="info px-4 pt-4">
            <h3 className="text-center name">Fawole Ajibola</h3>
       <p className="text-center dev">Frontend Developer</p>
       <p className="text-center site">jibolafawole.website</p>
       <div className="btnWrapper">
         <button className="btnEmail">
           <div>
             <i className="fa fa-envelope"></i>
           </div>
          <div className="email">Email</div>
         </button>
         <button className="bt btn-primary btnlinkedin">
           <div>
           <i className="fa fa-linkedin-square"></i>
           </div>
          <div className="email">Linkedin</div>
         </button>
       </div>
        </div>
       </div>
    )
}