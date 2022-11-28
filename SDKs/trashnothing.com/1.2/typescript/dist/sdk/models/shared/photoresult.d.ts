import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Photo thumbnail data.
**/
export declare class PhotoResultThumbnail extends SpeakeasyBase {
    height?: number;
    url?: string;
    width?: number;
}
/**
 * The result of uploading or editing a photo.
**/
export declare class PhotoResult extends SpeakeasyBase {
    photoId?: string;
    thumbnail?: PhotoResultThumbnail;
}
