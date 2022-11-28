import { SpeakeasyBase } from "../../../internal/utils";
import { CopyrightObject } from "./copyrightobject";
import { ExternalUrlObject } from "./externalurlobject";
import { ImageObject } from "./imageobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedshowobject - Find more info on the official Spotify Web API Reference
**/
export declare class SimplifiedShowObject extends SpeakeasyBase {
    availableMarkets?: string[];
    copyrights?: CopyrightObject[];
    description?: string;
    explicit?: boolean;
    externalUrls?: ExternalUrlObject;
    href?: string;
    htmlDescription?: string;
    id?: string;
    images?: ImageObject[];
    isExternallyHosted?: boolean;
    languages?: string[];
    mediaType?: string;
    name?: string;
    publisher?: string;
    type?: string;
    uri?: string;
}
