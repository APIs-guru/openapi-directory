import { SpeakeasyBase } from "../../../internal/utils";
import { AlbumObject } from "./albumobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-savedalbumobject - Find more info on the official Spotify Web API Reference
**/
export declare class SavedAlbumObject extends SpeakeasyBase {
    addedAt?: Date;
    album?: AlbumObject;
}
