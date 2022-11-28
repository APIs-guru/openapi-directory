import { SpeakeasyBase } from "../../../internal/utils";
import { ImageObject } from "./imageobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-categoryobject - Find more info on the official Spotify Web API Reference
**/
export declare class CategoryObject extends SpeakeasyBase {
    href?: string;
    icons?: ImageObject[];
    id?: string;
    name?: string;
}
