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
        <p>Определение патологии происходит по коэффициенту Бьюкенена. На латеральном снимке измеряется длинная ось сердца (от бифуркации трахеи до верхушки) в сумме с короткой осью (ширина) под углом 90. Размер сопоставляется с длиной тела четвертого межреберного позвонка. Данный коэффициент не должен превышать 10,5 единиц</p>
    
        </div>
        <Button text='Закрыть' onClick={closeModal}/>
      </div>
    </div>
  );
};

export default Information;
