import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PhotoTypeEnum {
    Photo = "photo"
}
export declare class Photo extends SpeakeasyBase {
    height?: number;
    mediaKey?: string;
    type?: PhotoTypeEnum;
    url?: string;
    width?: number;
}
