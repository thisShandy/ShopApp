import React, {useEffect, useState} from "react";
import "./Modal.css";
import { connect } from "react-redux";
import { X } from "react-feather";
import { openModal, setTotal } from "../../../redux/actions";
import {Link} from "react-router-dom";

const Modal = ({ modal, openModal, setTotal }) => {

  const [ card, setCard ] = useState({});

  useEffect(() => {

  }, [modal, card])

  return (
    <div style={ modal ? { display: "flex" } : { display: "none" } } className="modal">
      <div className="modal-content">
        <button onClick={() => {
          openModal();
          setTotal(0);
          setCard({});
        }} className="close">
          <X size={32} color="#FF9A8D" />
        </button>
        <div className="credit-card">
          <div className="row">
            <div className="name">Ivan Petrov</div>
          </div>
          <div className="row">
            <div className="id">•••• 	•••• 	•••• 	••••</div>
          </div>
          <div className="row">
            <div className="date">••/••</div>
          </div>
        </div>
        <div className="form">
          <div className="row">
            <input value={card.name} onChange={(e) => {
              setCard({
                ...card,
                name: e.target.value,
              });
            }} className="form-input" placeholder="Ivan Petrov" type="text"/>
          </div>
          <div className="row">
            <input value={card.number} onChange = {(e) => {
              const val = e.target.value;
              setCard({
                card,
                number: val.replace(/\W/gi, '').replace(/(.{4})/g, '$1 '),
              });
            }} className="form-input" maxLength="19" required placeholder="0000 0000 0000 0000" type="tel"/>
          </div>
          <div className="row">
            <input value={card.date} onChange = {(e) => {
              const val = e.target.value;
              setCard({
                ...card,
                date: val.replace(/\W/gi, '').replace(/(.{2})/, '$1/'),
              });
            }} className="form-input" placeholder="00/00" maxLength="5" type="tel"/>
          </div>
          <div className="row">
            <Link to="/order" className="order">order</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    modal: state.user.modal,
  };
};

const mapDispatchToProps = {
  openModal,
  setTotal,
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);