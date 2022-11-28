import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AlbumDiscPropertiesContractMediaTypeEnum {
    Audio = "Audio",
    Video = "Video"
}
export declare class AlbumDiscPropertiesContract extends SpeakeasyBase {
    discNumber?: number;
    id?: number;
    mediaType?: AlbumDiscPropertiesContractMediaTypeEnum;
    name?: string;
}
