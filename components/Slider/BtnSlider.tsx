import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

type Props = {
    moveSlide: () => void,
    direction: "prev" | "next"
}

const BtnSlider: React.FC<Props> = ({ moveSlide, direction }) => {
    return (
        <button
            onClick={moveSlide}
            className={`absolute top-0 left-0 ${direction === "next" ? " btn-slide next z-20 " : " btn-slide prev"}`}
        >
            {direction === "next" ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
        </button>
    );
};
<style></style>;
export default BtnSlider;
