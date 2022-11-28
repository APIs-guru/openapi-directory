import { SpeakeasyBase } from "../../../internal/utils";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-deviceobject - Find more info on the official Spotify Web API Reference
**/
export declare class DeviceObject extends SpeakeasyBase {
    id?: string;
    isActive?: boolean;
    isPrivateSession?: boolean;
    isRestricted?: boolean;
    name?: string;
    type?: string;
    volumePercent?: number;
}
