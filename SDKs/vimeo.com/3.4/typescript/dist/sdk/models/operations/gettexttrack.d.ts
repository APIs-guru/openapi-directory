import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTextTrackPathParams extends SpeakeasyBase {
    texttrackId: number;
    videoId: number;
}
export declare class GetTextTrackRequest extends SpeakeasyBase {
    pathParams: GetTextTrackPathParams;
}
export declare class GetTextTrackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    legacyError?: shared.LegacyError;
    textTrack?: shared.TextTrack;
}
