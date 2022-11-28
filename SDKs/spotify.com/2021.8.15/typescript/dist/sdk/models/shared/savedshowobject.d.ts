import { SpeakeasyBase } from "../../../internal/utils";
import { SimplifiedShowObject } from "./simplifiedshowobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-savedshowobject - Find more info on the official Spotify Web API Reference
**/
export declare class SavedShowObject extends SpeakeasyBase {
    addedAt?: Date;
    show?: SimplifiedShowObject;
}
