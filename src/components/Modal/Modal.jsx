import React, { useState } from 'react';
import './modal.scss'

const Modal = (props) => {
    return ( 
        <div className="Modal">
           <div className="modal-info">
               <h4>Josefina Higgins</h4>
               <div>
                   <p>Company</p>
                   <h4>Google</h4>

                   <p>Company</p>
                   <h4>Google</h4>

                   <p>Company</p>
                   <h4>Google</h4>
               </div>
           </div>
           <button onClick={()=>props.cancelModal(false)}>x</button>
        </div>
     );
}
 
export default Modal;