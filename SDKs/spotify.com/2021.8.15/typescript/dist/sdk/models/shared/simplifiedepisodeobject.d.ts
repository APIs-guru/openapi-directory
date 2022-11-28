import { SpeakeasyBase } from "../../../internal/utils";
import { ExternalUrlObject } from "./externalurlobject";
import { ImageObject } from "./imageobject";
import { EpisodeRestrictionObject } from "./episoderestrictionobject";
import { ResumePointObject } from "./resumepointobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedepisodeobject - Find more info on the official Spotify Web API Reference
**/
export declare class SimplifiedEpisodeObject extends SpeakeasyBase {
    audioPreviewUrl?: string;
    description?: string;
    durationMs?: number;
    explicit?: boolean;
    externalUrls?: ExternalUrlObject;
    href?: string;
    htmlDescription?: string;
    id?: string;
    images?: ImageObject[];
    isExternallyHosted?: boolean;
    isPlayable?: boolean;
    language?: string;
    languages?: string[];
    name?: string;
    releaseDate?: string;
    releaseDatePrecision?: string;
    restrictions?: EpisodeRestrictionObject;
    resumePoint?: ResumePointObject;
    type?: string;
    uri?: string;
}
