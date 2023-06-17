import React from "react";
import "./information.scss";
import Button from "../../ui/button/Button";

const Information = ({setModal}) => {
  const closeModal = () => {
    setModal(false)
  }
  return (
    <div className="container">
      <div className="information">
        <div className="text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis, voluptatem nihil iste facere quaerat neque, ut corrupti magnam id et officia quasi accusantium sed quae dignissimos vitae, deserunt cum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis, voluptatem nihil iste facere quaerat neque, ut corrupti magnam id et officia quasi accusantium sed quae dignissimos vitae, deserunt cum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis, voluptatem nihil iste facere quaerat neque, ut corrupti magnam id et officia quasi accusantium sed quae dignissimos vitae, deserunt cum.</p>
    
        </div>
        <Button text='Закрыть' onClick={closeModal}/>
      </div>
    </div>
  );
};

export default Information;
