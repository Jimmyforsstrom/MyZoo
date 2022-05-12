import { ImgHTMLAttributes } from "react";

export interface IExtendedAnimal {
    id: string;
    name: string;
    latinName : string;
    longDescription: string;
    imageUrl : string;
    isFed : boolean;
    lastFed: string;
}