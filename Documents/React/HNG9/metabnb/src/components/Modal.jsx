import React, {useState} from "react";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Modal = ({closeModal}) => {

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-25 flex justify-center items-center z-50">
      <div className="w-[600px] h-[326px]">
        <div className="bg-white rounded-lg p-6">
          <div className="flex justify-between px-6 pb-5">
            <p>Connect Wallet</p>
            <button className="text-black text-lg hover:scale-125 font-extralight" onClick={closeModal}>X</button>
          </div>
          <hr />
          <div className="px-6 py-2 mt-3">
          <p className="text-[16px] font-light">Choose your preferred wallet:</p>
          </div>
          <div className="px-6 pb-4">
          <div className="flex justify-between border rounded-[12px] items-center p-3 hover:bg-[#CFD8DC]">
            <div className="flex items-center gap-3">
                <img src="Metamask.png" alt="Metamask" />
              <p>Metamask</p>
            </div>
            <MdOutlineKeyboardArrowRight color="#959DA6" />
          </div>
          <div className="flex justify-between border rounded-[12px] items-center p-3 hover:bg-[#CFD8DC] mt-4">
            <div className="flex items-center gap-3">
                <img src="WalletConnect.png" alt="WalletConnect" />
              <p>WalletConnect</p>
            </div>
            <MdOutlineKeyboardArrowRight color="#959DA6" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
