"use client"

import { ICustomBtn } from "@/types"
import { FC } from "react"

const CustomButton = ({title,containerStyles,handleClick}: ICustomBtn) => {
  return (
    <button disabled={false}
    type={'button'}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  )
}

export default CustomButton