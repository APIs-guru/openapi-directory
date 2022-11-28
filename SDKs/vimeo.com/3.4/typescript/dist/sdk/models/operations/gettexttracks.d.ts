import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTextTracksPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class GetTextTracksRequest extends SpeakeasyBase {
    pathParams: GetTextTracksPathParams;
}
export declare class GetTextTracksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    textTracks?: shared.TextTrack[];
}
