import { SpeakeasyBase } from "../../../internal/utils";
export declare class PhotoImages extends SpeakeasyBase {
    height?: number;
    url?: string;
    width?: number;
}
export declare class Photo extends SpeakeasyBase {
    blurhash?: string;
    images?: PhotoImages[];
    photoId?: string;
    thumbnail?: string;
    url?: string;
}
