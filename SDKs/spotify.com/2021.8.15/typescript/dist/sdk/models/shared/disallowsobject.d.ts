import { SpeakeasyBase } from "../../../internal/utils";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-disallowsobject - Find more info on the official Spotify Web API Reference
**/
export declare class DisallowsObject extends SpeakeasyBase {
    interruptingPlayback?: boolean;
    pausing?: boolean;
    resuming?: boolean;
    seeking?: boolean;
    skippingNext?: boolean;
    skippingPrev?: boolean;
    togglingRepeatContext?: boolean;
    togglingRepeatTrack?: boolean;
    togglingShuffle?: boolean;
    transferringPlayback?: boolean;
}
