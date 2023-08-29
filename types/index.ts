import { CarCard } from '@/components';
import { MouseEventHandler } from "react";

export interface ICustomBtn {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
		btnType: 'button' | 'submit'; 
		textStyles?: string;
		rightIcon?: string;
		isDisabled?: boolean;
}

export interface ISearchManufacturer {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface ICustomFilter {
  title: string;
}

export interface ICarCard {
	city_mpg:number;
	class:string;
	combination_mpg:number;
	cylinders:number;
	displacement:number;
	drive:string;
	fuel_type:string;
	highway_mpg:number;
	make:string;
	model:string;
	transmission:string;
	year:number
}