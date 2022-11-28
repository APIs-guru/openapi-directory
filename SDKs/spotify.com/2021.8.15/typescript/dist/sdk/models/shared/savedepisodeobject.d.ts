import { SpeakeasyBase } from "../../../internal/utils";
import { EpisodeObject } from "./episodeobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-savedepisodeobject - Find more info on the official Spotify Web API Reference
**/
export declare class SavedEpisodeObject extends SpeakeasyBase {
    addedAt?: Date;
    episode?: EpisodeObject;
}
