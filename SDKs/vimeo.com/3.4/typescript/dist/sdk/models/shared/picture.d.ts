import { SpeakeasyBase } from "../../../internal/utils";
export declare class PictureSizes extends SpeakeasyBase {
    height: number;
    link: string;
    linkWithPlayButton?: string;
    width: number;
}
export declare enum PictureTypeEnum {
    Caution = "caution",
    Custom = "custom",
    Default = "default"
}
export declare class Picture extends SpeakeasyBase {
    active: boolean;
    link?: string;
    resourceKey: string;
    sizes: PictureSizes[];
    type: PictureTypeEnum;
    uri: string;
}
