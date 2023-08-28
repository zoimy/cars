import { MouseEventHandler } from "react";

export interface ICustomBtn {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
		btnType: 'button' | 'submit'; 
}

export interface ISearchManufacturer {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface ICustomFilter {
  title: string;
}