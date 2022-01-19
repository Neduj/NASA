import {ICamera} from "./camera.interface";
import {IRover} from "./rover.interface";

export interface IPhotos {
  photos: IPhoto[]
}

export interface IPhoto {
  id: number;
  camera: ICamera;
  earth_date: string;
  sol: number;
  img_src: string;
  rover: IRover;
}
