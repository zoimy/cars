import { MouseEventHandler } from "react";

export interface ICustomBtn {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
}