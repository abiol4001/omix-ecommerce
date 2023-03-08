import React from 'react'
type ArrowProps = {
    className?: string,
    style?: React.CSSProperties,
    onClick?: React.MouseEventHandler<HTMLDivElement>,
}

const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", background: "black", height: "40px", width: "40px", justifyContent: 'center', alignItems: "center", borderRadius: "50%", zIndex: "10" }}
            onClick={onClick}
        />
    )
}

export default NextArrow